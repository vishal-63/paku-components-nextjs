import Link from "next/link";
import {
  BlogArticle,
  BlogArticleInfo,
  BlogArticleTitle,
  BlogImg,
  BlogInfoIcon,
  BlogInfoText,
  BlogInfoWrapper,
} from "./BlogItemElements";
import { BiCalendarAlt, BiMessageAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.webp";
import blog3 from "../../assets/images/blog-3.jpg";

const BlogItem = ({ blog }) => {
  console.log(blog.id);
  return (
    <Link
      href="/blog/[id]"
      as={`/blog/${blog.id}`}
      style={{ display: "block" }}
    >
      <BlogArticle>
        <BlogArticleTitle>{blog.title}</BlogArticleTitle>

        <BlogArticleInfo>
          <BlogInfoWrapper>
            <BlogInfoIcon>
              <BiCalendarAlt />
            </BlogInfoIcon>
            <BlogInfoText>
              {blog.month}, {blog.date}
            </BlogInfoText>
          </BlogInfoWrapper>

          <BlogInfoWrapper>
            <BlogInfoIcon>
              <BiMessageAlt />
            </BlogInfoIcon>
            <BlogInfoText>{blog.comments} comments</BlogInfoText>
          </BlogInfoWrapper>

          <BlogInfoWrapper>
            <BlogInfoIcon>
              <BsFillPersonFill />
            </BlogInfoIcon>
            <BlogInfoText>{blog.author}</BlogInfoText>
          </BlogInfoWrapper>
        </BlogArticleInfo>
        <div style={{ overflow: "hidden", width: "100%", height: "100%" }}>
          <BlogImg>
            <img src={blog.img} alt={blog.imgAlt} />
          </BlogImg>
        </div>
      </BlogArticle>
    </Link>
  );
};

export default BlogItem;
