import styled from "styled-components";

interface NavItemProps {
  isSelected?: boolean;
}

export const HeaderMain = styled.div`
  background-color: #FFFFFF;
  color: #868B94;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  z-index: 999;
`;

export const HeaderBox = styled.div`
  padding: 20px 150px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
`;

export const HeaderNav = styled.nav`
  width: 100%;
  padding-top: 0;
  padding-right: 4rem;
  padding-bottom: 0;
  padding-left: 0;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  ul{
    display: inline-block;
  }
`;

export const NavItem = styled.li<NavItemProps>`
  display: inline-block;
  margin-left: 30px;
  color: ${(props) => (props.isSelected ? "#FFDD86" : 'inherit')};

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      cursor: pointer;
      transition: all ease-in-out 0.2s;
      opacity: 0.7;
    }
  }
`;