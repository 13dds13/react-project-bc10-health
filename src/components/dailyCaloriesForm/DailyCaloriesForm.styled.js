import styled from "styled-components";

export const DailyCaloriesFormStyled = styled.div`
  .dailyCalories-form {
    display: block;
    margin: 0 auto;
    padding-top: 30px;
    width: 290px;
    @media screen and (min-width: 768px) {
      width: 605px;
      margin: 0;
      /* margin-top: 50px; */
    }
    @media screen and (min-width: 1280px) {
      margin-top: 20px;
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
      @media screen and (min-width: 1280px) {
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
      width: 80%;
      cursor: pointer;
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
      width: 18%;
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
      position: absolute;
      width: 5px;
      height: 5px;
      opacity: 0;
    }

    &__blood-selector-name {
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;

      margin-right: 24px;

      color: var(--not-bold-text-colour);
      font-family: Verdana;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.22;
      letter-spacing: 0.04em;
    }

    &__blood-selector-name::before {
      content: "";
      width: 18px;
      height: 18px;
      border: solid 1px var(--not-bold-text-colour);
      margin-right: 6px;
      border-radius: 100%;
    }

    &__blood-selector-name::after {
      content: "";
      position: absolute;
      left: 4px;
      top: 4px;
      width: 10px;
      height: 10px;
      border: solid 1px var(--accent-colour);
      background-color: var(--accent-colour);
      border-radius: 100%;
      opacity: 0;
    }

    &__radio-form-wrapper {
      margin-bottom: 40px;
      @media screen and (min-width: 768px) {
        margin-bottom: 60px;
      }
      @media screen and (min-width: 1280px) {
        margin-bottom: 63px;
      }
    }

    &__btn-wrapper {
      margin-bottom: 20px;
      width: inherit;
      text-align: center;
      @media screen and (min-width: 768px) {
        text-align: left;
        padding-bottom: 42px;
      }
      @media screen and (min-width: 1280px) {
        text-align: right;
      }
    }
    /* &__btn {
      margin: 0 auto;
    } */
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

  .dailyCalories-form__blood-selector:checked
    + .dailyCalories-form__blood-selector-name::after {
    opacity: 1;
  }

  .dailyCalories-form__blood-selector:checked
    + .dailyCalories-form__blood-selector-name {
    color: var(--accent-colour);
    font-weight: 700;
  }
`;
