import styled from "styled-components";

export const CalloriesTextStyled = styled.div`
  /* background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 7%,
    rgba(240, 241, 243, 1) 100%
  ); */
  background-color: var(--secondary-bg-colour);
  border-radius: 10px;
  margin-top: 20px;
  padding-top: 25px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  @media screen and (min-width: 768px) {
    padding: 15px;
  }
  .callories-text {
    @media screen and (min-width: 768px) {
      display: flex;
      /* margin-top: 90px; */
    }
    @media screen and (min-width: 1280px) {
      display: block;
      /* margin-left: 500px; */
      margin-top: 0px;
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
      /* margin-top: 40px; */
      @media screen and (min-width: 768px) {
        /* margin-top: 0px; */
        /* margin-right: 35px; */
        height: auto;
        margin-bottom: 0px;
      }

      @media screen and (min-width: 1280px) {
        text-align: left;
        max-width: 330px;
        height: auto;
        margin-right: 0px;
        margin-bottom: 20px;
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
      justify-content: left;
      align-items: center;
    }
  }
`;
