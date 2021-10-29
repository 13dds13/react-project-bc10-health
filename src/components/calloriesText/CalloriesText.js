import React from "react";
import { useSelector } from "react-redux";
import {
  getDaySummary,
  getNotAllowedProducts,
} from "../../redux/user/userSelectors";
import { CalloriesTextStyled } from "./CalloriesTextStyled";

const CalloriesText = () => {
  const daySummary = useSelector(getDaySummary);
  const notAllowedProducts = useSelector(getNotAllowedProducts);

  const {
    date,
    kcalLeft = "000",
    kcalConsumed = "000",
    dailyRate = "000",
    percentsOfDailyRate = "000",
  } = daySummary;

  return (
    <CalloriesTextStyled>
      <div className="callories-text">
        <div className="callories-text__box">
          <p className="callories-text__title">Сводка за {date}</p>
          <div>
            <div className="callories-text__item-box">
              <p className="callories-text__item">Осталось</p>
              <span className="callories-text__count">{kcalLeft} ккал</span>
            </div>
            <div className="callories-text__item-box">
              <p className="callories-text__item">Употреблено</p>
              <span className="callories-text__count">{kcalConsumed} ккал</span>
            </div>
            <div className="callories-text__item-box">
              <p className="callories-text__item">Дневная норма</p>
              <span className="callories-text__count">{dailyRate} ккал</span>
            </div>
            <div className="callories-text__item-box">
              <p className="callories-text__item"> n% от нормы</p>
              <span className="callories-text__count">
                {Math.round(percentsOfDailyRate)} ккал
              </span>
            </div>
          </div>
        </div>
        <div className="callories-text__box">
          <p className="callories-text__title">Нерекомендуемые продукты</p>
          {notAllowedProducts && !notAllowedProducts.length ? (
            <p className="callories-text__item">
              Здесь будет отображаться Ваш рацион
            </p>
          ) : (
            <p>{notAllowedProducts?.join(", ")}</p>
          )}
        </div>
      </div>
    </CalloriesTextStyled>
  );
};

export default CalloriesText;
