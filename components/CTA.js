import Link from "next/link";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import bg from "../assets/images/cta-bg.jpg";

const Container = styled.div`
  width: 99vw;
  padding: 2.5rem 1rem;

  @media (min-width: 541px) {
    padding: 4rem 0;
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    @media (min-width: 541px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      gap: 0;
    }
  }
`;

const CtaTitle = styled.h3`
  font-family: Helvetica, sans-serif;
  font-size: 1.3rem;
  max-width: 380px;
  text-align: inherit;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #fff;

  @media (min-width: 541px) {
    font-size: 2rem;
  }
`;

const CtaBtn = styled.span`
  max-width: 200px;
  color: #fff;
  background-color: #fff;
  color: var(--primary-blue);
  border-radius: 30px;
  border: 1px solid #fff;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.6rem 1.5rem;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;

  &:hover {
    background-color: transparent;
    color: #fff;
    transition: all 0.2s;
  }

  @media (min-width: 541px) {
    font-size: 1.2rem;
  }
`;

const CTA = () => {
  const parallaxBg = bg.src;
  return (
    <Parallax bgImage={parallaxBg} bgImageAlt="Parallax Image" strength={500}>
      <Container>
        <div>
          <CtaTitle>Want to start working with us?</CtaTitle>
          <CtaBtn>
            <Link href="/contact">Contact Us</Link>
          </CtaBtn>
        </div>
      </Container>
    </Parallax>
  );
};

export default CTA;
