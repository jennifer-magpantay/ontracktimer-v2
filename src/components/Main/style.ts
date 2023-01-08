import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  max-width: 1024px;
  height: calc(100vh - 80px);
  margin: 0 auto;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.background};
`;
