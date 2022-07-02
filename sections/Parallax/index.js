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
        <ParallaxTitle>Facts About Us</ParallaxTitle>
        <ParallaxSubtitle>Our Company In Numbers</ParallaxSubtitle>
        <ParallaxInfo id="parallax-info">
          <ParallaxDiv>
            <ParallaxNumber className="parallax-number">30</ParallaxNumber>
            <ParallaxText>Years of Experience</ParallaxText>
          </ParallaxDiv>
          <ParallaxDiv>
            <ParallaxNumber className="parallax-number">100+</ParallaxNumber>
            <ParallaxText>Clients</ParallaxText>
          </ParallaxDiv>
          <ParallaxDiv>
            <ParallaxNumber className="parallax-number">20000+</ParallaxNumber>
            <ParallaxText>Products sold</ParallaxText>
          </ParallaxDiv>
        </ParallaxInfo>
      </ParallaxContent>
    </Parallax>
  );
};

export default ParallaxContainer;
