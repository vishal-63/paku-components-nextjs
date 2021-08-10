import styled from "styled-components";

export const BrandsContainer = styled.section`
  width: 100%;
  margin: 3rem auto 2rem;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  background-color: #eff1f7;
`;

export const BrandsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -1rem auto 0;
`;

export const BrandsImgWrapper = styled.div`
  margin: 3rem 2rem 0;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2.5rem;
  align-items: center;
  max-width: 1000px;
  position: relative;

  @media (min-width: 900px) {
    grid-gap: 6rem;
  }

  @media (min-width: 540px) {
    grid-template-columns: auto auto auto auto;
  }
`;
