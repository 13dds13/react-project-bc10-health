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

  const { date, kcalConsumed, dailyRate, percentsOfDailyRate } = daySummary;

  const normalizedKcalLeft = dailyRate - kcalConsumed;
  const normalizedDate = [
    date?.split("-")[2],
    date?.split("-")[1],
    date?.split("-")[0],
  ].join(".");

  return (
    <CalloriesTextStyled>
      <div className="callories-text">
        <div className="callories-text__box">
          <p className="callories-text__title">
            Сводка {date ? `за ${normalizedDate}` : "недоступна"}
          </p>
          <div>
            <div className="callories-text__item-box">
              <p className="callories-text__item">Осталось</p>
              <span className="callories-text__count">
                {normalizedKcalLeft <= 0 || !dailyRate
                  ? ": 000"
                  : `: ${Math.round(normalizedKcalLeft)}`}{" "}
                ккал
              </span>
            </div>
            <div className="callories-text__item-box">
              <p className="callories-text__item">Употреблено</p>
              <span className="callories-text__count">
                : {Math.round(kcalConsumed) || "000"} ккал
              </span>
            </div>
            <div className="callories-text__item-box">
              <p className="callories-text__item">Дневная норма</p>
              <span className="callories-text__count">
                : {Math.round(dailyRate) || "000"} ккал
              </span>
            </div>
            <div className="callories-text__item-box">
              <p className="callories-text__item"> n% от нормы</p>
              <span className="callories-text__count">
                : {Math.round(percentsOfDailyRate) || "000"} %
              </span>
            </div>
          </div>
        </div>
        <div className="callories-text__box">
          <p className="callories-text__title">Нерекомендуемые продукты:</p>
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
