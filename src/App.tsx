import React from "react";
import { ThemeProvider } from "styled-components";
import { themeDefault } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <h1>Hello Stranger</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
};
