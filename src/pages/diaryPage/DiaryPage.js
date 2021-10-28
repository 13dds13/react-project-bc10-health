
import ProductForm from "../../components/productForm/ProductForm";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./react-datapicker.css"
import sprite from "../../images/sprite.svg";

const DiaryPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <h2>DiaryPage</h2>
      <div className={"dataPicker__box"}>
      <DatePicker dateFormat="dd.MM.yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
      <svg className="dataPicker__svg" width="18" height="20">
        <use href={sprite + "#calendar"}/>
      </svg>
   <ProductForm />
</div>
    </>
  );
};

export default DiaryPage;
