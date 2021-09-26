import styled from "styled-components";

export const BrandsContainer = styled.section`
  width: 100%;
  margin: 0 auto 2rem;
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
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  grid-gap: 2.5rem;
  align-items: center;
  max-width: 1000px;
  position: relative;

  @media (min-width: 900px) {
    grid-gap: 6rem;
  }

  @media (min-width: 540px) {
    grid-template-columns: repeat(3, auto);
    grid-template-rows: auto;
  }

  & .img3 {
    @media (max-width: 540px) {
      grid-area: 2 / 1 / 3 / 3;
    }
  }
`;
