import styled from "styled-components";
import Meta from "../components/Meta";
import Header from "../components/Header";
import { server } from "../config";
import bgImg from "../assets/images/blogs-background.jpg";
import BlogList from "../components/BlogList";
import BlogAside from "../components/Blog Aside/";

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

const blogs = ({ bloglist }) => {
  const pages = [{ page: "Home", link: "/" }];
  return (
    <div>
      <Meta title="Blogs - Paku Components" />
      <Header title="Blogs" pages={pages} page="Blogs" bgImg={bgImg} />
      <BlogPageContainer>
        <BlogLayout>
          <BlogList blogs={bloglist} />
          <BlogAside />
        </BlogLayout>
      </BlogPageContainer>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/blogs`);
  const bloglist = await res.json();

  return {
    props: {
      bloglist,
    },
  };
};

export default blogs;
