import styled from "styled-components";

export const NavigationStyled = styled.nav`
  margin: 0 15px;

  .nav {
    &__list {
      display: flex;
      list-style: none;

      margin: 0;
      padding: 0;
    }
    &__item {
      &:last-child {
        padding-left: 15px;
      }
    }

    &__link {
      text-decoration: none;
      text-transform: uppercase;

      color: #212121;
      font-size: 14px;
      font-weight: 700;
    }

    &__link-active {
      color: #9b9faa;
    }
  }

  @media screen and (min-width: 1024px) {
    margin: 0;
    padding-left: 22px;
  }
`;
