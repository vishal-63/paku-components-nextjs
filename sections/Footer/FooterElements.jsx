import styled from "styled-components";

export const FooterContainer = styled.section`
  width: 100%;
  /* position: relative;
  top: 3rem; */
  display: flex;
  flex-direction: column;
  background-color: #0f0f0f;
`;

export const FooterWrapper = styled.div`
  width: 85%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    margin: 1rem;
    width: 90%;
    align-items: flex-start;
  }
`;

export const FooterLogo = styled.div`
  max-height: 120px;
  width: auto;
`;

export const FooterSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 540px) {
    margin: 0.75rem 0;
  }
`;

export const FooterIcon = styled.div`
  font-size: 1.7rem;
  color: #a6a6a6;
  margin: 0 10px;
  align-self: center;
  display: flex;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #00b4d8;
    transition: all 0.3s ease;
  }

  @media (max-width: 540px) {
    margin: 0 20px 0 0;
  }
`;

export const FooterText = styled.a`
  font-size: 0.7rem;
  color: #666;
  max-width: 160px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #00b4d8;
    transition: all 0.3s ease;
  }
`;

export const FooterContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & div:nth-child(1) {
    padding-bottom: 5px;
  }
`;

export const CopyRightWrapper = styled.div`
  background-color: #000;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CopyRightText = styled.div`
  font-size: 0.7rem;
  color: #fff;
`;
