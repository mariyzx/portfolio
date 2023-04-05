import styled from 'styled-components';

export const MainAbout = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  margin-top: 20px;

  div {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: purple;
  }

  /* SMARTPHONES LANDSCAPE */
  @media only screen and (max-width: 700px) {
    padding: 16px;
  }   
`