import styled from "styled-components"

export default function Logo() {
  return(
    <LogoBox>
      <a href="/">MOSAIK</a>
    </LogoBox>
  )
}

const LogoBox = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 60px;
  background-color: inherit;
  color: black;
  font: bold;
  font-size: 24px;
`;