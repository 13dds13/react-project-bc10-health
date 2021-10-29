import styled from "styled-components";

// --main-bg-color: #ffffff;
//   --btn-text-color: #ffffff;
//   --bold-text-colour: #212121;
//   --not-bold-text-colour: #9b9faa;
//   --accent-colour: #fc842d;
//   --accent-bold-text-colour: #264061;
//   --bg-modal-accent-colour: #264061;
//   --duration-main: 250ms; //время для анимации текста
//   --timing-function-main: cubic-bezier(0.4, 0, 0.2, 1);

export const DailyCaloriesFormStyled = styled.div`
  .dailyCalories-form {
    margin: 0;
    padding-top: 30px;
    width: 290px;
    @media screen and (min-width: 768px) {
      width: 605px;
    }
    &__title {
      color: var(--bold-text-colour);
      margin-top: 0;
      margin-bottom: 30px;
      font-family: Verdana;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 1.44;
      @media screen and (min-width: 768px) {
        margin-bottom: 60px;
        font-size: 30px;
        line-height: 1.2;
      }
      @media screen and (min-width: 1024px) {
        margin-bottom: 68px;
        font-size: 34px;
        line-height: 1.2;
      }
    }

    &__input-wrapper {
      margin-right: 50px;
      @media screen and (min-width: 768px) {
        margin-right: 95px;
      }
    }

    &__label {
      color: var(--not-bold-text-colour);
      font-family: Verdana;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 1.22;
      letter-spacing: 0.04em;
      /* display: block; */
    }

    &__line {
      color: var(--not-bold-text-colour);
      margin: 10px 0 25px 0;
      color: #e0e0e0;
      @media screen and (min-width: 768px) {
        margin: 19px 0 40px 0;
      }
    }

    &__radio-label {
      color: var(--not-bold-text-colour);
      font-family: Verdana;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 1.22;
      letter-spacing: 0.04em;
      display: block;
      margin-bottom: 10px;
    }

    &__input {
      color: var(--accent-colour);
      font-family: Verdana;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 1.22;
      letter-spacing: 0.04em;
      width: 25%;
      background-color: inherit;
      border: none;
      outline: none;
    }

    &__sub-wrapper {
      position: relative;
      display: flex;
      justify-content: space-between;
    }

    &__alert {
      position: absolute;
      top: 32px;
      left: 0px;
      font-size: 12px;
      color: red;
      @media screen and (min-width: 768px) {
        top: 45px;
      }
    }

    &__radio-input-wrapper {
      display: inline-block;
    }

    &__blood-selector {
      margin: 0 6px 0 0;
    }

    &__blood-selector-label {
      color: var(--not-bold-text-colour);
      font-family: Verdana;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.22;
      letter-spacing: 0.04em;
      margin: 0 28px 0 0;
    }

    &__blood-selector-label:checked {
      color: var(--accent-colour);
      font-weight: 700;
    }
  }

  .group {
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
  }

  .sub-group {
    @media screen and (min-width: 768px) {
      width: 240px;
    }
  }

  .btn-box {
    @media screen and (min-width: 1280px) {
      text-align: rightпше;
    }
  }
`;

// @media screen and (min-width: 768px) {
//     padding: 0 69px 0 87px;
//   }
//   @media screen and (min-width: 1024px)
