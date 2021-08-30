import styled from "styled-components";

export const TopbarContainer = styled.div`
  width: 100%;
  height: 40px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopbarContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  color: ${(props) => props.color};
  border-bottom: 0.1px solid ${(props) => props.border};
`;

export const TopbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 0 20px;
  height: 100%;
  border-left: 0.1px solid ${(props) => props.border};
  border-right: 0.1px solid ${(props) => props.border};
  z-index: 20;

  &:nth-child(1) {
    border-right: none;
  }

  @media screen and (max-width: 420px) {
    font-size: 6px;
    padding: 0 10px;
  }
`;

export const TopbarIcons = styled.span`
  padding-top: 7px;
  justify-self: flex-start;
  font-size: 1.1rem;
  color: #0088a3;

  @media screen and (max-width: 420px) {
    font-size: 0.65rem;
    padding-top: 4.5px;
  }
`;

export const TopbarText = styled.span`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 12px;
  font-weight: 200;
  letter-spacing: 1.4px;
  padding-left: 0.5rem;
  z-index: 20;

  @media screen and (max-width: 768px) {
    font-size: 6px;
  }
`;
