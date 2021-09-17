import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo-copy.png";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";
import {
  NavbarContainer,
  NavWrapper,
  NavTitle,
  NavMenu,
  NavLinks,
  ProductCategoriesList,
  ProductCategory,
  RadiatorCategoriesList,
  MobileIcon,
  CloseIcon,
  MobileDrawer,
  OpenCategoriesSVG,
  CloseCategoriesSVG,
} from "./NavbarElements";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleCategories = () => {
    setCategoryOpen(!categoryOpen);
    console.log(categoryOpen);
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
            <NavLinks>
              <Link href="/about">About</Link>
            </NavLinks>

            <NavLinks>
              <Link href="/products">Products</Link>

              <ProductCategoriesList className="desktop-menu">
                <ProductCategory>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    Radiators
                    <MdKeyboardArrowRight />
                  </div>
                  <RadiatorCategoriesList>
                    <ProductCategory>Car</ProductCategory>
                    <ProductCategory>Commercial</ProductCategory>
                    <ProductCategory>Tractor</ProductCategory>
                    <ProductCategory>Earthmovers</ProductCategory>
                    <ProductCategory>Forklift</ProductCategory>
                  </RadiatorCategoriesList>
                </ProductCategory>

                <ProductCategory>Top-Bottoms</ProductCategory>
                <ProductCategory>Cores</ProductCategory>
                <ProductCategory>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    Intercoolers
                    <MdKeyboardArrowRight />
                  </div>
                  <RadiatorCategoriesList>
                    <ProductCategory>Tata</ProductCategory>
                    <ProductCategory>LeyLand</ProductCategory>
                  </RadiatorCategoriesList>
                </ProductCategory>

                <ProductCategory>Condensor</ProductCategory>
                <ProductCategory>Fan Assembly</ProductCategory>
              </ProductCategoriesList>
            </NavLinks>

            <NavLinks>
              <Link href="/blogs">Blogs</Link>
            </NavLinks>

            <NavLinks>
              <Link href="/contact">Contact</Link>
            </NavLinks>
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

          <NavLinks className="mobile-link">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link href="/products">Products</Link>

              <OpenCategoriesSVG
                onClick={toggleCategories}
                categoryOpen={categoryOpen}
              >
                <MdKeyboardArrowDown />
              </OpenCategoriesSVG>

              <CloseCategoriesSVG
                onClick={toggleCategories}
                categoryOpen={categoryOpen}
              >
                <MdKeyboardArrowUp />
              </CloseCategoriesSVG>
            </div>
            <ProductCategoriesList
              className="mobile-menu"
              categoryOpen={categoryOpen}
            >
              <ProductCategory className="mobile-link">
                Radiators
              </ProductCategory>
              <ProductCategory className="mobile-link">
                Top-Bottoms
              </ProductCategory>
              <ProductCategory className="mobile-link">Cores</ProductCategory>
              <ProductCategory className="mobile-link">
                Intercooler
              </ProductCategory>
              <ProductCategory className="mobile-link">
                Condensor
              </ProductCategory>
              <ProductCategory className="mobile-link">
                Fan Assembly
              </ProductCategory>
            </ProductCategoriesList>
          </NavLinks>

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
