import React, { useEffect, useState } from "react";
import { Button } from "../button/Button";
import { ModalTextStyled } from "./ModalTextStyled";
import { useHistory } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import { getIsLoadingUserData } from "../../redux/user/userSelectors";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";

const ModalText = ({ modalData, onHandleSetModal }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const isLoadingUserData = useSelector(getIsLoadingUserData);
  const history = useHistory();

  const breakPointTablet = 768;
  const handleResizeWindow = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <ModalTextStyled>
      <div className="modal-text-box">
        {width >= breakPointTablet && (
          <button
            className="modal-btn-close"
            type="button"
            onClick={() => onHandleSetModal()}
          >
            <svg width="12" height="12" fill="#9B9FAA">
              <use href={sprite + "#close"} />
            </svg>
          </button>
        )}

        {isLoadingUserData || !modalData.dailyRate ? (
          <>
            <h2 className="modal-text-box__title">
              Проводится расчет данных...
            </h2>
            <Loader
              type="ThreeDots"
              color="var(--accent-colour)"
              height={80}
              width={80}
              style={{
                textAlign: "center",
              }}
            />
          </>
        ) : (
          <>
            <h2 className="modal-text-box__title">
              Ваша рекомендуемая суточная норма калорий составляет
            </h2>
            <div className="modal-products">
              <p className="modal-products__count">
                {modalData.dailyRate}
                <span className="modal-products__count_small"> ккал</span>
              </p>
              <p className="modal-products__text">
                Продукты, которые вам не рекомендуется употреблять
              </p>
              <ol className="modal-products__list">
                {modalData.notAllowedProducts?.slice(0, 5).map((el) => (
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
          </>
        )}
      </div>
    </ModalTextStyled>
  );
};

export default ModalText;
