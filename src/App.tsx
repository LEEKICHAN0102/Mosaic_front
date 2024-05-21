import router from "@/routes/router";
import GlobalStyle from "@/styles/GlobalStyle";

import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
