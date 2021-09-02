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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              natus dolorem veritatis asperiores praesentium cumque doloremque
              officia impedit qui ipsum inventore possimus, alias tempore ipsam.
              Aliquid sequi, quia deleniti, fugiat quibusdam iusto doloribus
              cupiditate quaerat praesentium in beatae at sint veniam velit
              animi commodi! Dolore iure quisquam deserunt consequatur.
              Perferendis?
              <InfoList>
                <InfoListItems>Lorem, ipsum.</InfoListItems>
                <InfoListItems>Lorem, ipsum.</InfoListItems>
                <InfoListItems>Lorem, ipsum.</InfoListItems>
              </InfoList>
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
