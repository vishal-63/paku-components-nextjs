import styled from "styled-components";

export const Container = styled.div`
  background-color: #eff1f7;
  width: 100%;
  padding: 3.125rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 900px) {
    padding: 6.25rem 0;
  }
`;

export const TeamTitle = styled.h3`
  font-size: 2.25rem;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  color: #000;
  margin-bottom: 2.5rem;
`;

export const TeamWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 3rem;

  @media (min-width: 768px) and (max-width: 900px) {
    grid-gap: 1.5rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, auto);
  }
`;

export const MemberCard = styled.div`
  background-color: #fff;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) and (max-width: 900px) {
    padding: 1rem 1.5rem;
  }

  &:hover div {
    transform: translateY(0);
  }
`;

export const MemberDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-1.875rem);
  transition: all 0.3s ease-in-out;
`;

export const MemberName = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 1.25rem;
  color: #3a7bd5;
  margin: 0.625rem 0;
`;

export const MemberPosition = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  color: #9b9b9b;
  padding-bottom: 0.625rem;
  margin-top: -0.625rem;
  border-bottom: 1px solid #e5e5e5;
`;

export const SocialLinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem 0;
`;

export const SocialLink = styled.div`
  font-size: 1rem;
  color: #434545;
  margin: 0 0.625rem;
`;
