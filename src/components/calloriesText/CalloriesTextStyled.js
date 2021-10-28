import styled from "styled-components";

export const CalloriesTextStyled = styled.div`
  .callories-text {
    @media screen and (min-width: 768px) {
      display: flex;
    }
    @media screen and (min-width: 1024px) {
      display: block;
    }
    &__box {
      color: var(--not-bold-text-colour);
      font-family: Verdana;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.04em;
      width: 290px;
      height: 152px;
      margin-bottom: 40px;
      @media screen and (min-width: 768px) {
        margin-left: 60px;
      }

      @media screen and (min-width: 1024px) {
        width: 330px;
        height: 168px;
        margin-bottom: 60px;
        padding-right: 60px;
      }
    }

    &__title {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-family: $non-bold-text-font;
      font-weight: 700;
      color: var(--bold-text-colour);
      margin-bottom: 22px;
    }

    &__item {
    }

    &__item-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
