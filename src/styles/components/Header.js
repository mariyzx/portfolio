import styled from "styled-components";

export const MainHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;

  @media only screen and (max-width: 435px) {
    font-size: 4vw;
  }   
`

export const HeaderLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  list-style-type: none;
  cursor: pointer;

  li:hover {
    color: #Cc47f9;
  }
`