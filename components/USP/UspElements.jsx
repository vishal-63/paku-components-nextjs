import styled from "styled-components";

export const UspContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  padding: 0 0 36px;
`;

export const UspCardsWrapper = styled.div`
  margin: 2rem auto 0;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;

  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`;

export const UspCard = styled.div`
  width: 310px;
  padding: 1.5rem 2.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: 2px solid rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in;

  &:hover {
    border-image-slice: 1;
    border-image-source: linear-gradient(
      25deg,
      #0044ad,
      #1a63c8,
      #2784e3,
      #30a5ff
    );
    -webkit-border-image-source: -webkit-linear-gradient(
      25deg,
      #0044ad,
      #1a63c8,
      #2784e3,
      #30a5ff
    );
    transition: all 0.2s ease-in;
  }

  &:hover h3 {
    color: #1a63c8;
  }

  @media (max-width: 1024px) {
    width: 280px;
  }

  @media (max-width: 900px) {
    width: 200px;
    padding: 0.75rem 1rem;
  }

  @media (max-width: 540px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const UspCardIcon = styled.div`
  color: #00b4d8;
  font-size: 1.8rem;
  position: absolute;
  margin-top: -48px;
  margin-left: 210px;
  background-color: #fff;
  padding: 0.5rem;
  padding-bottom: 0;
  text-align: center;

  @media (max-width: 1024px) {
    margin-left: 180px;
  }

  @media (max-width: 900px) {
    margin-top: -40px;
    margin-left: 120px;
  }

  @media (max-width: 540px) {
    margin-left: 180px;
  }

  @media (max-width: 300px) {
    margin-left: 100px;
  }
`;

export const UspCardTitle = styled.h3`
  color: #01194f;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 500;
  transition: all 0.3s ease-in;
  font-family: Helvetica, sans-serif;

  @media (max-width: 900px) {
    margin-top: 0.675rem;
  }
`;

export const UspCardText = styled.p`
  color: #000;
  font-size: 0.875rem;
  letter-spacing: 0.3px;
  margin-top: 1.5rem;

  @media (max-width: 900px) {
    margin-top: 1rem;
  }
`;
