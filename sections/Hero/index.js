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

import img from "../../assets/images/Banner1.svg";
import Button from "../../components/Button";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.35,
      // delayChildren: 1,
    },
  },
};

const item = {
  initial: {
    // opacity: 0,
    y: 135,
  },
  animate: {
    // opacity: 1,
    y: 0,
    transition: {
      ease: [0.53, -0.27, 0.63, 1.29],
      duration: 1,
    },
  },
};

const Herosection = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    window.scrollY > 0 ? setScrollNav(true) : setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <HerosectionSlider scrollNav={scrollNav}>
      <HeroImage src={img.src} alt="" />
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
            marginTop: "2rem",
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
            marginTop: "3rem",
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
