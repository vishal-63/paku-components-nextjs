import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo-copy.png";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  NavbarContainer,
  NavWrapper,
  NavTitle,
  NavMenu,
  NavLinks,
  MobileIcon,
  CloseIcon,
  MobileDrawer,
} from "./NavbarElements";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const changeNav = () => {
    window.scrollY >= 35 ? setScrollNav(true) : setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <NavbarContainer scrollNav={scrollNav} isOpen={isOpen}>
        <NavWrapper>
          <Link href="/">
            <NavTitle>
              <Image
                src={logo}
                alt="Paku Components Logo"
                width="100"
                height="100"
              />
            </NavTitle>
          </Link>

          <MobileIcon onClick={toggle} isOpen={isOpen}>
            <GiHamburgerMenu />
          </MobileIcon>

          <NavMenu scrollNav={scrollNav} isOpen={isOpen}>
            <Link href="/about">
              <NavLinks>About</NavLinks>
            </Link>
            <Link href="/">
              <NavLinks>Products</NavLinks>
            </Link>
            <Link href="/blogs">
              <NavLinks>Blogs</NavLinks>
            </Link>
            <Link href="/contact">
              <NavLinks>Contact</NavLinks>
            </Link>
          </NavMenu>
        </NavWrapper>
      </NavbarContainer>
      <MobileDrawer isOpen={isOpen}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxHeight: "80px",
            padding: "0 1rem",
          }}
        >
          <Link href="/">
            <NavTitle>
              <Image
                src={logo}
                alt="Paku Components Logo"
                width="100"
                height="100"
              />
            </NavTitle>
          </Link>
          <CloseIcon onClick={toggle} isOpen={isOpen}>
            <FaTimes />
          </CloseIcon>
        </div>

        <NavMenu scrollNav={scrollNav} isOpen={isOpen} className="mobile-menu">
          <Link href="/about">
            <NavLinks className="mobile-link">About</NavLinks>
          </Link>
          <Link href="/">
            <NavLinks className="mobile-link">Products</NavLinks>
          </Link>
          <Link href="/blogs">
            <NavLinks className="mobile-link">Blogs</NavLinks>
          </Link>
          <Link href="/contact">
            <NavLinks className="mobile-link">Contact</NavLinks>
          </Link>
        </NavMenu>
      </MobileDrawer>
    </>
  );
};

export default Navbar;
