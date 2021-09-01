import { server } from "../../../config";
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

const blog = ({ blog }) => {
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
    <main>
      <Header title={blog.title} pages={pages} page="Blog Post" bgImg={bgImg} />
      <BlogPageContainer>
        <BlogLayout>
          <Blog blog={blog} />
          <BlogAside />
        </BlogLayout>
      </BlogPageContainer>
    </main>
  );
};

export default blog;

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/blogs/${context.params.id}`);
  const blog = await res.json();

  return {
    props: {
      blog,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/blogs`);
  const blogs = await res.json();
  const ids = blogs.map((blog) => blog.id);
  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
