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

const DiaryPage = () => {
  const dayId = useSelector(getDayId);
  const [errorMsg, setErrorMsg] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [width, setWidth] = useState(window.innerWidth);

  const handleResizeWindow = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const isModalOpen = useSelector(getIsOpenModal);

  const dispatch = useDispatch();
  const onHandleCliсk = () => dispatch(setModalValue());

  const [productName, setProductName] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [productsVariants, setProductsVariants] = useState([]);
  const eatenProductsList = useSelector(getEatenProductsList);
  const { percentsOfDailyRate } = useSelector(getDaySummary);

  useEffect(() => {
    setProductName("");
    setProductWeight("");
    const date = getDateInFormat(startDate);
    dispatch(getDayInfo(date));
  }, [dispatch, startDate, percentsOfDailyRate]);

  useEffect(() => {
    setErrorMsg("");
    if (!productName) return;
    productSearch(productName).then((searchData) =>
      typeof searchData === "string"
        ? setErrorMsg(searchData)
        : setProductsVariants(searchData)
    );
  }, [productName]);

  const isCurrentDay =
    getDateInFormat(startDate) === getDateInFormat(new Date());

  const handleChange = ({ name, value }) => {
    name === "productName" && setProductName(value);
    name === "productWeight" && setProductWeight(value);
  };

  const handleSubmit = () => {
    const curProd = productsVariants.find(
      (prod) => prod.title.ru === productName
    );
    if (!curProd) {
      setErrorMsg(
        "Выбирети продукт из предложенного списка или введите заново"
      );
      return;
    }
    const productId = curProd._id;
    const weight = productWeight ? Math.round(productWeight) : 100;
    const date = getDateInFormat(startDate);
    dispatch(addEatenProduct({ date, productId, weight }));
  };

  const handleClick = (eatenProductId) =>
    dispatch(deleteProduct({ dayId, eatenProductId }));

  return (
    <>
      <DiaryPageStyled>
        <div className={"dataPicker__box"}>
          <DatePicker
            dateFormat="dd.MM.yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <svg className="dataPicker__svg" width="18" height="20">
            <use href={sprite + "#calendar"} />
          </svg>
        </div>

        {isCurrentDay && width > 767 && (
          <ProductForm
            productName={productName}
            productWeight={productWeight}
            productsVariants={productsVariants}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errorMsg={errorMsg}
          />
        )}
        <div className="diaryFlexBox">
          <EatenProductsList
            eatenProductsList={eatenProductsList}
            isCurrentDay={isCurrentDay}
            handleClick={handleClick}
          />
          {width < 768 && (
            <button type="button" onClick={onHandleCliсk}>
              "добавить" => openModal
            </button>
          )}
          <CalloriesText />
        </div>
      </DiaryPageStyled>

      {isModalOpen && (
        <Modal hideModal={onHandleCliсk} showModal={onHandleCliсk}>
          <ProductForm
            productName={productName}
            productWeight={productWeight}
            productsVariants={productsVariants}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errorMsg={errorMsg}
          />
        </Modal>
      )}
    </>
  );
};

export default DiaryPage;
