import { GraphQLClient, gql } from "graphql-request";

import { server } from "../../../config";
import Meta from "../../../components/Meta";
import Blog from "../../../components/Blog Article";
import styled from "styled-components";
import BlogAside from "../../../components/Blog Aside";
import Header from "../../../components/Header";
import bgImg from "../../../assets/images/blog1-bg.jpg";

const BlogPageContainer = styled.section`
  width: 100%;
  margin: 3rem auto;

  @media (min-width: 900px) {
    margin: 6rem auto;
  }
`;

const BlogLayout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0 1rem;
  flex-direction: column;

  @media (min-width: 900px) {
    padding: 0 2rem;
    flex-direction: row;
  }
`;

const graphcms = new GraphQLClient(process.env.GRAPHQL_API_ENDPOINT);

const POSTQUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      article {
        html
      }
      coverPhoto {
        url
      }
      datePublished
      title
      metaDescription
      metaKeyword
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

const blog = ({ post }) => {
  const pages = [
    {
      page: "Home",
      link: "/",
    },
    {
      page: "Blogs",
      link: "/blogs",
    },
  ];

  return (
    <>
      <Meta
        title={post.title}
        keyword={post.metaKeyword.toString()}
        description={post.metaDescription}
      />

      <main>
        <Header
          title={post.title}
          pages={pages}
          page="Blog Post"
          bgImg={bgImg}
        />
        <BlogPageContainer>
          <BlogLayout>
            <Blog blog={post} />
            <BlogAside />
          </BlogLayout>
        </BlogPageContainer>
      </main>
    </>
  );
};

export default blog;

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const { post } = await graphcms.request(POSTQUERY, { slug });

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}
