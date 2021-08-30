import styled from "styled-components";

export const ProductCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  padding: 3rem 0;
  width: 100%;
  background-color: #eff1f7;

  @media (max-width: 900px) {
    margin-top: 30px;
  }
`;

export const ProductCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ProductCardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 2rem;
  align-items: center;
  margin-top: 2rem;
  align-items: center;
  max-width: 1000px;
  padding-bottom: 30px;
  justify-content: center;
  cursor: grab;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, auto);
    row-gap: 2rem;
    max-width: 85vw;
  }

  @media (max-width: 540px) {
    grid-template-columns: auto;
    width: 100vw;
    margin-left: 5px;
    margin-right: auto;
  }
`;

export const ProductCard = styled.div`
  background-color: #fff;
  width: 250px;
  position: relative;
  padding: 1rem 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 29px 0 rgb(0 0 0 / 19%);

  overflow: hidden;

  &::after {
    content: "";
    background-color: #3a7bd5;
    width: 100%;
    height: 4px;
    position: absolute;
    bottom: 0;
    transform: translateX(-101%);
    transition: 0.3s linear;
  }

  &:hover::after {
    transform: translateX(0);
  }
`;

export const ProductCardTitle = styled.h3`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #000;
  margin: 1rem 0;
`;

export const ProductCardImgWrapper = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 0;
`;

export const ProductCardLink = styled.div`
  padding-top: 1rem;
  width: 90%;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  color: #000;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 0.75rem;

  /* @media (max-width: 1024px) {
    margin-bottom: 0;
  } */

  @media (max-width: 900px) {
    padding-top: 15px;
  }
`;
