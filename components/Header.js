import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const PageTitle = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.bgImg});
  background-position: center;
  background-size: cover;
  min-height: 100px;
  color: #fff;
  font-size: 1.5rem;
  font-family: Helvetica, sans-serif;
  letter-spacing: 2px;
  margin-top: ${({ scrollNav }) => (scrollNav ? "80px" : "120px")};

  @media (min-width: 768px) {
    font-size: 2rem;
    padding-left: 20vw;
    padding-right: 20vw;
  }

  @media (min-width: 900px) {
    font-size: 3rem;
    min-height: 192px;
  }
`;

const PageCrumb = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blue-shade-1);
  height: 3rem;
  font-family: "Montserrat", sans-serif;
  font-size: 0.75rem;

  @media (min-width: 1100px) {
    height: 4rem;
    font-size: 1rem;
  }
`;

const HomeLink = styled.span`
  color: var(--blue-shade-5);
  text-decoration: none;
`;

const Header = ({ title, page, pages, bgImg }) => {
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY >= 35 ? setScrollNav(true) : setScrollNav(false)
    );
  });

  return (
    <>
      <PageTitle bgImg={bgImg.src} scrollNav={scrollNav}>
        {title}
      </PageTitle>
      <PageCrumb>
        {pages.map((pages, index) => {
          return (
            <div key={index}>
              <HomeLink>
                <Link href={pages.link}>{pages.page}</Link>
              </HomeLink>
              &nbsp;&nbsp;&nbsp;&nbsp; &gt; &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          );
        })}
        {page}
      </PageCrumb>
    </>
  );
};

export default Header;
