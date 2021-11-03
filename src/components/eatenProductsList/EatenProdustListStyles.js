import styled from "styled-components";

export const EatenProductsListStyles = styled.div`
  margin-top: 31px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-bottom: 40px;
  }
  .EatenProductsList {
    &__item {
      display: flex;
      /* height: 33px; */
      /* border-bottom: 1px solid #E0E0E0; */
      margin-bottom: 20px;
      @media screen and (min-width: 768px) {
        margin-bottom: 15px;
      }
      font-family: Verdana;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 1.2;
      letter-spacing: 0.04em;
      color: #212121;
      &_border {
        border-bottom: 1px solid #e0e0e0;
        margin-right: 9px;
        padding-bottom: 5px;
        @media screen and (min-width: 768px) {
          margin-right: 30px;
        }
      }
      &_widthTitle {
        width: 138px;
        @media screen and (min-width: 768px) {
          width: 239px;
        }
      }
      &_widthGramKcal {
        width: 50px;
        @media screen and (min-width: 768px) {
          width: 105px;
        }
        text-align: right;
      }
    }
    &__item-button {
      background: inherit;
      border: none;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
