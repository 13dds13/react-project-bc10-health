import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #e0e0e0;

  .header__wrap {
    display: flex;
  }

  .header__logo {
    width: 47px;
    height: 44;
  }

  .header__text {
    padding-left: 10px;
    font-size: 16px;
    align-self: flex-end;
  }

  .header__text-color {
    color: #fc842d;
  }

  @media screen and (min-width: 768px) {
    padding: 0 69px 0 87px;
  }
  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
    align-items: flex-end;
    padding: 82px 0 144px 90px;
    border-bottom: none;

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
