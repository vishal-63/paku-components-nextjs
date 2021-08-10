import styled from "styled-components";

const Btn = styled.div`
  position: relative;
  max-width: 200px;
  top: 1.5rem;
  color: #fff;
  background-color: #01194f;
  border-radius: 30px;
  border: 1px solid #01194f;
  font-size: 1.2rem;
  padding: 0.6rem 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: #012883;
    border-color: #012883;
    transition: all 0.2s ease-in-out;
  }
`;

export default Btn;