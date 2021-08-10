import styled from "styled-components";
import arrow from "../../assets/images/arrow.svg";

export const InfoContainer = styled.section`
  position: relative;
  top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

export const InfoWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 36px 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    height: 100%;
    padding: 1rem 1.75rem;
    margin-top: 30px;
    flex-direction: column;
  }
`;

export const InfoContent = styled.div`
  position: relative;
  margin: 2rem auto 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const InfoText = styled.div`
  color: #020509;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin-top: 1rem;
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

export const InfoImg = styled.img`
  margin-left: 20px;
  width: 500px;
  position: relative;

  @media screen and (max-width: 900px) {
    width: 100%;
    max-height: 350px;
    margin-top: 30px;
  }
`;
