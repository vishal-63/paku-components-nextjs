import Link from "next/link";
import Image from "next/image";
import {
  BlogContainer,
  ArticleContainer,
  ArticleDate,
  ArticleDateContainer,
  ArticleFooter,
  ArticleFooterIcons,
  ArticleFooterText,
  ArticleHeader,
  ArticleMonth,
  ArticlePara,
  ArticleTitle,
  HeaderList,
  Icon,
  Quote,
  QuoteContainer,
  QuoteIcon,
  RecentPostsContainer,
  RecentPost,
  RecentPostTitle,
  RecentPostWrapper,
} from "./BlogArticleElements.js";
import { BiComment } from "react-icons/bi";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaPinterestP,
  FaRegThumbsUp,
  FaTwitter,
} from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AsideBoxTitle } from "../Blog Aside/BlogAsideElements.js";

const Blog = ({ blog }) => {
  return (
    <BlogContainer>
      <ArticleContainer>
        <ArticleHeader>
          <div style={{ display: "flex", margin: "0 -1rem" }}>
            <HeaderList>
              <Icon>
                <BiComment />
              </Icon>
              {blog.comments}
            </HeaderList>
            <HeaderList>
              <Icon>
                <FaRegThumbsUp />
              </Icon>
              {blog.likes}
            </HeaderList>
          </div>
          <div style={{ display: "flex" }}>
            <Icon>
              <BsFillPersonFill />
            </Icon>
            by {blog.author}
          </div>
        </ArticleHeader>
        <ArticleDateContainer>
          <ArticleDate>{blog.date}</ArticleDate>
          <ArticleMonth>{blog.month}</ArticleMonth>
        </ArticleDateContainer>
        <ArticleTitle>{blog.title}</ArticleTitle>
        <ArticlePara>{blog.para1}</ArticlePara>
        <Image
          src={blog.img}
          alt="small business"
          style={{ marginTop: "2.25rem", width: "100%" }}
          layout="intrinsic"
        />
        <ArticlePara>{blog.para2}</ArticlePara>
        <QuoteContainer>
          <QuoteIcon>
            <svg
              style={{ display: "block", position: "relative" }}
              fill="none"
              viewBox="0 0 18 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.54 11.74c0-.87-.24-1.61-.72-2.22-.73-.92-2.14-1.03-2.96-.85-.34-1.93 1.3-4.39 3.42-5.45L6.65.94C3.45 2.46.31 5.96.85 10.37 1.19 13.16 2.8 15 5.08 15c1 0 1.83-.29 2.48-.88.66-.59.98-1.38.98-2.38zm9.43 0c0-.87-.24-1.61-.72-2.22-.73-.92-2.14-1.03-2.96-.85-.34-1.93 1.3-4.39 3.42-5.45L16.08.94c-3.2 1.52-6.34 5.02-5.8 9.43.34 2.79 1.95 4.63 4.23 4.63 1 0 1.83-.29 2.48-.88.66-.59.98-1.38.98-2.38z"
                fill="url(#a)"
              />
              <defs>
                <linearGradient
                  id="a"
                  gradientUnits="userSpaceOnUse"
                  x1="9.38"
                  x2="9.38"
                  y1=".94"
                  y2="15"
                >
                  <stop stopColor="#16C7F8" />
                  <stop offset="1" stopColor="#367ED9" />
                </linearGradient>
              </defs>
            </svg>
          </QuoteIcon>
          <Quote>{blog.quote}</Quote>
        </QuoteContainer>
        <ArticlePara>{blog.para3}</ArticlePara>
        <ArticleFooter>
          <ArticleFooterText>Share this post</ArticleFooterText>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ArticleFooterIcons>
              <FaFacebookF />
            </ArticleFooterIcons>
            <ArticleFooterIcons>
              <FaTwitter />
            </ArticleFooterIcons>
            <ArticleFooterIcons>
              <FaGooglePlusG />
            </ArticleFooterIcons>
            <ArticleFooterIcons>
              <FaPinterestP />
            </ArticleFooterIcons>
          </div>
        </ArticleFooter>
      </ArticleContainer>
      <RecentPostsContainer>
        <AsideBoxTitle>Recent Posts</AsideBoxTitle>
        <RecentPostWrapper>
          <Link href="/blog/[id]" as={`/blog/${blog.recentPost1}`}>
            <RecentPost to={blog.recentPost1}>
              <Image
                src={blog.recentPost1Img}
                alt="blog-1"
                style={{ maxWidth: "100%", cursor: "pointer" }}
                layout="intrinsic"
              />
              <RecentPostTitle>{blog.recentPost1Title}</RecentPostTitle>
              <ArticleHeader>
                <div style={{ display: "flex", margin: "0 -1rem" }}>
                  <HeaderList>
                    <Icon>
                      <BiComment />
                    </Icon>
                    {blog.comments}
                  </HeaderList>
                  <HeaderList>
                    <Icon>
                      <FaRegThumbsUp />
                    </Icon>
                    {blog.likes}
                  </HeaderList>
                </div>
                <div style={{ display: "flex" }}>
                  <Icon>
                    <BsFillPersonFill />
                  </Icon>
                  by {blog.author}
                </div>
              </ArticleHeader>
            </RecentPost>
          </Link>
          <Link href="/blog/[id]" as={`/blog/${blog.recentPost2}`}>
            <RecentPost to={blog.recentPost2}>
              <Image
                src={blog.recentPost2Img}
                alt="blog-2"
                style={{ maxWidth: "100%", cursor: "pointer" }}
                layout="intrinsic"
              />
              <RecentPostTitle>{blog.recentPost2Title}</RecentPostTitle>
              <ArticleHeader>
                <div style={{ display: "flex", margin: "0 -1rem" }}>
                  <HeaderList>
                    <Icon>
                      <BiComment />
                    </Icon>
                    {blog.comments}
                  </HeaderList>
                  <HeaderList>
                    <Icon>
                      <FaRegThumbsUp />
                    </Icon>
                    {blog.likes}
                  </HeaderList>
                </div>
                <div style={{ display: "flex" }}>
                  <Icon>
                    <BsFillPersonFill />
                  </Icon>
                  by {blog.author}
                </div>
              </ArticleHeader>
            </RecentPost>
          </Link>
        </RecentPostWrapper>
      </RecentPostsContainer>
    </BlogContainer>
  );
};

export default Blog;
