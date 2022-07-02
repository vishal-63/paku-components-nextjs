import styled from "styled-components";
import arrow from "../../assets/images/arrow.svg";
import dots from "../../assets/images/dots.svg";

export const InfoContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

export const InfoWrapper = styled.div`
  position: relative;
  width: 85vw;
  margin: 3rem auto 2rem;
  padding: 2.25rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    height: 100%;
    padding: 1rem 0;
    margin-top: 30px;
    flex-direction: column;
    gap: 4rem;
  }
`;

export const InfoContent = styled.div`
  position: relative;
  margin: 2rem auto 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: 900px) {
    max-width: 60%;
  }
`;

export const InfoText = styled.div`
  color: var(--blue-shade-8);
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin: 1rem 0;
  word-spacing: 5px;
  position: relative;

  @media screen and (max-width: 540px) {
    letter-spacing: 0;
  }
`;

export const InfoList = styled.ul`
  margin: 20px 0 0 20px;
  list-style: none url(${arrow.src});
  position: relative;
`;

export const InfoListItems = styled.li`
  margin-top: 0.5rem;
  padding-left: 1.25rem;
  vertical-align: center;
`;

export const InfoBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 2rem 0;
  width: inherit;

  @media (max-width: 540px) {
    justify-content: space-around;
    margin: 0;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: var(--primary-blue);
  text-align: center;
  max-width: 300px;
  padding: 1rem;
  transition: transform 0.2s;

  & svg {
    font-size: 2rem;
  }

  & div {
    font-size: 1.25rem;
    font-weight: 500;
  }

  & p {
    color: #6f6f6f;
    font-size: 1rem;
    letter-spacing: 0;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
