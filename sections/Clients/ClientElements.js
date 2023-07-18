import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--blue-shade-1);
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

export const ClientWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media (min-width: 1100px) {
    max-width: 80vw;
  }
`;

export const ClientCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-shadow: 0 0 29px 0 rgb(0 0 0 / 19%);
  max-width: 80vw;
  margin: 1rem 0;

  @media (min-width: 768px) {
    max-width: 40vw;
  }

  @media (min-width: 1100px) {
    max-width: 475px;
    padding: 1rem 2rem 2rem;
  }
`;

export const ClientHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-self: start;
  transform: translateX(-30px);

  @media (min-width: 768px) and (max-width: 900px) {
    width: 130%;
    transform: translateX(-0px);
  }

  @media (min-width: 900px) {
    transform: translateX(-50px);
  }
`;

export const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4.5rem;
`;

export const ClientName = styled.p`
  font-size: 1.25rem;
  font-family: "Montserrat", sans-serif;
  color: var(--black);
`;

export const ClientSubtitle = styled.p`
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  color: #4a4a4a;
`;

export const ClientContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 1rem;
`;

export const ClientIcon = styled.div`
  transform: rotateY(180deg);
  color: var(--blue-shade-5);
  font-size: 2rem;
  margin-left: 1rem;
`;

export const ClientText = styled.p`
  font-size: 0.875rem;
  font-family: "Montserrat", sans-serif;
  margin-left: 1rem;

  @media (min-width: 768px) {
    margin-left: 2rem;
    padding-left: 1rem;
  }
`;
