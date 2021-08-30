import styled from "styled-components";

export const BlogArticle = styled.div`
  text-align: center;
  border: 1px solid #e5e5e5;
  padding: 1.125rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #151515;
  overflow: hidden;
  cursor: pointer;

  &:nth-child(1) {
    margin-top: 0;
  }

  &:nth-child(3) {
    margin-bottom: 0;
  }

  @media (min-width: 540px) {
    padding: 2.5rem 1.5rem;
    margin: 2rem 0;
  }
`;

export const BlogArticleTitle = styled.h3`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #151515;
  line-height: 1;

  &:hover {
    color: #3a7bd5;
  }

  @media (min-width: 540px) {
    max-width: 85%;
  }

  @media (min-width: 900px) {
    font-size: 2.25rem;
    max-width: 70%;
  }
`;

export const BlogArticleInfo = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  list-style: none;
`;

export const BlogInfoWrapper = styled.li`
  padding: 0 0.75rem;
  margin-bottom: 0.625rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    display: inline-block;
    height: 6px;
    width: 6px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #3a7bd5;
    border-radius: 50%;
  }

  &:nth-child(3)::after {
    display: none;
  }

  @media (min-width: 540px) {
    padding: 0 1.25rem;
  }
`;

export const BlogInfoIcon = styled.span`
  font-size: 1rem;
  color: #9b9b9b;
  display: flex;
  align-items: center;
`;

export const BlogInfoText = styled.p`
  font-size: 1rem;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 0 0.5rem;
  color: #9b9b9b;

  &:hover {
    color: #3a7bd5;
  }
`;

export const BlogImg = styled.div`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
