import { useLocation } from "react-router-dom";
import * as HeaderStyle from "./style";
import Logo from "@/assets/Logo";

export default function Header() {
  const location = useLocation();
  
  return(
    <HeaderStyle.HeaderMain>
      <HeaderStyle.HeaderBox>
        <Logo />
        <HeaderStyle.HeaderNav>
          <ul>
            <HeaderStyle.NavItem isSelected={location.pathname === '/saturi'}>
              <a href="/saturi">사투리</a>
            </HeaderStyle.NavItem>
            <HeaderStyle.NavItem isSelected={location.pathname === '/culture'}>
              <a href="/culture">문화</a>
            </HeaderStyle.NavItem>
            <HeaderStyle.NavItem isSelected={location.pathname === '/place'}>
              <a href="/place">지역 명소</a>
            </HeaderStyle.NavItem>
          </ul>
        </HeaderStyle.HeaderNav>
      </HeaderStyle.HeaderBox>
    </HeaderStyle.HeaderMain>
  );
}

