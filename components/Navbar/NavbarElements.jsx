import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};

  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  z-index: 10;
  width: 100%;
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0 5px 20px rgba(0,0,0,0.2)" : ""};
  top: 0;
  position: fixed;
  transition: height 0.2s ease;

  @media (min-width: 540px) {
    height: ${({ scrollNav }) => (scrollNav ? "80px" : "120px")};
  }
`;

export const NavWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  padding: 0 1rem;

  @media (min-width: 540px) {
    margin: 0 4rem;
    padding: 0 1rem;
  }
`;

export const NavTitle = styled.span`
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s ease;
`;

export const MobileIcon = styled.div`
  height: 50%;
  transition: 0.3s all ease-in-out;
  font-size: 1.8rem;
  cursor: pointer;
  color: #262262;
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
  color: #262262;
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
  color: var(--primary-blue);
  border-color: var(--primary-blue);

  @media screen and (max-width: 768px) {
    display: none;
  }

  &.mobile-menu {
    flex-direction: column;
    display: flex;
    padding-left: 0;
    color: var(--primary-blue);
    border-color: var(--primary-blue);
    align-items: flex-start;
    padding: 0.5rem 0;
    margin-right: 10px;
  }
`;

export const NavLinks = styled.div`
  color: inherit;
  margin: 0 10px;
  padding: 0.75rem 0;
  font-weight: 600;
  letter-spacing: 1px;
  border: none;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  transition: all 0.2s ease-in;
  cursor: pointer;

  & > a {
    padding: 0.5rem 1.5rem;
  }

  &:hover {
    border-color: inherit;
    transition: all 0.2s ease-in;
  }

  &.mobile-link {
    text-transform: none;
    padding: 0.5rem 1rem;
    font-weight: 400;
    width: 100%;
    text-align: left;
    border: none;
  }

  &:hover ul {
    visibility: visible;
    transition: all 0.2s ease-in;
  }
`;

export const ProductCategoriesList = styled.ul`
  width: 185px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem 1.2rem;
  transition: all 0.2s ease-in;

  &.desktop-menu {
    position: absolute;
    top: 88px;
    transform: translateX(-1.2rem);
    visibility: hidden;
  }

  &.mobile-menu {
    display: ${({ categoryOpen }) => (categoryOpen ? "flex" : "none")};
  }
`;

export const ProductCategory = styled.div`
  color: #262262;
  cursor: pointer;
  padding: 0.5rem 0;
  text-align: left;
  width: 100%;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  position: relative;

  &.mobile-link {
    text-transform: none;
    font-weight: 400;
    color: var(--primary-blue);
  }

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: var(--primary-blue);
  }

  &:hover ul {
    transform: scaleX(1);
  }
`;

export const RadiatorCategoriesList = styled.ul`
  width: 185px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem 1.2rem;
  position: absolute;
  left: 167px;
  top: -8px;
  transform: scaleX(0);
  transform-origin: left;
`;

export const MobileDrawer = styled.nav`
  background-color: #fff;
  width: 100%;
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: all 0.25s ease;
  z-index: 11;
  box-shadow: 0 0 25px #0302074f;
`;

export const OpenCategoriesSVG = styled.span`
  transform: scale(1.5);
  display: ${({ categoryOpen }) => (categoryOpen ? "none" : "block")};
`;

export const CloseCategoriesSVG = styled.span`
  transform: scale(1.5);
  display: ${({ categoryOpen }) => (categoryOpen ? "block" : "none")};
`;
