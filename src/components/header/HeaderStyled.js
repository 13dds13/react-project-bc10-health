import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #e0e0e0;
  padding: 0 15px;

  .header__wrap {
    display: flex;
    align-items: center;
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
    color: #fc842d;
  }

  .header__icon-menu {
    width: 18px;
    height: 12px;
  }

  .header__icon-close {
    width: 20px;
    height: 20px;
  }

  /* @media screen and (min-width: 768px) {
    padding: 0 69px 0 87px;
  } */

  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
    align-items: flex-end;
    margin: 82px 0 144px 0px;
    border-bottom: none;

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
      border-right: 2px solid #e0e0e0;
    }
  }
`;
