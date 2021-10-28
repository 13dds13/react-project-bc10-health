import React from "react";
import { ButtonStyled } from "./ButtonStyled";

const Button = ({ buttonName }) => {
  return (
    <ButtonStyled>
      <button className="btn btn_orange" type="button">
        {" "}
        {buttonName}{" "}
      </button>
    </ButtonStyled>
  );
};

const ButtonAdd = ({ buttonNameAdd }) => {
  return (
    <ButtonStyled>
      <button className="btn_add btn_orange_add" type="button">
        {" "}
        {buttonNameAdd} <span className="add">+</span>{" "}
      </button>
    </ButtonStyled>
  );
};

export { ButtonAdd, Button };
