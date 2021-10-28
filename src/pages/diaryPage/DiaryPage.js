import ProductForm from "../../components/productForm/ProductForm";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./react-datapicker.css";
import sprite from "../../images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { setDiaryValue } from "../../redux/isOpenModalForDiaryMobilePage/diaryModalAction";
import Modal from "../../components/modal";

const DiaryPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  const isModalOpen = useSelector((state) => state.diaryModal.isOpenModal);

  const dispatch = useDispatch();
  const onHandleCliсk = () => dispatch(setDiaryValue());
  return (
    <>
      <h2>DiaryPage</h2>
      <div className={"dataPicker__box"}>
        <DatePicker
          dateFormat="dd.MM.yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <svg className="dataPicker__svg" width="18" height="20">
          <use href={sprite + "#calendar"} />
        </svg>
        <ProductForm />

        <button type="button" onClick={onHandleCliсk}>
          openModal
        </button>
        {isModalOpen && (
          <Modal hideModal={onHandleCliсk}>
            <h2>тут форма</h2>
          </Modal>
        )}
      </div>
    </>
  );
};

export default DiaryPage;
