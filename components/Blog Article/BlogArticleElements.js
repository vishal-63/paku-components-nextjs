import styled from "styled-components";

export const BlogContainer = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    max-width: 50vw;
  }
`;

export const ArticleContainer = styled.div`
  padding: 1rem;
  color: #151515;
  font-size: 0.875rem;
  border: 1px solid #e5e5e5;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 3rem;
  }
`;

export const ArticleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderList = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  position: relative;

  &::after {
    content: "";
    display: inline-block;
    height: 6px;
    width: 6px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
    background-color: #3a7bd5;
    border-radius: 50%;
  }

  &:nth-child(2)::after {
    display: none;
  }
`;

export const Icon = styled.span`
  color: #9b9b9b;
  font-size: 1rem;
  padding-right: 0.25rem;
  display: flex;
  align-items: center;
`;

export const ArticleDateContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  text-align: center;
  line-height: 0;
  top: -0.5rem;

  @media (min-width: 768px) {
    top: -1rem;
  }

  &::before,
  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: #e5e5e5;
    position: absolute;
    top: 50%;
  }

  &::before {
    left: 0;
    transform: translateX(-57%);
  }

  &::after {
    right: 0;
    transform: translateX(57%);
  }
`;

export const ArticleDate = styled.span`
  font-size: 2.25rem;
  font-family: "Montserrat", sans-serif;
  color: #151515;
  line-height: 1.05;
  padding: 0.675rem 1.875rem 0;
  display: block;
  text-align: center;
`;

export const ArticleMonth = styled.span`
  font-size: 0.875rem;
  display: block;
  color: #9b9b9b;
  text-transform: uppercase;
  padding: 0.675rem 1.875rem;
`;

export const ArticleTitle = styled.h4`
  font-size: 1.25rem;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  letter-spacing: 0;
  margin-top: 1rem;
  margin-bottom: 2.25rem;

  @media (min-width: 768px) {
    margin-top: 1.25rem;
    max-width: 90%;
    font-size: 1.5rem;
  }
`;

export const ArticlePara = styled.div`
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  margin-top: 1.5rem;

  & p {
    margin-bottom: 1rem;
  }

  & a {
    color: var(--blue-shade-5);
    text-decoration: underline;
  }

  & img {
    max-width: 100%;
  }

  &:last-child {
    margin-top: 2.3rem;
  }
`;

export const QuoteContainer = styled.div`
  margin-top: 2.25rem;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  border-top: 1px solid #eaeced;

  @media (min-width: 768px) {
    padding: 2rem 2.5rem;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 0.75rem;
    border-style: solid;
    border-color: #eaeced;
  }

  &::before {
    width: 5rem;
    left: 0;
    border-width: 1px 1px 0 0;
  }

  &::after {
    width: calc(100% - 5rem - 0.5rem);
    right: 0;
    border-width: 1px 0 0 1px;
    transform: skewX(-45deg);
  }
`;

export const QuoteIcon = styled.div`
  position: relative;
  display: block;
  max-width: 2.5rem;
`;

export const Quote = styled.p`
  font-size: 1.125rem;
  font-style: italic;
  letter-spacing: 0.02em;
  color: #04ccfc;
  margin-top: 1rem;

  @media (min-width: 768px) {
    margin-left: 4rem;
    margin-top: -2.5rem;
  }
`;

export const ArticleFooter = styled.div`
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  padding-top: 1rem;

  @media (min-width: 768px) {
    margin-top: 4rem;
    padding-top: 2.3rem;
  }
`;

export const ArticleFooterText = styled.h5`
  font-size: 1.125rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
`;

export const ArticleFooterIcons = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  color: #151515;
  margin: 0 0.25rem;
  cursor: pointer;
  transition: color 0.25s ease;
  text-align: center;

  &:hover {
    color: #3a7bd5;
  }
`;

export const RecentPostsContainer = styled.div`
  padding: 3rem 0;

  @media (min-width: 540px) {
    padding: 6rem 0;
  }
`;

export const RecentPostWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 540px) {
    flex-direction: row;
  }
`;

export const RecentPost = styled.div`
  font-size: 1rem;
  color: #151515;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 2rem;
  margin-bottom: 2rem;
  text-decoration: none;

  &:nth-child(2) {
    margin-right: 0;
  }

  @media (min-width: 540px) {
    width: calc(50% - 1rem);
  }
`;

export const RecentPostTitle = styled.h4`
  font-size: 1.25rem;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #151515;
  line-height: 1.3;
  font-weight: 500;
  margin: 0.5rem 0;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    margin: 1.25rem 0;
  }

  &:hover {
    color: #3a7bd5;
  }
`;
