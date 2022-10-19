import React, { useState, useEffect } from "react";
import { animate, motion } from "framer-motion";
import {
  HerosectionSlider,
  HeroImage,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroLink,
  Arrows,
} from "./HeroElements";

import landscapeImg from "../../assets/images/landscape-banner.svg";
import portraitImg from "../../assets/images/portrait-banner.svg";
import Button from "../../components/Button";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  initial: {
    y: 135,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.53, -0.27, 0.63, 1.29],
      duration: 1,
    },
  },
};

const Herosection = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [imgSrc, setImgSrc] = useState(portraitImg.src);
  const [mobileDevice, setMobileDevice] = useState(true);

  const changeNav = () => {
    window.scrollY > 0 ? setScrollNav(true) : setScrollNav(false);
  };

  const setImg = () => {
    if (window.innerWidth > 900) {
      setMobileDevice(false);
      setImgSrc(landscapeImg.src);
    } else {
      setMobileDevice(true);
      setImgSrc(portraitImg.src);
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
    <HerosectionSlider scrollNav={scrollNav}>
      <HeroImage src={imgSrc} alt="" />
      <HeroContent
        as={motion.div}
        variants={container}
        initial="initial"
        animate="animate"
      >
        <div style={{ height: "min-content", overflow: "hidden" }}>
          <HeroTitle as={motion.h1} variants={item}>
            High Quality Products
          </HeroTitle>
        </div>
        <div
          style={{
            marginTop: `${mobileDevice ? "1.5rem" : "2rem"}`,
            height: "min-content",
            overflow: "hidden",
          }}
        >
          <HeroSubtitle as={motion.p} variants={item}>
            Products with the top notch quality for best consumer experience
            from various brands.
          </HeroSubtitle>
        </div>
        <div
          style={{
            height: "64px",
            marginTop: `${mobileDevice ? "2rem" : "3rem"}`,
            overflowY: "hidden",
          }}
        >
          <HeroLink href="/contact" as={motion.a} variants={item}>
            <span>Contact Us</span>
            <Arrows>
              <span className="arrow first next"></span>
              <span className="arrow second next"></span>
            </Arrows>
          </HeroLink>
        </div>
      </HeroContent>
    </HerosectionSlider>
  );
};

export default Herosection;
