import styled from "styled-components";

export const Title = styled.h3`
  font-family: Helvetica, sans-serif;
  font-size: 2.2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #01194f;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 28px;
  }

  &::nth-child(2) {
    color: #00b4d8;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  letter-spacing: 0.3px;
  text-align: center;
  margin: 0.75rem 0 1.2rem;

  @media (max-width: 540px) {
    padding: 0 1.5rem;
    font-size: 1rem;
  }
`;
