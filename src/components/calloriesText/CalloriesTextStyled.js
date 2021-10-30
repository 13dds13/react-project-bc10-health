import styled from "styled-components";

export const CalloriesTextStyled = styled.div`
  .callories-text {
    @media screen and (min-width: 768px) {
      display: flex;
      margin-top: 90px;
    }
    @media screen and (min-width: 1280px) {
      display: block;
      margin-left: 500px;
      margin-top: -200px;
    }
    &__box {
      color: var(--not-bold-text-colour);
      font-family: Verdana;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.04em;
      /* width: 290px; */
      margin-bottom: 40px;
      margin-top: 40px;
      @media screen and (min-width: 768px) {
        margin-top: 0px;
        margin-right: 60px;
        height: 152px;
      }

      @media screen and (min-width: 1280px) {
        text-align: right;
         width: 330px;
        height: 168px; */
        margin-right: 0px;
        margin-bottom: 60px;
        /* padding-right: 60px; */
      }
    }

    &__title {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-family: $non-bold-text-font;
      font-weight: 700;
      color: var(--bold-text-colour);
      margin-bottom: 22px;
      @media screen and (min-width: 768px) {
        width: 280px;
      }
    }

    &__item {
    }

    &__item-box {
      display: flex;
      justify-content: right;
      align-items: center;
    }
  }
`;
