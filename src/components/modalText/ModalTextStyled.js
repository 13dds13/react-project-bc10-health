import styled from "styled-components";

export const ModalTextStyled = styled.div`
  .modal-text-box {
    background-color: var(--main-bg-color);
    height: 820px;
    font-family: Verdana;
    letter-spacing: 0.04em;
    width: 320px;
    font-weight: bold;
    padding-right: 15px;
    padding-left: 15px;
    @media screen and (min-width: 768px) {
      text-align: center;
      height: 580px;
      width: 594px;
      padding-right: 42px;
      padding-left: 42px;
      padding-top: 64px;
      padding-bottom: 68px;
    }
    @media screen and (min-width: 1024px) {
      text-align: center;
      height: 580px;
      width: 690px;
      padding-right: 91px;
      padding-left: 91px;
    }

    &__title {
      padding-top: 36px;
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 40px;
      color: var(--bold-text-colour);
      @media screen and (min-width: 768px) {
        padding: 0;
        line-height: 32px;
        margin-bottom: 22px;
        font-size: 26px;
        line-height: 32px;
      }
    }
  }

  .modal-products {
    &__count {
      font-size: 48px;
      line-height: 58px;
      text-align: center;
      color: var(--accent-bold-text-colour);
      padding-bottom: 30px;
      border-bottom: 1px solid var(--border-colour);
      margin-bottom: 20px;
      margin-left: auto;
      margin-right: auto;
      @media screen and (min-width: 768px) {
        width: 330px;
      }

      &_small {
        font-size: 18px;
        line-height: 26px;
        color: var(--accent-bold-text-colour);
      }
    }

    &__text {
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 22px;
      @media screen and (min-width: 768px) {
        padding-left: 90px;
        width: 330px;
        text-align: left;
      }
    }

    &__list {
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: var(--not-bold-text-colour);
      margin: 0;
      padding-left: 20px;
      margin-bottom: 40px;
      @media screen and (min-width: 768px) {
        padding-left: 110px;
        text-align: left;
      }
    }

    &__item {
      margin-bottom: 10px;
    }

    &__btn {
      text-align: center;
    }
  }
`;
