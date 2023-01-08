import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1024px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.background};
  border-bottom: 01px solid ${(props) => props.theme.gray_20};

  img {
    width: auto;
    height: 100%;
  }
`;

export const Nav = styled.nav`
  width: fit-content;
  height: 100%;
  display: block;
  margin-left: auto;
  background-color: transparent;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    list-style: none;

    li,
    a {
      display: flex;
      align-items: center;
    }
  }
`;
