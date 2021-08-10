import styled from "styled-components";
import Image from "next/image";

export const HerosectionSlider = styled.section`
  position: relative;
  top: -120px;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #040f23;

  @media (max-width: 540px) {
    height: 98vh;
  }
`;

export const HeroSlide = styled.div`
  width: 100%;
  height: 100vh;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100vh;
  z-index: 1;
  user-select: none;

  @media (max-width: 540px) {
    min-height: 98vh;
    max-width: 850px;
    max-height: 98%;
    height: auto;
    width: auto;
    margin: auto;
    transform: translateX(-25%);
  }
`;

export const HeroText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: -50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const HeroHeading = styled.h1`
  font-size: 48px;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  color: #00b4d8;
  letter-spacing: 2px;
  z-index: 10;

  @media screen and (max-width: 540px) {
    font-size: 30px;
  }
`;

export const HeroSubtitle = styled.p`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 500;
  color: #e9f6fc;
  letter-spacing: 0.5px;
  z-index: 10;

  @media screen and (max-width: 540px) {
    font-size: 16px;
    width: 300px;
    text-align: center;
  }
`;

export const HeroDotsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 20px;
  z-index: 5;
  font-size: 10px;

  @media screen and (max-width: 900px) {
    top: 90%;
    right: 0;
    flex-direction: row;
    width: 100%;
    height: 30px;
  }
`;

export const HeroDot = styled.div`
  color: #e0e2d5;
  height: 25px;
  width: 25px;
  display: flex;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid #00b4d8;
  }
`;

export const HeroLine = styled.div`
  background-color: #005d70;
  height: 100px;
  width: 1.5px;
  margin: 10px 0;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const HeroCurrentSlideNo = styled.div`
  color: #00b4d8;
  font-weight: 500;
  font-size: 26px;
  padding-right: 5px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const HeroSlideNo = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #e9f6fc;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
