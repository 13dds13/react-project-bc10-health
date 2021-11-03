import styled from "styled-components";

export const DiaryPageStyled = styled.div`
  margin-top: 40px;
  font-family: Verdana;
  /* background-color: white; */
  /* background: linear-gradient(90deg, rgba(255,255,255,1) 60%, rgba(240,241,243,1) 60%); */
  @media screen and (min-width: 1280px) {
    margin-top: 85px;
  }
  input {
    border: none;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.2;
    width: 134px;
    color: #212121;
    @media screen and (min-width: 768px) {
      font-size: 34px;
      width: 215px;
      margin-right: 20px;
    }
    font-size: 18px;

    color: #212121;
  }
  .dataPicker__box {
    display: flex;
    width: 260px;
    margin-bottom: 10px;
    /* justify-content: center; */
  }
  .dataPicker__svg {
    @media screen and (min-width: 768px) {
      padding-top: 15px;
    }
  }
  .diaryFlexBox {
    display: block;
    &__left {
      display: block;
      /* padding-bottom: 60px; */
    }
    @media screen and (min-width: 768px) {
      padding-bottom: 0px;
    }
    @media screen and (min-width: 1280px) {
      display: flex;
      justify-content: space-between;
    }
  }
`;
