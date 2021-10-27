import React from "react";
import { CalloriesTextStyled } from "./CalloriesTextStyled";

const CalloriesText = () => {
  return (
    <CalloriesTextStyled>
      <div className="callories-text">
        <div className="callories-text__box">
          <p className="callories-text__title">Сводка за 20.06.2020</p>
          <div>
            <div className="callories-text__item-box">
              <p className="callories-text__item">Осталось</p>
              <span className="callories-text__count">000 ккал</span>
            </div>
            <div className="callories-text__item-box">
              <p className="callories-text__item">Употреблено</p>
              <span className="callories-text__count">000 ккал</span>
            </div>
            <div className="callories-text__item-box">
              <p className="callories-text__item">Дневная норма</p>
              <span className="callories-text__count">000 ккал</span>
            </div>
            <div className="callories-text__item-box">
              <p className="callories-text__item"> n% от нормы</p>
              <span className="callories-text__count">000 ккал</span>
            </div>
          </div>
        </div>
        <div className="callories-text__box">
          <p className="callories-text__title">Нерекомендуемые продукты</p>
          <p className="callories-text__item">
            Здесь будет отображаться Ваш рацион
          </p>
        </div>
      </div>
    </CalloriesTextStyled>
  );
};

export default CalloriesText;
