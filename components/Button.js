import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { MdSubdirectoryArrowRight } from "react-icons/md";

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

const LinkButton = styled(motion.a)`
  font-size: 1.25rem;
  color: #fff;
  background-color: var(--primary-blue);
  padding: 0.3rem 1rem;
  border: none;
  border-radius: 30px;
  box-shadow: 2px 2px 10px var(--blue-shade-2);
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &.secondary {
    background-color: #fff;
    color: var(--primary-blue);
    border: 1px solid var(--primary-blue);
    box-shadow: none;
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

const Arrows = styled.div`
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

export const Btn = styled.div`
  position: relative;
  max-width: 200px;
  border-radius: 30px;
  border: 1px solid #01194f;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  background-color: transparent;
  color: #01194f;
  padding: 0.3rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;

  &:hover {
    background-color: #01194f;
    color: #fff;
  }
`;

const Button = ({ className, text, link }) => {
  return (
    <LinkButton href={link} as={motion.a} className={className}>
      <span>{text}</span>
      <Arrows>
        <span className="arrow first next"></span>
        <span className="arrow second next"></span>
      </Arrows>
    </LinkButton>
  );
};

export default Button;
