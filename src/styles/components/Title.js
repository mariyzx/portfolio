import styled from "styled-components";

export const MainTitle = styled.section`
  margin-top: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;

  h1 {
    border-right: 2px solid rgba(255, 255, 266, 0.75);
    white-space: nowrap;
    overflow: hidden;
    -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  }

  @-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
`