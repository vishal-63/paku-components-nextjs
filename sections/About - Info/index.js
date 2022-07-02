import { useState } from "react";
import Image from "next/image";
import {
  Container,
  InfoWrapper,
  InfoSectionButton,
  ButtonContainer,
  InfoHeading,
  InfoText,
} from "./Elements";
import infoImg from "../../assets/images/about-1.jpg";

const AboutInfo = () => {
  const [current, setCurrent] = useState(0);

  // General Info
  const changeText = (index) => {
    setCurrent(index);
  };

  // Button background
  const changeBackground = (id) => {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => button.classList.remove("active"));
    const activeButton = document.getElementById(id);
    activeButton.classList.add("active");
    changeText(parseInt(id) - 1);
  };

  const InfoData = [
    {
      heading: "Radiator Suppliers",
      para1:
        "Being a Supplier of Radiators and their related components, we at PAKU Components deliver best quality products, covering whole range of products like Aluminium Radiators, Aluminium Radiator Cores, Intercoolers, Fibre Top-Bottoms, Condensors, Oil Coolers, Fan Motor Assemblies and much more.",
      para2:
        "The Brands of products we mainly deal with, to supply best quality products include Cougar, Banco India, and Akshay Industries.",
    },
    {
      heading: "Providing Best Quality",
      para1:
        "Providing Best Quality products and fulfilling our clients’ demands is the sole mission of our company. And we have been successful in achieving this mission for over 3 decades now. And this experience has helped us to anticipate and adapt to market changes before anyone else.",
      para2:
        "Still, we are open to learn and experience new things every day. That is what makes us different from the others.",
    },
    {
      heading: "Building Business Relationships",
      para1:
        "We aim to achieve strong and healthy business relationships by serving our clients and helping in their success by responding to their demands. ",
      para2:
        "We do not aim to be known for selling more products than any other company, but to be know for delivering outstanding products. We are here to help you in covering all your requirements with a smile.",
    },
    {
      heading: "Building Business Relationships",
      para1:
        "We aim to achieve strong and healthy business relationships by serving our clients and helping in their success by responding to their demands. ",
      para2:
        "We do not aim to be known for selling more products than any other company, but to be know for delivering outstanding products. We are here to help you in covering all your requirements with a smile.",
    },
  ];

  if (!Array.isArray(InfoData) || InfoData.length <= 0) {
    return null;
  }

  return (
    <Container data-aos="fade-up">
      <Image src={infoImg} alt="About Info" layout="intrinsic" />
      <InfoWrapper>
        <ButtonContainer>
          <InfoSectionButton
            id="1"
            className="button active"
            onClick={() => changeBackground("1")}
          >
            What We Do
          </InfoSectionButton>
          <InfoSectionButton
            id="2"
            className="button"
            onClick={() => changeBackground("2")}
          >
            Our Mission
          </InfoSectionButton>
          <InfoSectionButton
            id="3"
            className="button"
            onClick={() => changeBackground("3")}
          >
            Our Goal
          </InfoSectionButton>
          <InfoSectionButton
            id="4"
            className="button"
            onClick={() => changeBackground("4")}
          >
            Our Goal
          </InfoSectionButton>
        </ButtonContainer>

        {InfoData.map((section, index) => {
          return (
            <div
              key={index}
              className={index === current ? "text active" : "text"}
            >
              {index === current && (
                <InfoText key={index}>
                  <InfoHeading>{section.heading}</InfoHeading>
                  <p style={{ marginBottom: "10px" }}>{section.para1}</p>
                  <p>{section.para2}</p>
                </InfoText>
              )}
            </div>
          );
        })}
      </InfoWrapper>
    </Container>
  );
};

export default AboutInfo;
