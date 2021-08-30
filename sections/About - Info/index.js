import { useState } from "react";
import {
  Container,
  InfoImg,
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
      heading: "High-Quality Business Solutions",
      para1:
        "Generic is a business consulting company with more than 10 years of experience in the industry offering reliable and affordable services.",
      para2:
        "We serve clients at every level of their organization, in whatever capacity we can be most useful, whether as a trusted advisor to top management or as a hands-on coach for front line employees. For every engagement, we assemble a team with the most appropriate experience and expertise.",
    },
    {
      heading: "Providing Full Business Support",
      para1:
        "Generic offers advice and support to leading companies in various industries across the USA. We staff and manage your projects with our experts.",
      para2:
        "We are successful because of our people, the quality of our expert network and our flexibility to anticipate market changes and adapt to your needs. That is why we continuously invest in the education and coaching of our consultants and our team of recruiters and account managers.",
    },
    {
      heading: "Building Business Relationships",
      para1:
        "We aim to build a strong mutual business relationship with our clients and contribute to their success by responding to their needs.",
      para2:
        "Our goal is not to become the largest consultancy agency but to be the agency known for the outstanding and lasting results we achieve with our clients. We work to support you on all stages of your business’s development and to help you avoid unpleasant management experiences.",
    },
  ];

  if (!Array.isArray(InfoData) || InfoData.length <= 0) {
    return null;
  }

  return (
    <Container data-aos="fade-up">
      <InfoImg src={infoImg.src} alt="about-info" />
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
