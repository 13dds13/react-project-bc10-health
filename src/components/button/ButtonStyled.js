import styled from "styled-components";

export const ButtonStyled = styled.div`
  .btn {
    /* font-family: Roboto, sans-serif; */
    font-size: 14px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 700;
    border: 2px solid #fc842d;
    width: 176px;
    height: 44px;
    border-radius: 30px;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    cursor: pointer;
  }
  .btn:hover {
    /* background-color: #fc846d; */
    background-color: #fc7514;
  }
  .btn_orange {
    background-color: #fc842d;
    color: #fff;
  }

  .btn_white {
    background-color: #fff;
    color: #fc842d;
  }

  .btn_white:hover {
    color: #fff;
    /* background-color: #fff; */
  }

  .btn_add {
    /* font-family: Roboto, sans-serif; */
    border: 2px solid #fc842d;
    width: 50px;
    height: 50px;
    border-radius: 30px;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }

  .btn_orange_add {
    background-color: #fc842d;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #fc7514;
    }

    &:disabled {
      background-color: #fac9a6;
      border: 2px solid #fac9a6;
      cursor: not-allowed;
    }
  }

  .btn_white_add {
    background-color: #fff;
    color: #fc842d;
  }

  .add {
    font-size: 25px;
    font-weight: 200;
    fill: #fff;
  }

  .btn:disabled {
    background-color: #fac9a6;
    border: 2px solid #fac9a6;
    cursor: not-allowed;
  }
`;
