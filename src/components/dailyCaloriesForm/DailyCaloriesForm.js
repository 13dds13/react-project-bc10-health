import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { setLocale } from "yup";
import { DailyCaloriesFormStyled } from "./DailyCaloriesForm.styled";
import axios from "axios";
import { Button } from "../button/Button";

const DailyCaloriesForm = ({ getCalloriesData, showModal }) => {
  setLocale({
    number: {
      min: "Минимальное значение ${min}",
      max: "Максимальное значение ${max}",
    },
  });

  const validationsSchema = yup.object().shape({
    weight: yup
      .number()
      .min(20)
      .max(500)
      .typeError("Числовое значение от 20  до 500")
      .required("Обязательное поле"),

    height: yup
      .number()
      .min(100)
      .max(250)
      .typeError("Числовое значение от 100  до 250")
      .required("Обязательное поле"),

    age: yup
      .number()
      .min(18)
      .max(100)
      .typeError("Числовое значение от 18  до 100")
      .required("Обязательное поле"),

    desiredWeight: yup
      .number()
      .min(20)
      .max(500)
      .typeError("Числовое значение от 20  до 500")
      .required("Обязательное поле"),

    bloodType: yup.number().required(""),
  });

  // let checked = true;
  return (
    <DailyCaloriesFormStyled>
      <form className="dailyCalories-form">
        <h1 className="dailyCalories-form__title">
          {/* {title} */}
          Просчитай свою суточную норму калорий прямо сейчас
        </h1>
        <Formik
          initialValues={{
            weight: "",
            height: "",
            age: "",
            desiredWeight: "",
            bloodType: "",
          }}
          validateOnBlur
          onSubmit={(values) => {
            const preparedData = {
              weight: Number(values.weight),
              height: Number(values.height),
              age: Number(values.age),
              desiredWeight: Number(values.desiredWeight),
              bloodType: Number(values.bloodType),
            };
            axios
              .post("/daily-rate", preparedData)
              .then(({ data }) => {
                const readyObj = {
                  dailyRate: data.dailyRate,
                  notAllowedProducts: data.notAllowedProducts.slice(0, 5),
                };
                getCalloriesData(readyObj);
                // actions.resetForm();
              })
              .catch((error) => console.log(error));
          }}
          validationSchema={validationsSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <div className="dailyCalories-form__input-wrapper">
              <div className="group">
                <div className="sub-group">
                  <div className="dailyCalories-form__sub-wrapper">
                    <label
                      className="dailyCalories-form__label"
                      htmlFor={`height`}
                    >
                      Рост, см *
                    </label>

                    <input
                      id={`height`}
                      // type={`number`}
                      name={`height`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.height}
                      className="dailyCalories-form__input"
                      placeholder=" "
                      autoComplete="off"
                    />

                    {touched.height && errors.height && (
                      <span className="dailyCalories-form__alert">
                        {errors.height}
                      </span>
                    )}
                  </div>

                  <hr className="dailyCalories-form__line" />

                  <div className="dailyCalories-form__sub-wrapper">
                    <label
                      className="dailyCalories-form__label"
                      htmlFor={`age`}
                    >
                      Возраст, лет *
                    </label>

                    <input
                      id={`age`}
                      // type={`number`}
                      name={`age`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.age}
                      className="dailyCalories-form__input"
                      placeholder=" "
                      autoComplete="off"
                    />
                    {touched.age && errors.age && (
                      <span className="dailyCalories-form__alert">
                        {errors.age}
                      </span>
                    )}
                  </div>

                  <hr className="dailyCalories-form__line" />

                  <div className="dailyCalories-form__sub-wrapper">
                    <label
                      className="dailyCalories-form__label"
                      htmlFor={`weight`}
                    >
                      Текущий вес, кг *
                    </label>

                    <input
                      id={`weight`}
                      // type={`number`}
                      name={`weight`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.weight}
                      className="dailyCalories-form__input"
                      placeholder=" "
                      autoComplete="off"
                    />

                    {touched.weight && errors.weight && (
                      <span className="dailyCalories-form__alert">
                        {errors.weight}
                      </span>
                    )}
                  </div>

                  <hr className="dailyCalories-form__line" />
                </div>
                <div className="sub-group">
                  <div className="dailyCalories-form__sub-wrapper">
                    <label
                      className="dailyCalories-form__label"
                      htmlFor={`desiredWeight`}
                    >
                      Желаемый вес, кг *
                    </label>

                    <input
                      id={`desiredWeight`}
                      // type={`number`}
                      name={`desiredWeight`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.desiredWeight}
                      className="dailyCalories-form__input"
                      placeholder=" "
                      autoComplete="off"
                    />

                    {touched.desiredWeight && errors.desiredWeight && (
                      <span className="dailyCalories-form__alert">
                        {errors.desiredWeight}
                      </span>
                    )}
                  </div>

                  <hr className="dailyCalories-form__line" />

                  <div>
                    <label
                      className="dailyCalories-form__radio-label"
                      htmlFor={`bloodType`}
                    >
                      Группа крови *
                    </label>

                    <div className="dailyCalories-form__radio-input-wrapper">
                      <input
                        id="blood-1"
                        type={`radio`}
                        name={`bloodType`}
                        onChange={handleChange}
                        // onBlur={handleBlur}
                        value={1}
                        className="dailyCalories-form__blood-selector"
                        // checked={checked ? false : true}
                      />
                      <label
                        className="dailyCalories-form__blood-selector-label"
                        htmlFor="blood-1"
                      >
                        1
                      </label>
                    </div>

                    <div className="dailyCalories-form__radio-input-wrapper">
                      <input
                        id="blood-2"
                        type={`radio`}
                        name={`bloodType`}
                        onChange={handleChange}
                        // onBlur={handleBlur}
                        value={2}
                        className="dailyCalories-form__blood-selector"
                      />
                      <label
                        className="dailyCalories-form__blood-selector-label"
                        htmlFor="blood-2"
                      >
                        2
                      </label>
                    </div>

                    <div className="dailyCalories-form__radio-input-wrapper">
                      <input
                        id="blood-3"
                        type={`radio`}
                        name={`bloodType`}
                        onChange={handleChange}
                        // onBlur={handleBlur}
                        value={3}
                        className="dailyCalories-form__blood-selector"
                      />
                      <label
                        className="dailyCalories-form__blood-selector-label"
                        htmlFor="blood-3"
                      >
                        3
                      </label>
                    </div>

                    <div className="dailyCalories-form__radio-input-wrapper">
                      <input
                        id="blood-4"
                        type={`radio`}
                        name={`bloodType`}
                        onChange={handleChange}
                        // onBlur={handleBlur}
                        value={4}
                        className="dailyCalories-form__blood-selector"
                      />
                      <label
                        className="dailyCalories-form__blood-selector-label"
                        htmlFor="blood-4"
                      >
                        4
                      </label>
                    </div>
                  </div>
                </div>
                {errors.bloodType && <p>{errors.bloodType}</p>}
              </div>
              <Button
                buttonName="Похудеть"
                disabled={isValid}
                onClick={handleSubmit}
                type={`submit`}
                showModal={showModal}
              />
              {/* </div> */}
              {/* <button
                disabled={!isValid}
                onClick={handleSubmit}
                type={`submit`}
                className="dailyCalories-form__btn"
              >
                Похудеть
              </button> */}
            </div>
          )}
        </Formik>
      </form>
    </DailyCaloriesFormStyled>
  );
};

export default DailyCaloriesForm;
