import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../../assets/images/logo.png";

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
  const [mobileDevice, setMobileDevice] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleCategories = () => setCategoryOpen(!categoryOpen);

  const changeNav = () => {
    window.scrollY > 0 ? setScrollNav(true) : setScrollNav(false);
  };

  const setImg = () => {
    if (window.innerWidth > 768) {
      setMobileDevice(false);
    } else {
      setMobileDevice(true);
    }
  };

  useEffect(() => {
    setImg();
    window.addEventListener("scroll", changeNav);
    window.addEventListener("resize", setImg);

    return () => {
      window.removeEventListener("scroll", changeNav);
      window.removeEventListener("resize", setImg);
    };
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
                width={scrollNav ? "90" : mobileDevice ? "90" : "120"}
                height={scrollNav ? "52.8" : mobileDevice ? "52.8" : "72.4"}
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

              <ProductCategoriesList
                className="desktop-menu"
                scrollNav={scrollNav}
              >
                <ProductCategory>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Link href="/products/radiators">Radiators</Link>
                    <MdKeyboardArrowRight />
                  </div>
                  <RadiatorCategoriesList>
                    <ProductCategory>
                      <Link href="/products/radiators/car">Car</Link>
                    </ProductCategory>
                    <ProductCategory>
                      <Link href="/products/radiators/commercial">
                        Commercial
                      </Link>
                    </ProductCategory>
                    <ProductCategory>
                      <Link href="/products/radiators/industrial">
                        Industrial
                      </Link>
                    </ProductCategory>
                    <ProductCategory>
                      <Link href="/products/radiators/tractor">Tractor</Link>
                    </ProductCategory>
                    <ProductCategory>
                      <Link href="/products/radiators/earthmover">
                        Earthmovers
                      </Link>
                    </ProductCategory>
                    <ProductCategory>
                      <Link href="/products/radiators/generator">
                        Generators
                      </Link>
                    </ProductCategory>
                  </RadiatorCategoriesList>
                </ProductCategory>

                <ProductCategory>
                  <Link href="/products/top-tank">Top Tanks</Link>
                </ProductCategory>
                <ProductCategory>
                  <Link href="/products/bottom-tank">Bottom Tanks</Link>
                </ProductCategory>
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
                  <RadiatorCategoriesList style={{ top: "0" }}>
                    <ProductCategory>Car</ProductCategory>
                    <ProductCategory>Commercial</ProductCategory>
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

      {/* Mobile Navbar */}
      <MobileDrawer isOpen={isOpen}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "80px",
            padding: "0 1rem",
            margin: "0 1rem",
          }}
        >
          <Link href="/">
            <NavTitle>
              <Image
                src={logo}
                alt="Paku Components Logo"
                width="90"
                height="52.8"
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
                <Link href="/products/radiators">Radiators</Link>
              </ProductCategory>
              <ProductCategory className="mobile-link">
                <Link href="/products/top-tank">Top Tanks</Link>
              </ProductCategory>
              <ProductCategory className="mobile-link">
                <Link href="/products/bottom-tank">Bottom Tanks</Link>
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
