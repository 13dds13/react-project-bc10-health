import styled from "styled-components";

export const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 40px;
  /* background-color: #eff1f3; */

  .user-menu {
    &__text,
    &__button {
      font-size: 14px;
      font-family: "Montserrat", sans-serif;
      /* font-weight: 700; */
    }

    &__text {
      display: inline-block;
      margin: 0;
      padding: 0 15px 0 0;

      border-right: 2px solid #e0e0e0;
    }
    &__button {
      border: none;
      outline: none;
      background-color: Transparent;
      padding: 0 15px;

      &:hover {
        color: #9b9faa;
      }
    }
  }

  @media screen and (max-width: 767px) {
    background-color: #eff1f3;
  }

  @media screen and (min-width: 768px) {
    margin-right: 35px;
  }

  @media screen and (min-width: 1024px) {
    align-items: flex-end;
    margin-left: auto;
  }
`;
