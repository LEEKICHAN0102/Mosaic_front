import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 110vh;
  margin: 0 auto;
`;

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
