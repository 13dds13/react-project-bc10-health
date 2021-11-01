import styled from "styled-components";

export const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;

  height: 40px;
  padding: 0 15px;


  /* z-index: 1300; */

  .user-menu {
    &__icon {
      width: 20px;
      height: 20px;
    }
    &__text-wrap {
      justify-content: flex-end;
      margin-left: auto;
    }

    &__text,
    &__button {
      font-size: 14px;
      font-family: "Montserrat", sans-serif;
      cursor: pointer;
    }

    &__text {
      display: inline-block;
      margin: 0;
      padding: 0 15px 0 0;

      border-right: 2px solid var(--border-colour);
    }
    &__button {
      border: none;
      outline: none;
      background-color: Transparent;
      padding: 0 0 0 15px;

      color: var(--not-bold-text-colour);

      &:hover {
        color: var(--not-bold-text-colour);
      }
    }
  }

  @media screen and (max-width: 767px) {
    background-color: var(--secondary-bg-colour);
  }

  @media screen and (min-width: 768px) {
    margin-right: 35px;
  }

  @media screen and (min-width: 1280px) {
    align-items: flex-end;
    margin-left: auto;
    margin-right: 0;
  }
`;
