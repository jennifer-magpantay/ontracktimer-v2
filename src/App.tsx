import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themeDefault } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";

export const App = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};
