import styled from "styled-components";

export const NavigationStyled = styled.nav`
  margin: 0 15px;

  .nav__list {
    display: flex;
    list-style: none;

    margin: 0;
    padding: 0;
  }
  .nav__item {
    &:not(:last-child) {
      padding-right: 15px;
      justify-content: flex-end;
      
    }
  }

  .nav__link {
    text-decoration: none;
    text-transform: uppercase;

    color: #212121;
    font-size: 14px;
    font-weight: 700;
  }

  .nav__link-active {
    color: #9b9faa;
  }
`;
