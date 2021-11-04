import styled from "styled-components";

export const AuthFormStyled = styled.div`
  .registration-form {
    text-align: center;
    padding-top: 30px;
    @media screen and (min-width: 768px) {
      text-align: left;
      width: 382px;
      /* margin-top: 50px; */
    }
    @media screen and (min-width: 1280px) {
      margin-top: 50px;
      text-align: left;
      width: 382px;
    }
    &__title {
      color: var(--accent-colour);
      margin-top: 0;
      margin-bottom: 30px;
      font-family: Verdana;
      font-style: normal;
      text-transform: uppercase;
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
      /* margin-right: 50px; */
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

    &__input {
      color: var(--accent-colour);
      font-family: Verdana;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 1.22;
      letter-spacing: 0.04em;
      width: 60%;
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
    &__btn-wrapper {
      width: 100%;
      text-align: center;
      @media screen and (min-width: 768px) {
        text-align: left;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      @media screen and (min-width: 1280px) {
        text-align: right;
      }
    }
    &__second-btn-wrapper {
      margin-top: 20px;

      @media screen and (min-width: 768px) {
        margin-top: 0px;
        margin-left: 30px;
      }
    }
  }
`;
