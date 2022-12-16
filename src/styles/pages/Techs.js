import styled from "styled-components";

export const MainStacks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;

  img {
    width: 80px;
  }
`

export const ListTechs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  width: 90%;
  flex-wrap: wrap;

  .inView {
    animation: wipe-enter 1s 1;
  }

  @keyframes wipe-enter {
	0% {
		opacity: 0;
    transform: translateY(50%);
	}
	100% {
		opacity: 1;
    transform: translateY(0);
	}
}
`