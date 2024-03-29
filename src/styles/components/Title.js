import styled from "styled-components";

export const MainTitle = styled.section`
  margin-top: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7rem;
  height: 100vh;

  h1 {
    white-space: nowrap;
    overflow: hidden;
    -webkit-animation: tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    animation: tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
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