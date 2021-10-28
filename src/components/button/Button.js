import React from "react";
import sprite from "../../images/sprite.svg";
import styles from "./Buttot.module.css";

const Button = ({ buttonName, type }) => {
  return (
    <button className={`${styles.btn} ${styles.btn_orange}`} type={type}>
      {buttonName}
    </button>
  );
};

const ButtonAdd = ({ type }) => {
  return (
    <button
      className={`${styles.btn_add} ${styles.btn_orange_add}`}
      type={type}
    >
      <svg width="20" height="20" fill="white">
        <use href={sprite + "#add"} />
      </svg>
    </button>
  );
};

export { ButtonAdd, Button };
