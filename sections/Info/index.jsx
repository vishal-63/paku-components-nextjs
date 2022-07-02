import React, { Component } from "react";
import Image from "next/image";
import img from "../../assets/images/about-us.jpg";
import {
  InfoContainer,
  InfoWrapper,
  InfoContent,
  InfoText,
  InfoList,
  InfoListItems,
  InfoBoxContainer,
  InfoBox,
} from "./InfoElements";
import { Title } from "../../components/Titles";
import Products from "../../components/Product Cards";
import UspCards from "../../components/USP";
import Brands from "../../components/Brands";
import CTA from "../../components/CTA";
import Button from "../../components/Button";
import { BsBook, BsBriefcase, BsCompass, BsStar } from "react-icons/bs";

class Infosection extends Component {
  render() {
    return (
      <InfoContainer>
        <InfoWrapper data-aos="fade-up">
          <Title>ABOUT US</Title>
          {/* <InfoContent>
            <InfoText>
              PAKU Components PVT. LTD. was incorporated in 2020 with the main
              purpose of fullfilling the demand of Aluminium Radiators,
              Aluminium Cores, Fibre Top-Bottoms, and various other related
              parts. The Leaders of the company have a collective experience of
              30+ Years in this industry and has knowledge of everything that
              goes on in the industry. PAKU Components focus on providing best
              quality products, keeping consumer satisfaction in mind.
            </InfoText>
            </InfoContent>
            <Image
            src={img}
            alt="Car Illustration"
            data-aos-delay="200"
            layout="intrinsic"
            width={500}
            height={300}
          /> */}

          <InfoBoxContainer>
            <InfoBox>
              <BsCompass />
              <div>About</div>
              <p>
                We are a wholesale trading company of Aluminium Radiators, and
                its related components.
              </p>
            </InfoBox>
            <InfoBox>
              <BsStar />
              <div>Mission</div>
              <p>
                Helping small businesses grow with us by providing premium
                quality product at cost-effective rates is the sole mission of
                this company.
              </p>
            </InfoBox>
            <InfoBox>
              <BsBook />
              <div>History</div>
              <p>
                While the company was incorporated in 2020, but the minds behing
                the company are in the business since over 30 years.
              </p>
            </InfoBox>
            <InfoBox>
              <BsBriefcase />
              <div>Work</div>
              <p>
                Being a B2B business, our job is to fullfill the requirements of
                small businesses.
              </p>
            </InfoBox>
          </InfoBoxContainer>
          <Button text="Know More" link="/about" />
        </InfoWrapper>

        <Products />

        <UspCards />

        <CTA />

        <Brands />
      </InfoContainer>
    );
  }
}

export default Infosection;
