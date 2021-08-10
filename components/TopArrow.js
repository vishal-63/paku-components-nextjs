import styled from "styled-components";

const ToTopArrow = styled.div`
  background-color: #01194f;
  color: #fff;
  font-size: 2rem;
  padding: 0.75rem;
  border-radius: 50%;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ showToTop }) => (showToTop ? "visible" : "hidden")};
  transition: 0.3s visibility ease-in;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  z-index: 9;

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
  }

  @media (max-width: 540px) {
    font-size: 1.2rem;
    padding: 0.6rem;
  }
`;

export default ToTopArrow;
