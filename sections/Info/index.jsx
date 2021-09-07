import React, { Component } from "react";
import Image from "next/image";
import img from "../../assets/images/car.svg";
import {
  InfoContainer,
  InfoWrapper,
  InfoContent,
  InfoText,
  InfoList,
  InfoListItems,
} from "./InfoElements";
import { Title } from "../../components/Titles";
import Products from "../../components/Products";
import UspCards from "../../components/USP";
import Brands from "../../components/Brands";
import Link from "next/link";
import Btn from "../../components/Button";

class Infosection extends Component {
  render() {
    return (
      <InfoContainer>
        <InfoWrapper data-aos="fade-up">
          <InfoContent>
            <Title>ABOUT US</Title>
            <InfoText>
              PAKU Components PVT. LTD. was incorporated in 2020 with the main
              purpose of fullfilling the demand of Aluminium Radiators,
              Aluminium Cores, Fibre Top-Bottoms, and various other related
              parts. The Leaders of the company have a collective experience of
              30+ Years in this industry and has knowledge of everything that
              goes on in the industry. PAKU Components focus on providing best
              quality products, keeping consumer satisfaction in mind.
              <Btn>
                <Link href="/about"> Know More</Link>
              </Btn>
            </InfoText>
          </InfoContent>
          <Image
            src={img}
            alt="Car Illustration"
            data-aos-delay="200"
            layout="intrinsic"
            width={500}
            height={300}
          />
        </InfoWrapper>

        <Products />

        <UspCards />

        <Brands />
      </InfoContainer>
    );
  }
}

export default Infosection;
