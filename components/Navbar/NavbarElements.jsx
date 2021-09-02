import styled from "styled-components";
import Link from "next/link";

export const NavbarContainer = styled.nav`
  background-color: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0 5px 20px rgba(0,0,0,0.2)" : ""};
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: ${({ scrollNav }) => (scrollNav ? "0" : "")};
  z-index: 10;
  transition: all 0.5s ease;
  overflow-y: hidden;
  width: 100%;

  @media screen and (min-width: 769px) {
    width: auto;
  }
`;

export const NavWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 769px) {
    max-width: 1200px;
  }
`;

export const NavTitle = styled.span`
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s ease;
  /* transform: translateY(10px); */
`;

export const MobileIcon = styled.div`
  height: 50%;
  transition: 0.3s all ease-in-out;
  font-size: 1.8rem;
  cursor: pointer;
  color: #00b4d8;
  z-index: 10;
  transition: all 0.2s ease;
  display: ${({ isOpen }) => (isOpen ? "none" : "block")};

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const CloseIcon = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  font-size: 1.8rem;
  cursor: pointer;
  color: #00b4d8;
  transition: all 0.2s ease;
  height: 50%;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;
  padding-left: 3rem;
  color: ${({ scrollNav }) => (scrollNav ? "#01194f" : "#00b4d8")};
  border-color: ${({ scrollNav }) => (scrollNav ? "#01194f" : "#00b4d8")};

  @media screen and (max-width: 768px) {
    display: none;
  }

  &.mobile-menu {
    flex-direction: column;
    display: flex;
    padding-left: 0;
    color: #01194f;
    border-color: #01194f;
    align-items: flex-start;
    padding: 0.5rem 0;
  }
`;

export const NavLinks = styled.span`
  color: inherit;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  margin: 0 10px;
  font-weight: 500;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  letter-spacing: 1px;

  &:hover {
    border-color: inherit;
    transition: all 0.2s ease-in;
  }

  &.mobile-link {
    text-transform: none;
    padding: 0.5rem 1rem;
    font-weight: 400;
  }
`;

export const MobileDrawer = styled.nav`
  background-color: #fff;
  width: 100%;
  position: fixed;
  transform: translateY(${({ isOpen }) => (isOpen ? "-43%" : "-150%")});
  transition: all 0.25s ease;
  z-index: 11;
`;
