import styled from "styled-components";

export const CalloriesTextStyled = styled.div`
/* background-color: var(--secondary-bg-colour); */
background: linear-gradient(180deg, rgba(255,255,255,1) 7%, rgba(240,241,243,1) 100%);
padding:40px;
/* box-shadow: 0px 75px 76px 29px rgba(142, 142, 142, 0.2); */
/* background: radial-gradient(circle, rgba(240,241,243,1) 42%, rgba(255,255,255,1) 68%); */
  .callories-text {
    @media screen and (min-width: 768px) {
      display: flex;
      margin-top: 90px;
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
        margin-right: 60px;
        height: 152px;
      }

      @media screen and (min-width: 1280px) {
        text-align: left;
         width: 330px;
        height: 168px; 
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
      justify-content: left;
      align-items: center;
      
    }
  }
`;
