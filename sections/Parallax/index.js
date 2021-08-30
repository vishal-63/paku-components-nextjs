import { useEffect } from "react";
import { Parallax } from "react-parallax";
import {
  ParallaxContent,
  ParallaxTitle,
  ParallaxSubtitle,
  ParallaxInfo,
  ParallaxDiv,
  ParallaxNumber,
  ParallaxText,
} from "./ParallaxElements";
import parallaxImg from "../../assets/images/parallax.png";

const ParallaxContainer = () => {
  const parallaxBg = parallaxImg.src;

  return (
    <Parallax bgImage={parallaxBg} bgImageAlt="Parallax Image" strength={500}>
      <ParallaxContent>
        <ParallaxTitle>Some Facts About Us</ParallaxTitle>
        <ParallaxSubtitle>
          Delivering some effective and high-quality business solutions
        </ParallaxSubtitle>
        <ParallaxInfo id="parallax-info">
          <ParallaxDiv>
            <ParallaxNumber className="parallax-number">1.6k</ParallaxNumber>
            <ParallaxText>Projects</ParallaxText>
          </ParallaxDiv>
          <ParallaxDiv>
            <ParallaxNumber className="parallax-number">27</ParallaxNumber>
            <ParallaxText>Winning Awards</ParallaxText>
          </ParallaxDiv>
          <ParallaxDiv>
            <ParallaxNumber className="parallax-number">87</ParallaxNumber>
            <ParallaxText>Proffesionals</ParallaxText>
          </ParallaxDiv>
          <ParallaxDiv>
            <ParallaxNumber className="parallax-number">99%</ParallaxNumber>
            <ParallaxText>Satisfaction</ParallaxText>
          </ParallaxDiv>
        </ParallaxInfo>
      </ParallaxContent>
    </Parallax>
  );
};

export default ParallaxContainer;
