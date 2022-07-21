import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const HerosectionSlider = styled.section`
  position: relative;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  @media (max-width: 540px) {
    height: 98vh;
  }
`;

export const HeroImage = styled.img`
  height: 100% !important;
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  object-fit: cover;
  z-index: -1;
  user-select: none;

  @media (max-width: 768px) {
    width: 100%;
    height: auto !important;
    top: 80px !important;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 5rem;
  margin-left: 2rem;
  margin-right: 1.5rem;
  height: 100%;
  color: var(--primary-blue);

  @media (min-width: 900px) {
    justify-content: center;
    width: 40%;
    padding-bottom: 0;
    margin-left: 5rem;
    margin-right: 0;
  }
`;

export const HeroTitle = styled(motion.h1)`
  font-size: 2rem;
  font-family: Helvetica, sans-serif;
  letter-spacing: -1px;
  line-height: 1.25;
  text-transform: uppercase;
  max-width: 375px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  overflow: hidden;

  @media (min-width: 540px) {
    font-size: 3rem;
  }
`;

export const HeroSubtitle = styled(motion.p)`
  font-family: Helvetica, sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.3;

  @media (min-width: 540px) {
    font-size: 1.35rem;
  }
`;

const bounceAlpha = keyframes`
  0% {
    opacity: 1;
    transform: translate(0px, -50%) scale(1);
  }
  25% {
    opacity: 0;
    transform: translate(10px, -50%) scale(0.9);
  }
  26% {
    opacity: 0;
    transform: translate(-10px, -50%) scale(0.9);
  }
  55% {
    opacity: 1;
    transform: translate(0px, -50%) scale(1);
  }
`;

export const HeroLink = styled(motion.a)`
  font-size: 1.1rem;
  color: #fff;
  background-color: var(--primary-blue);
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 30px;
  box-shadow: 2px 2px 10px var(--blue-shade-2);
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media (min-width: 540px) {
    font-size: 1.25rem;
    padding: 0.6rem 1.5rem;
  }

  & span {
    align-items: center;
  }

  &:hover .arrow {
    animation: ${bounceAlpha} 1.4s linear infinite;
  }
  &:hover .arrow.first {
    animation: ${bounceAlpha} 1.4s linear 0.2s infinite;
  }
`;

export const Arrows = styled.div`
  width: 25px;
  height: 100%;
  position: relative;
  margin-left: 1rem;

  .arrow {
    position: absolute;
    bottom: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 0px;
    width: 15px;
    height: 15px;
    background-size: contain;
  }
  .second {
    margin-left: 10px;
  }
  .next {
    background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS4xIDIxN2MyMC4yIDIwLjIgMTkuOSA1My4yLS42IDczLjdzLTUzLjUgMjAuOC03My43LjZsLTE5MC0xOTBjLTIwLjEtMjAuMi0xOS44LTUzLjIuNy03My43UzEwOSA2LjggMTI5LjEgMjdsMTkwIDE5MHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE5LjEgMjkwLjVjMjAuMi0yMC4yIDE5LjktNTMuMi0uNi03My43cy01My41LTIwLjgtNzMuNy0uNmwtMTkwIDE5MGMtMjAuMiAyMC4yLTE5LjkgNTMuMi42IDczLjdzNTMuNSAyMC44IDczLjcuNmwxOTAtMTkweiIvPjwvc3ZnPg==);
  }
`;
