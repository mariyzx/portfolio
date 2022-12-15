import styled from 'styled-components';

export const MainProject = styled.section`
  text-align: center;
  margin-top: 2rem;
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
  
  @media only screen and (max-width: 435px) {
    width: 100%;
  }   
`

export const CardProject = styled.div`
  flex: 0 1 24%;
  padding: 10px;

  div > ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
    list-style-type: none;
  }

  @media only screen and (max-width: 435px) {
    
  }  
`