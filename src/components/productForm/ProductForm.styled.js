import styled from "styled-components";

export const ProductFormStyled = styled.div`
  margin-top: 30px;
  .productForm-form {
    width: 290px;
    @media screen and (min-width: 768px) {
      width: 605px;
      display: block;
    }
    &__box {
      display: flex;
      /* margin-bottom: 60px; */

      @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
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
      display: flex;
      flex-direction: column;
      margin-right: 40px;
      width: auto;
      color: var(--not-bold-text-colour);
      font-family: Verdana;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 1.22;
      letter-spacing: 0.04em;
      /* display: block; */
      @media screen and (max-width: 767px) {
        margin-bottom: 15px;
        margin-right: 0;
        align-self: stretch;
      }
      &_size {
        /* width: 105px; */
        text-align: right;
        margin-bottom: 60px;
        @media screen and (max-width: 767px) {
        margin-bottom: 60px;
        text-align: left;
      }
      }
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
      width: auto;
      color: var(--accent-colour);
      font-family: Verdana;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 1.22;
      letter-spacing: 0.04em;
      /* width: 25%; */
      background-color: inherit;
      /* border: 1px solid #000000; */
      border: none;
      border-bottom: 1px solid var(--border-colour);
      outline: none;
      margin-right: 0px;
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
`;

// @media screen and (min-width: 768px) {
//     padding: 0 69px 0 87px;
//   }
//   @media screen and (min-width: 1280px)
