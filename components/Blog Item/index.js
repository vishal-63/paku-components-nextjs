import Link from "next/link";
import Image from "next/image";
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
  const date = new Date(blog.datePublished);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  return (
    <Link
      href="/blogs/[slug]"
      as={`/blogs/${blog.slug}`}
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
              {month}, {day}
            </BlogInfoText>
          </BlogInfoWrapper>

          <BlogInfoWrapper>
            <BlogInfoIcon>
              <BsFillPersonFill />
            </BlogInfoIcon>
            <BlogInfoText>Jeet Shah</BlogInfoText>
          </BlogInfoWrapper>
        </BlogArticleInfo>
        <div style={{ overflow: "hidden", width: "100%", height: "100%" }}>
          <BlogImg>
            <Image
              src={blog.coverPhoto.url}
              alt={blog.imgAlt}
              layout="intrinsic"
              width={720}
              height={420}
            />
          </BlogImg>
        </div>
      </BlogArticle>
    </Link>
  );
};

export default BlogItem;
