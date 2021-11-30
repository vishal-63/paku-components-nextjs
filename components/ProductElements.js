import styled from "styled-components";

export const CategoryContainer = styled.div`
  width: fit-content;
  background-color: #eff1f7;
  margin: 3rem auto;
  border: 1px solid #01194f;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CategoryLink = styled.span`
  font-size: 0.75rem;
  font-family: Helvetica, sans-serif;
  color: #3a7bd5;
  letter-spacing: 0.3px;
  padding: 0.2rem 0.5rem;
  border-right: 1px solid #01194f;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #01194f;
    transition: color 0.2s ease;
  }

  &:last-child {
    border: none;
  }

  @media (min-width: 900px) {
    font-size: 1rem;
    letter-spacing: 0.7px;
    padding: 0.5rem 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1100px) {
  }
`;

export const CategoryTitle = styled.h3`
  color: #01194f;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const ProductsContainer = styled.section`
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (min-width: 1100px) {
    margin: 4rem auto;
    max-width: 1200px;
    gap: 4rem;
  }
`;

export const ProductImageWrapper = styled.div`
  max-width: 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & img {
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  @media (min-width: 540px) {
    max-width: 200px;
  }

  @media (min-width: 900px) {
    max-width: 300px;
  }
`;

export const Modal = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;

  &:hover,
  &:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalImg = styled.img`
  display: block;
  width: 80%;
  max-width: 700px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Caption = styled.h3`
  text-align: center;
  color: #ccc;
  padding: 2rem 0;
`;
