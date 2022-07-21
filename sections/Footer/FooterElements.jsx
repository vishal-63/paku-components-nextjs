import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--blue-shade-7);
`;

export const FooterWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 540px) {
    margin: 1rem;
    width: auto;
    align-items: flex-start;
  }
`;

export const FooterSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  color: var(--cream);

  @media (max-width: 540px) {
    margin: 0.75rem 0;
    font-size: 0.7rem;
  }
`;

export const FooterIcon = styled.div`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  @media (max-width: 540px) {
    margin: 0 20px 0 0;
  }
`;

export const FooterAddress = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  .footer-text {
    max-width: 180px;
    transition: all 0.3s ease;
  }
`;

export const FooterText = styled.a`
  /* max-width: 180px; */
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #00b4d8;
    transition: all 0.3s ease;
  }
`;

export const CopyRightWrapper = styled.div`
  background-color: var(--blue-shade-8);
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CopyRightText = styled.div`
  font-size: 0.7rem;
  color: #fff;
`;
