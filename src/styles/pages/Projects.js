import styled from 'styled-components';

export const MainProject = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const DivProjects = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;

  div:nth-child(4) {
    div {
      margin-bottom: 0rem;
    }
  }
  
  @media only screen and (max-width: 435px) {
    width: 100%;
  }   
`

export const CardProject = styled.div`
  flex: 0 1 24%;
  padding: 10px;
  position: relative;

  div > ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: black;
  }

  img {
    border: 2px solid transparent;
    border-radius: 20px;
  }

  :hover div {
    visibility: visible;
    opacity: 1; 
  }

  :hover img {
    filter: blur(2px)
  }

`

export const AboutProject = styled.div`
  position: absolute;
  display: flex;
  color: purple;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
             1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  font-weight: 700;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 435px;
  text-align: center;
  bottom: 43px;
  opacity: 0;
  visibility: hidden;
  transition: visibility 0s, opacity 0.5s linear; 

  div {
    display: flex;
    gap: 2rem;
    width: 100%;
    height: 30px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
`