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
} from "../../redux/user/userOperations";
import EatenProductsList from "../../components/eatenProductsList/EatenProductsList";
import getDateInFormat from "../../helpers/getDateInFormat";
import {
  getDayId,
  getDaySummary,
  getEatenProductsList,
  getIsLoadingUserData,
  getUserStat,
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
import Loader from "react-loader-spinner";
import { useTranslation } from "react-i18next";
import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

const DiaryPage = () => {
  const userData = useSelector(getUserStat);
  const isModalOpen = useSelector(getIsOpenModal);
  const eatenProductsList = useSelector(getEatenProductsList);
  const dayId = useSelector(getDayId);
  const daySummary = useSelector(getDaySummary);
  const isLoadingUserData = useSelector(getIsLoadingUserData);

  const [width, setWidth] = useState(window.innerWidth);
  const [errorMsg, setErrorMsg] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [productName, setProductName] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [productsVariants, setProductsVariants] = useState([]);
  const [isSearchingProduct, setIsSearchingProduct] = useState(false);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    if (!userData?.dailyRate) return;
    setProductName("");
    setProductWeight("");
    const date = getDateInFormat(startDate);
    dispatch(getDayInfo(date));
  }, [daySummary.percentsOfDailyRate, dispatch, startDate, userData]);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    setErrorMsg("");
    if (!productName) return;
    const isAlreadyInProdVariants = productsVariants.some(
      (prod) => prod.title.ru === productName
    );
    if (isAlreadyInProdVariants) return;
    setIsSearchingProduct(true);
    productSearch(productName).then((searchData) => {
      typeof searchData === "string"
        ? setErrorMsg(searchData)
        : setProductsVariants(searchData);
      setIsSearchingProduct(false);
    });
  }, [productName]);

  useEffect(() => {
    errorMsg && notification("warning", errorMsg);
    setErrorMsg("");
  }, [errorMsg]);

  const handleResizeWindow = () => setWidth(window.innerWidth);

  const isCurrentDay =
    getDateInFormat(startDate) === getDateInFormat(new Date());

  const handleChange = ({ name, value }) => {
    if (name === "productWeight" && value > 999) {
      setErrorMsg("Значение веса продукта должно быть от 0 до 999");
      return;
    }
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
              <label className={"dataPicker__box"}>
                <DatePicker
                  locale="ru"
                  dateFormat="dd.MM.yyyy"
                  selected={startDate}
                  onChange={setStartDate}
                />
                <svg className="dataPicker__svg" width="18" height="20">
                  <use href={sprite + "#calendar"} />
                </svg>
              </label>
              {!userData?.dailyRate && (
                <>
                  {/* <p>
                    Для начала использования "Дневника" заполните, пожалуйста,
                    свои данные на странице:
                  </p> */}
                  {t("DiaryPage.text")}

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
                  isSearchingProduct={isSearchingProduct}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              )}
              {isLoadingUserData ? (
                <Loader
                  type="ThreeDots"
                  color="var(--accent-colour)"
                  height={40}
                  width={40}
                  style={{
                    textAlign: "center",
                  }}
                />
              ) : (
                <EatenProductsList
                  eatenProductsList={eatenProductsList}
                  isCurrentDay={isCurrentDay}
                  handleClick={handleClick}
                />
              )}
              {userData?.dailyRate && isCurrentDay && width < 768 && (
                <Button
                  type="button"
                  isValid={true}
                  dirty={true}
                  onClick={onHandleCliсk}
                  // buttonName="Добавить"
                  buttonName={t("DiaryPage.button")}
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
                isSearchingProduct={isSearchingProduct}
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
