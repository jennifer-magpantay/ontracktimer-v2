import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  margin: 0 auto;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.gray_100};
  color: ${(props) => props.theme.gray_10};
`;
