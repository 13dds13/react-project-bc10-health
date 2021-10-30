import React from "react";
import { Button } from "../button/Button";
import { ModalTextStyled } from "./ModalTextStyled";
import { useHistory } from "react-router-dom";
import sprite from "../../images/sprite.svg";

const ModalText = ({ modalData, onHandleSetModal }) => {
  const history = useHistory();

  return (
    <ModalTextStyled>
      <button
        className="EatenProductsList__item-button btn-location"
        type="button"
        onClick={() => onHandleSetModal()}
      >
        <svg width="12" height="12" fill="#9B9FAA">
          <use href={sprite + "#close"} />
        </svg>
      </button>
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
            <Button
              buttonName="Начать худеть"
              isValid={true}
              dirty={true}
              onClick={() => {
                let path = `/singup`;
                history.push(path);
                onHandleSetModal();
              }}
              type={`button`}
            />
          </div>
        </div>
      </div>
      ;
    </ModalTextStyled>
  );
};

export default ModalText;
