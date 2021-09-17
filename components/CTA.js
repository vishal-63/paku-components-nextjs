import styled from "styled-components";
import bg from "../assets/images/cta-bg.jpg";
import { Title } from "./Titles";
import Btn from "./Button";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background-image: url(${bg.src});
  background-size: cover;
  background-position: center;

  & div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const CTA = () => {
  return (
    <Container>
      <div>
        <Title
          style={{
            color: "#fff",
            textTransform: "none",
            maxWidth: "350px",
            textAlign: "inherit",
          }}
        >
          Want to start working with us?
        </Title>
        <Btn>Contact Us</Btn>
      </div>
    </Container>
  );
};

export default CTA;
