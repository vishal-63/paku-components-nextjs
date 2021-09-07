import React, { Component } from "react";
import { Title, Subtitle } from "../Titles";
import {
  UspContainer,
  UspCardsWrapper,
  UspCard,
  UspCardIcon,
  UspCardTitle,
  UspCardText,
} from "./UspElements";
import { VscFolderOpened } from "react-icons/vsc";
import { BiRupee } from "react-icons/bi";
import { BsStar } from "react-icons/bs";

class UspCards extends Component {
  render() {
    return (
      <UspContainer>
        <Title>Why Choose Us?</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
          facilis.
        </Subtitle>

        <UspCardsWrapper>
          <UspCard data-aos="flip-right">
            <UspCardIcon>
              <VscFolderOpened />
            </UspCardIcon>
            <UspCardTitle>Wide Range of Products</UspCardTitle>
            <UspCardText>
              Covering a wide range of products from Car Segment, Commercial
              Sector to Indusctrial Sector.
            </UspCardText>
          </UspCard>

          <UspCard data-aos="flip-right">
            <UspCardIcon>
              <BiRupee />
            </UspCardIcon>
            <UspCardTitle>Sensible Pricing</UspCardTitle>
            <UspCardText>
              One of the most affordable pricing structure that our consumer
              never have to worry about.
            </UspCardText>
          </UspCard>

          <UspCard data-aos="flip-right">
            <UspCardIcon>
              <BsStar />
            </UspCardIcon>
            <UspCardTitle>30 Years of Experience</UspCardTitle>
            <UspCardText>
              Every Know-How of the business known with over 30 years of
              Experience
            </UspCardText>
          </UspCard>
        </UspCardsWrapper>
      </UspContainer>
    );
  }
}

export default UspCards;
