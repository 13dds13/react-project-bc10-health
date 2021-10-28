import React from "react";
import { Button } from "../button/Button";
import { ModalTextStyled } from "./ModalTextStyled";

const ModalText = () => {
  return (
    <ModalTextStyled>
      <div className="modal-text-box">
        <h2 className="modal-text-box__title">
          Ваша рекомендуемая суточная норма калорий составляет
        </h2>
        <div className="modal-products">
          <p className="modal-products__count">
            2800 <span className="modal-products__count_small">ккал</span>
          </p>
          <p className="modal-products__text">
            Продукты, которые вам не рекомендуется употреблять
          </p>
          <ol className="modal-products__list">
            <li className="modal-products__item">Мучные продукты</li>
            <li className="modal-products__item">Молоко</li>
            <li className="modal-products__item">Красное мясо</li>
            <li className="modal-products__item">Копченности</li>
          </ol>
          <div className="modal-products__btn">
            <Button buttonName="Начать худеть" />
          </div>
        </div>
      </div>
      ;
    </ModalTextStyled>
  );
};

export default ModalText;
