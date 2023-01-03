import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin:0;
  padding: 0;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

html {
  font-size: 62.5%;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

h1 {
  font-size: 6rem;
}

h2 {
  font-size: 4.8rem;
}

h3 {
  font-size: 3.4rem;
}

p {
  font-size: 1.6rem;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
