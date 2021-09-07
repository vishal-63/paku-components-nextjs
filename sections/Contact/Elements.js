import styled from "styled-components";

export const ContactSectionContainer = styled.section`
  width: 100%;
  margin: 0 auto 3rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const ContactSectionWrapper = styled.div`
  display: flex;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 29px 0 rgb(0 0 0 / 19%);
  margin-top: 2rem;
  width: calc(100vw - 50px);

  @media (max-width: 767px) {
    flex-direction: column;
    width: 90%;
  }
`;
