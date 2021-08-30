import styled from "styled-components";
import BlogItem from "./Blog Item";

const BlogsListContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    max-width: 50vw;
  }
`;

const BlogList = ({ blogs }) => {
  return (
    <BlogsListContainer>
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </BlogsListContainer>
  );
};

export default BlogList;
