import React, { Component } from "react";
import { Title, Subtitle } from "../Titles";
import {
  BrandsContainer,
  BrandsWrapper,
  BrandsImgWrapper,
} from "./BrandElements";
import img1 from "../../assets/images/banco.png";
import img2 from "../../assets/images/cougar.png";
import img3 from "../../assets/images/kcpl.png";
import img4 from "../../assets/images/akshay industries.png";
import BrandsStyles from "../../styles/Brands.module.css";
import Image from "next/image";
import Link from "next/link";

class Brands extends Component {
  render() {
    return (
      <BrandsContainer>
        <div data-aos="fade-up">
          <Title>Our Partners</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            quasi!
          </Subtitle>

          <BrandsWrapper>
            <BrandsImgWrapper>
              <a
                href="http://www.bancoindia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={img1}
                  alt="Banco India Logo"
                  className={BrandsStyles.brand__img}
                />
              </a>
              <a
                href="https://www.varunradiators.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={img2}
                  alt="Cougar Logo"
                  className={BrandsStyles.brand__img}
                  effect="opacity"
                />
              </a>
              <a
                href="https://www.karnavatiautomall.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={img3}
                  alt="Toyota Logo"
                  className={BrandsStyles.brand__img}
                  effect="opacity"
                />
              </a>
              <a
                href="http://www.radiatorplastictank.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={img4}
                  alt="Volkwagen Logo"
                  className={BrandsStyles.brand__img}
                  effect="opacity"
                />
              </a>
            </BrandsImgWrapper>
          </BrandsWrapper>
        </div>
      </BrandsContainer>
    );
  }
}

export default Brands;
