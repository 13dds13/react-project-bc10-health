import styled from "styled-components";

export const DiaryPageStyled = styled.div`
margin-top: 40px;
font-family: Verdana;
@media screen and (min-width: 1280px) {
      margin-top: 146px;
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
      padding-bottom: 60px;
    }
    @media screen and (min-width: 1280px) {
      display: flex;
      justify-content: space-between;
    }
}

`