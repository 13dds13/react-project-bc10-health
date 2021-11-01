import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: inherit;

  /* padding: 0 15px; */

  .header__wrap {
    display: flex;
    align-items: center;

    cursor: pointer;
  }

  .header__logo {
    width: 47px;
    height: 44;
  }

  .header__text {
    font-family: "Roboto", sans-serif;
    font-weight: lighter;
    letter-spacing: 2px;
    padding-left: 10px;
    font-size: 20px;
  }

  .header__text-color {
    color: var(--accent-colour);
  }

  .header__icon-menu {
    width: 18px;
    height: 12px;
  }

  .header__icon-close {
    width: 20px;
    height: 20px;
  }

  .border-line {
    color: var(--border-colour);
    margin: 0;
    padding: 0;
  }
  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
    align-items: flex-end;

    .header__wrap {
      align-items: flex-end;
    }

    .header__logo {
      width: 77px;
      height: 66px;
    }

    .header__text {
      margin: 0;
      padding-right: 22px;
      border-right: 2px solid var(--border-colour);
    }
  }

  @media screen and (max-width: 1023px) {
    /* background-color: var(--main-bg-color); */
  }
`;
