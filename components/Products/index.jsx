import React, { Component } from "react";
import {
  ProductCardsContainer,
  ProductCardsWrapper,
  ProductCard,
  ProductCardTitle,
  ProductCardLink,
  ProductCardImgWrapper,
  ProductCardSection,
} from "./ProductElements";
import img1 from "../../assets/images/radiator.jpg";
import img2 from "../../assets/images/core.jpg";
import img3 from "../../assets/images/top-bottom.png";
import img4 from "../../assets/images/condenser.png";
import img5 from "../../assets/images/intercooler.jpg";
import img6 from "../../assets/images/fan-assembly.png";
import { Title, Subtitle } from "../Titles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import Image from "next/image";
import Link from "next/link";

class Products extends Component {
  render() {
    SwiperCore.use([Navigation]);

    return (
      <ProductCardsContainer>
        <Title>Products</Title>
        <Subtitle>The widest range of products you will find.</Subtitle>

        <ProductCardsWrapper>
          <Swiper navigation={true}>
            <SwiperSlide>
              <ProductCardSection>
                <ProductCard data-aos="flip-right">
                  <ProductCardImgWrapper>
                    <Image
                      src={img1}
                      alt="Radiator"
                      effect="opacity"
                      style={{ maxHeight: "200px", maxWidth: "200px" }}
                    ></Image>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Radiator</ProductCardTitle>
                  <ProductCardLink href="/">Show More</ProductCardLink>
                </ProductCard>

                <ProductCard data-aos="flip-right">
                  <ProductCardImgWrapper>
                    <Image
                      src={img2}
                      alt="Radiator core"
                      effect="opacity"
                      style={{ maxHeight: "200px", maxWidth: "200px" }}
                    ></Image>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Core</ProductCardTitle>
                  <ProductCardLink>
                    <Link href="/"> Show More</Link>
                  </ProductCardLink>
                </ProductCard>

                <ProductCard data-aos="flip-right">
                  <ProductCardImgWrapper>
                    <Image
                      src={img3}
                      alt="Radiator Top-Bottom Tanks"
                      effect="opacity"
                      style={{ maxHeight: "200px", maxWidth: "200px" }}
                    ></Image>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Top-Bottom</ProductCardTitle>
                  <ProductCardLink>
                    <Link href="/"> Show More</Link>
                  </ProductCardLink>
                </ProductCard>
              </ProductCardSection>
            </SwiperSlide>

            <SwiperSlide>
              <ProductCardSection>
                <ProductCard data-aos="flip-right">
                  <ProductCardImgWrapper>
                    <Image
                      src={img4}
                      alt="Radiator Condenser"
                      effect="opacity"
                      style={{ maxHeight: "200px", maxWidth: "200px" }}
                    ></Image>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Condenser</ProductCardTitle>
                  <ProductCardLink>
                    <Link href="/"> Show More</Link>
                  </ProductCardLink>
                </ProductCard>
                <ProductCard data-aos="flip-right">
                  <ProductCardImgWrapper>
                    <Image
                      src={img5}
                      alt="Radiator Cooler"
                      effect="opacity"
                      style={{ maxHeight: "200px", maxWidth: "200px" }}
                    ></Image>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Cooler</ProductCardTitle>
                  <ProductCardLink>
                    <Link href="/"> Show More</Link>
                  </ProductCardLink>
                </ProductCard>
                <ProductCard data-aos="flip-right">
                  <ProductCardImgWrapper>
                    <Image
                      src={img6}
                      alt="Radiator Fan Assembly"
                      effect="opacity"
                      style={{ maxHeight: "200px", maxWidth: "200px" }}
                    ></Image>
                  </ProductCardImgWrapper>
                  <ProductCardTitle>Fan Assembly</ProductCardTitle>
                  <ProductCardLink>
                    <Link href="/"> Show More</Link>
                  </ProductCardLink>
                </ProductCard>
              </ProductCardSection>
            </SwiperSlide>
          </Swiper>
        </ProductCardsWrapper>
      </ProductCardsContainer>
    );
  }
}

export default Products;
