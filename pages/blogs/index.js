import styled from "styled-components";
// import "dotenv/config";
import { GraphQLClient, gql } from "graphql-request";

import Meta from "../../components/Meta";
import Header from "../../components/Header";
import bgImg from "../../assets/images/blogs-background.jpg";
import BlogList from "../../components/BlogList";
import BlogAside from "../../components/Blog Aside/";

const BlogPageContainer = styled.main`
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

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      coverPhoto {
        url
      }
    }
  }
`;

const blogs = ({ posts }) => {
  console.log(process.env.GRAPHQL_API_ENDPOINT);
  const pages = [{ page: "Home", link: "/" }];
  return (
    <>
      <Meta title="Blogs - Paku Components" />
      <Header title="Blogs" pages={pages} page="Blogs" bgImg={bgImg} />
      <BlogPageContainer>
        <BlogLayout>
          <BlogList blogs={posts} />
          <BlogAside />
        </BlogLayout>
      </BlogPageContainer>
    </>
  );
};

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default blogs;
