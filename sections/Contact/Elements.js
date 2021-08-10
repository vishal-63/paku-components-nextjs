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

export const ContactSectionTitle = styled.h1`
  color: #1d9bc9;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-family: Helvetica, sans-serif;
`;

export const ContactSectionWrapper = styled.div`
  display: flex;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 29px 0 rgb(0 0 0 / 19%);
  margin-top: 2rem;
  width: calc(100vw - 50px);

  @media (max-width: 540px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const ContactFormWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    &.contact-page {
      width: 100%;
    }
  }

  @media (max-width: 540px) {
    width: 100%;
  }
`;

export const ContactFormTitle = styled.h2`
  color: #0a3443;
  font-size: 1.5rem;
  padding: 1rem 0 0 2rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    &.contact-page {
      padding: 1rem 0 0 1rem;
    }
  }

  @media (max-width: 540px) {
    padding: 1rem 0 0 1rem;

    &.contact-page {
      padding: 1rem 0 0 0 !important;
    }
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 540px) {
    &.contact-page {
      padding: 0;
    }
  }
`;

export const NameEmailWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-color: #01194f;

  & input {
    width: 48%;
  }

  @media (max-width: 420px) {
    flex-direction: column;

    & input {
      width: 100%;
    }
  }
`;

export const ContactFormInput = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.5rem 1rem;
  margin: 0.75rem 0;
  font-family: "Montserrat", sans-serif;

  &:focus {
    border-color: #0377b5;
  }
`;

export const ContactFormMessage = styled.textarea`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.5rem 1rem;
  margin: 0.75rem 0 1.5rem;
  resize: none;
`;

export const ContactFormButton = styled.input`
  color: #fff;
  background-color: #01194f;
  border-radius: 50px;
  border: 1px solid #01194f;
  font-size: 1.2rem;
  padding: 0.5rem 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 500;

  &:hover {
    background-color: #012883;
    transition: all 0.2s ease-in-out;
  }
`;

export const MapWrapper = styled.div`
  width: 50%;
  height: 450px;
  overflow: hidden;

  & .map {
    position: relative;
    width: 50% !important;
    height: 450px !important;
    overflow: hidden;
  }

  @media (max-width: 540px) {
    width: 100%;
    height: 300px;
    margin-top: 1rem;

    .map {
      width: 100% !important;
      height: 300px !important;
    }
  }
`;
