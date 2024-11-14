import styled from "styled-components";

export const AppWrapper = styled.div`
  position: absolute;
  top: 180px;
  left: 200px;
  width: 360px;
  height: 800px;
  background: white;
  border: 3px solid black;
  border-radius: 30px;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0 54px 55px,
    rgba(0, 0, 0, 0.12) 0 -12px 30px,
    rgba(0, 0, 0, 0.12) 0 4px 6px,
    rgba(0, 0, 0, 0.17) 0 12px 13px,
    rgba(0, 0, 0, 0.09) 0 -3px 5px;
`;

export const AnimatedTextWrapper = styled.div`
  position: absolute;
  top: 200px;
  left: 880px;
  color: white;

  @keyframes slideInFromLeft {
    from {
      transform: translateX(-80%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  :first-child {
    font-family: monospace;
    font-size: 64px;
    width: 600px;
    height: 160px;
    text-align: center;
    text-shadow: 5px 4px 0 rgba(0, 0, 0, 0.2);
    animation: slideInFromLeft 4s ease-out 2s;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  :last-child {
    font-family: monospace;
    position: absolute;
    top: 260px;
    left: 360px;
    width: 360px;
    text-align: center;
    font-size: 28px;
    text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
    animation: slideInFromLeft 3s ease-out 3s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
`;
