import React from "react";
import { Button } from "../button/Button";
import { ModalTextStyled } from "./ModalTextStyled";

const ModalText = ({ modalData }) => {
  return (
    <ModalTextStyled>
      <div className="modal-text-box">
        <h2 className="modal-text-box__title">
          Ваша рекомендуемая суточная норма калорий составляет
        </h2>
        <div className="modal-products">
          <p className="modal-products__count">
            {modalData.dailyRate}
            <span className="modal-products__count_small">ккал</span>
          </p>
          <p className="modal-products__text">
            Продукты, которые вам не рекомендуется употреблять
          </p>
          <ol className="modal-products__list">
            {modalData.notAllowedProducts?.map((el) => (
              <li className="modal-products__item" key={el}>
                {el}
              </li>
            ))}
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
