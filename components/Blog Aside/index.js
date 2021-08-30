import Link from "next/link";
import {
  AsideSearch,
  SearchLabel,
  SearchIcon,
  SearchInput,
  AsideBox,
  AsideBoxTitle,
  AsideContainer,
  CategoriesList,
  Category,
  CategoryNumber,
  PostDate,
  PostDay,
  PostList,
  PostMonth,
  PostTitle,
} from "./BlogAsideElements";
import { BiSearch } from "react-icons/bi";

const BlogAside = () => {
  const inputChange = () => {
    const searchLabel = document.getElementById("search-label");
    const searchInput = document.getElementById("search");
    searchInput.value !== ""
      ? (searchLabel.innerHTML = "")
      : (searchLabel.innerHTML = "Search the blog...");
  };
  return (
    <AsideContainer>
      <AsideSearch>
        <SearchLabel htmlFor="search" id="search-label">
          Search the blog...
        </SearchLabel>
        <SearchInput
          type="text"
          id="search"
          onChange={inputChange}
        ></SearchInput>
        <SearchIcon>
          <BiSearch />
        </SearchIcon>
      </AsideSearch>

      <AsideBox>
        <AsideBoxTitle>CATEGORIES</AsideBoxTitle>
        <CategoriesList>
          <Category className="active">
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              All Categories
            </p>
            <CategoryNumber style={{ color: "#151515" }}>64</CategoryNumber>
          </Category>
          <Category>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Consulting
            </p>
            <CategoryNumber>23</CategoryNumber>
          </Category>
          <Category>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Analytics
            </p>
            <CategoryNumber>10</CategoryNumber>
          </Category>
          <Category>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Management
            </p>
            <CategoryNumber>15</CategoryNumber>
          </Category>
        </CategoriesList>
      </AsideBox>
      <AsideBox>
        <AsideBoxTitle>LATEST POSTS</AsideBoxTitle>
        <PostList>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              margin: " 1rem 0",
            }}
          >
            <PostDay>
              <PostDate>24</PostDate>
              <PostMonth>MAY</PostMonth>
            </PostDay>
            <Link href="/blog/1">
              <PostTitle>
                Market Research Tips For Small Business Owners
              </PostTitle>
            </Link>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              margin: " 1rem 0",
            }}
          >
            <PostDay>
              <PostDate>12</PostDate>
              <PostMonth>MAY</PostMonth>
            </PostDay>
            <Link href="/blog/2">
              <PostTitle>Implementing Digital Transformation</PostTitle>
            </Link>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              margin: " 1rem 0",
            }}
          >
            <PostDay>
              <PostDate>03</PostDate>
              <PostMonth>MAY</PostMonth>
            </PostDay>
            <Link href="/blog/3">
              <PostTitle>Achieving Effective Brand Management</PostTitle>
            </Link>
          </li>
        </PostList>
      </AsideBox>
    </AsideContainer>
  );
};

export default BlogAside;
