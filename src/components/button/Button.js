import React from "react";
import sprite from "../../images/sprite.svg";

import { ButtonStyled } from "./ButtonStyled";

const Button = ({ dirty, buttonName, isValid, onClick, type, showModal }) => {
  return (
    <ButtonStyled>
      <button
        className="btn btn_orange"
        type={type}
        disabled={!isValid || !dirty}
        onClick={(e) => {
          e.preventDefault();
          console.log(isValid);
          console.log(dirty);
          onClick();
          // if (!dirty) {
          //   alert('Set the values')
          //   return
          // }
          if (!isValid) {
            return;
          }
        }}
      >
        {buttonName}
      </button>
    </ButtonStyled>
  );
};

const ButtonAdd = ({ type }) => {
  return (
    <button className="btn_add btn_orange_add" type={type}>
      <svg width="20" height="20" fill="white">
        <use href={sprite + "#add"} />
      </svg>
    </button>
  );
};

export { ButtonAdd, Button };
