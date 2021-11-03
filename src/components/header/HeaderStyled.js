import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: inherit;

  z-index: 1;

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
    cursor: pointer;
    width: 18px;
    height: 12px;
  }

  .header__icon-close {
    width: 20px;
    height: 20px;
  }

  .header__lang-btn {
    cursor: pointer;
    width: 26px;
    height: 16px;
    padding: 0;
    margin-left: 5px;
    font-size: 10px;
    border-radius: 10px;
    border: 2px solid var(--accent-colour);
    background-color: transparent;
    outline: none;
    margin-right: auto;
    color: var(--accent-colour);
  }

  .header__lang-btn-wrap {
    margin-right: 10px;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
  }
  .header__lang-btn-wrap{
  text-align: center;
  }
  
  .border-line {
    color: var(--border-colour);
    margin: 0;
    padding: 0;
  }

  @media screen and (min-width: 1280px) {
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
