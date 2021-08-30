import styled from "styled-components";
import Link from "next/link";

const PageTitle = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.bgImg}) center;
  background-size: cover;
  min-height: 100px;
  color: #fff;
  font-size: 1.25rem;
  font-family: Helvetica, sans-serif;
  letter-spacing: 2px;

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
  background-color: #eff1f7;
  height: 65px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;

  @media (min-width: 1100px) {
    font-size: 1rem;
  }
`;

const HomeLink = styled.span`
  color: #3a7bd5;
  text-decoration: none;
`;

const Header = ({ title, page, pages, bgImg }) => {
  return (
    <>
      <PageTitle bgImg={bgImg.src}>{title}</PageTitle>
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
