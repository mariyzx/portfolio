import styled from 'styled-components';

export const MainAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 5rem;
  }

  a {
    color: white;
  }

  /* SMARTPHONES LANDSCAPE */
  @media only screen and (max-width: 700px) {
    padding: 16px;
  }   
`