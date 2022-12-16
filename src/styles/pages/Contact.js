import styled from "styled-components";

export const MainContact = styled.section`
  text-align: center;

  div {
    display: flex;
    margin-top: 10px;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1rem;
  }

  form {
    margin-top: 10px;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10%;
    margin-top: 30px;
  }


  form > input, form > textarea {
    max-width: 190px;
    height: 44px;
    background-color: #05060f0a;
    border-radius: .5rem;
    padding: 0 1rem;
    border: 2px solid transparent;
    font-size: 1rem;
    resize: none;
    transition: border-color .3s cubic-bezier(.25,.01,.25,1) 0s, color .3s cubic-bezier(.25,.01,.25,1) 0s,background .2s cubic-bezier(.25,.01,.25,1) 0s;
  }

  form > input:focus {
    border-color: purple;
    outline: none;
  }

  @media only screen and (max-width: 700px) {
    div {
      flex-direction: column;
    }

    footer {
      width: 100%;
      text-align: center;
    }
  }

`

export const DivContact = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
`