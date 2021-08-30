import styled from "styled-components";

export const ParallaxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  z-index: 2;

  @media (min-width: 1100px) {
    padding: 100px 0;
  }
`;

export const ParallaxTitle = styled.p`
  font-size: 1.75rem;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #fff;
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    font-size: 2.75rem;
  }
`;

export const ParallaxSubtitle = styled.p`
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  margin-bottom: 2rem;
  padding: 0 16px;
  text-align: center;

  @media (min-width: 900px) {
    font-size: 1.125rem;
  }
`;

export const ParallaxInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 80vw;
  }
`;

export const ParallaxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
  margin-bottom: 1.875rem;
`;

export const ParallaxNumber = styled.div`
  font-family: "Montserrat", sans-serif;
  color: #fff;
  padding: 0 1rem 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 2.5rem;
  border-bottom: 3px solid #3a7bd5;

  @media (min-width: 900px) {
    font-size: 2.875rem;
  }
`;

export const ParallaxText = styled.p`
  font-size: 1.25rem;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  text-align: center;

  @media (min-width: 900px) {
    font-size: 1rem;
  }
`;
