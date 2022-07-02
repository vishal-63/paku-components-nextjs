import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 3.125rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 6.25rem 2rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  max-width: 600px;
  margin-top: 2rem;
  padding: 0 1rem;

  @media (min-width: 900px) {
    margin-left: 2rem;
    margin-top: 0;
  }

  @media (min-width: 1100px) {
    margin-left: 100px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-self: flex-start;
  }
`;

export const InfoSectionButton = styled.div`
  width: 135px;
  height: 45px;
  color: #444;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 2px solid #e5e7e9;
  transition: transform 0.2s ease;
  overflow: hidden;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  font-weight: 500;
  line-height: 1.2;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 0 0.75rem;
  user-select: none;
  cursor: pointer;
  width: calc(100vw - 2rem);

  &::after {
    content: "";
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    position: absolute;
    top: -2px;
    left: -2px;
    z-index: -1;
    background: #262262;
    background: -webkit-linear-gradient(0deg, #262262 0%, #4942bd 100%);
    background: linear-gradient(0deg, #262262 0%, #4942bd 100%);
    opacity: 0;
    transition: all 0.2s ease-in;

    @media (min-width: 900px) {
      transform: scaleX(0.4);
    }
  }

  &:hover {
    color: #fff;
    border-color: transparent;
  }

  &:hover::after {
    opacity: 1;

    @media (min-width: 900px) {
      transform: scaleX(1);
    }
  }

  &.active {
    background: #262262;
    background: -webkit-linear-gradient(0deg, #262262 0%, #4942bd 100%);
    background: linear-gradient(0deg, #262262 0%, #4942bd 100%);
    color: #fff;
    border: none;
  }

  @media (min-width: 768px) {
    margin: 0 1.25rem 0 0;
    width: auto;
  }
`;

export const InfoHeading = styled.h2`
  font-size: 1.3rem;
  color: #000;
  font-weight: 600;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-bottom: 0.625rem;
`;

export const InfoText = styled.div`
  font-size: 0.9rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 1.71429;
  color: #4a4a4a;
  word-spacing: 2px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
