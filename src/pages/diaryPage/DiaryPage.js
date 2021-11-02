import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import ProductForm from "../../components/productForm/ProductForm";
import "./react-datapicker.css";
import sprite from "../../images/sprite.svg";
import {
  addEatenProduct,
  deleteProduct,
  getDayInfo,
  getUserData,
} from "../../redux/user/userOperations";
import EatenProductsList from "../../components/eatenProductsList/EatenProductsList";
import getDateInFormat from "../../services/getDateInFormat";
import {
  getDayId,
  getDaySummary,
  getEatenProductsList,
} from "../../redux/user/userSelectors";
import CalloriesText from "../../components/calloriesText/CalloriesText";
import Modal from "../../components/modal";
import { DiaryPageStyled } from "./DiaryPageStyles";
import productSearch from "../../services/productSearch";
import { getIsOpenModal } from "../../redux/modal/modalSelectors";
import { setModalValue } from "../../redux/modal/modalAction";
import { mainRoutes } from "../../routes/mainRoutes";
import { NavLink } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { notification } from "../../helpers/notification";

const DiaryPage = () => {
  const dayId = useSelector(getDayId);
  const [errorMsg, setErrorMsg] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [width, setWidth] = useState(window.innerWidth);
  const isModalOpen = useSelector(getIsOpenModal);
  const [productName, setProductName] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [productsVariants, setProductsVariants] = useState([]);
  const eatenProductsList = useSelector(getEatenProductsList);
  const { percentsOfDailyRate, dailyRate } = useSelector(getDaySummary);
  const dispatch = useDispatch();

  useEffect(() => {
    setProductName("");
    setProductWeight("");
    const date = getDateInFormat(startDate);
    dispatch(getDayInfo(date));
  }, [dispatch, startDate, percentsOfDailyRate]);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    productName === "" && setErrorMsg("");
  }, [productName]);

  useEffect(() => {
    setErrorMsg("");
    if (!productName) return;
    productSearch(productName).then((searchData) =>
      typeof searchData === "string"
        ? setErrorMsg(searchData)
        : setProductsVariants(searchData)
    );
  }, [productName]);

  useEffect(() => {
    if (errorMsg) {
      notification("warning", errorMsg);
    }
  }, [errorMsg]);

  const handleResizeWindow = () => setWidth(window.innerWidth);

  const isCurrentDay =
    getDateInFormat(startDate) === getDateInFormat(new Date());

  const handleChange = ({ name, value }) => {
    name === "productName" && setProductName(value);
    name === "productWeight" && setProductWeight(value);
  };

  const onHandleCliсk = () => dispatch(setModalValue());

  const handleSubmit = () => {
    const curProd = productsVariants.find(
      (prod) => prod.title.ru === productName
    );
    if (!curProd) {
      setErrorMsg("Укажите название продукта.");
      return;
    }
    if (!productWeight) {
      setErrorMsg("Укажите вес продукта.");
      return;
    }
    if (productWeight < 0) {
      setErrorMsg("Значение веса продукта должно быть больше ноля.");
      return;
    }
    const productId = curProd._id;
    const weight = productWeight;
    const date = getDateInFormat(startDate);
    dispatch(addEatenProduct({ date, productId, weight }));
    isModalOpen && onHandleCliсk();
  };

  const handleClick = (eatenProductId) =>
    dispatch(deleteProduct({ dayId, eatenProductId }));

  return (
    <>
      <div className="container">
        <DiaryPageStyled>
          <div className="diaryFlexBox">
            <div className="diaryFlexBox__left">
              <div className={"dataPicker__box"}>
                <DatePicker
                  dateFormat="dd.MM.yyyy"
                  selected={startDate}
                  onChange={setStartDate}
                />
                <svg className="dataPicker__svg" width="18" height="20">
                  <use href={sprite + "#calendar"} />
                </svg>
              </div>
              {!dailyRate && (
                <>
                  <p>
                    Перед первым использованием "Дневника" заполните,
                    пожалуйста, свои данные на странице:
                  </p>

                  <NavLink to={mainRoutes[2].path}>
                    <b>{mainRoutes[2].name}</b>
                  </NavLink>
                </>
              )}
              {isCurrentDay && width > 767 && (
                <ProductForm
                  productName={productName}
                  productWeight={productWeight}
                  productsVariants={productsVariants}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              )}

              <EatenProductsList
                eatenProductsList={eatenProductsList}
                isCurrentDay={isCurrentDay}
                handleClick={handleClick}
              />
              {width < 768 && (
                <Button
                  type="button"
                  isValid={true}
                  dirty={true}
                  onClick={onHandleCliсk}
                  buttonName="Добавить"
                ></Button>
                // <button type="button" onClick={onHandleCliсk}>
                //   Добавить
                // </button>
              )}
            </div>
            <CalloriesText />
          </div>
        </DiaryPageStyled>

        {isModalOpen && (
          <Modal hideModal={onHandleCliсk} showModal={onHandleCliсk}>
            <div className="container">
              <ProductForm
                productName={productName}
                productWeight={productWeight}
                productsVariants={productsVariants}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errorMsg={errorMsg}
              />
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default DiaryPage;
