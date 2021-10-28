import React from "react";
import { Field, Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { endpoint } from "../../db.json";
import { useSelector } from "react-redux";
import { getAccessToken } from "../../redux/auth/authSelectors";
// import { DailyCaloriesFormStyled } from "./DailyCaloriesForm.styled";

const ProductForm = () => {
  const token = useSelector(getAccessToken);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const validationsSchema = yup.object().shape({
    productName: yup
      .string()
      //   .typeError("Числовое значение от 100  до 250")
      .required("Обязательное поле"),

    productWeight: yup
      .number()
      .min(1)
      .typeError("Числовое значение должно быть больше 0")
      .required("Обязательное поле"),
  });

  return (
    // <DailyCaloriesFormStyled>
    <form className="dailyCalories-form">
      <Formik
        initialValues={{
          productWeight: "",
          productName: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationsSchema}
      >
        {({ values, errors, touched, isValid, handleSubmit }) => {
          values.productName &&
            values.productName.length > 1 &&
            axios(`/product?search=${values.productName}`)
              .then(console.log)
              .catch(console.log);
          return (
            <div className="dailyCalories-form__input-wrapper">
              {/* <div className="group">
              <div className="sub-group"> */}
              <div className="dailyCalories-form__sub-wrapper">
                <Field
                  type="text"
                  name="productName"
                  list="poductsList"
                  placeholder="Введите название продукта"
                />
                <datalist id={`poductsList`}>
                  <option value="Chocolate" />
                  <option value="Coconut" />
                  <option value="Mint" />
                  <option value="Strawberry" />
                  <option value="Vanilla" />
                </datalist>
                {touched.productName && errors.productName && (
                  <span className="dailyCalories-form__alert">
                    {errors.productName}
                  </span>
                )}
              </div>

              <div className="dailyCalories-form__sub-wrapper">
                <Field
                  type="number"
                  name="productWeight"
                  placeholder="Граммы"
                  autoComplete="off"
                />
                {touched.productWeight && errors.productWeight && (
                  <span className="dailyCalories-form__alert">
                    {errors.productWeight}
                  </span>
                )}
              </div>
              {/* </div>
            </div> */}
              <button
                disabled={!isValid}
                onClick={handleSubmit}
                type={`submit`}
                className="dailyCalories-form__btn"
              >
                +
              </button>
              <hr className="dailyCalories-form__line" />
            </div>
          );
        }}
      </Formik>
    </form>
    // </DailyCaloriesFormStyled>
  );
};

export default ProductForm;
