import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { RegistrationFormStyled } from "./RegistrationForm.styled";

const RegistrationForm = ({ title = "Регистрация" }) => {
  const validationsSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Минимум 3 символа")
      .max(15, "Максимум 15 символов")
      .typeError("Должно быть строкой")
      .required("Обязательное поле"),

    email: yup
      .string()
      .email("Введите верный email")
      .required("Обязательное поле"),

    password: yup
      .string()
      .min(6, "Минимум 6 символов")
      .max(16, "Максимум 16 символов")
      .typeError("Должно быть строкой")
      .required("Обязательное поле"),
  });

  return (
    <RegistrationFormStyled>
      <form className="registration-form">
        <h1 className="registration-form__title">
          {title}
          {/* Просчитай свою суточную норму калорий прямо сейчас */}
        </h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validateOnBlur
          onSubmit={(values, actions) => {
            console.log(values);
            actions.resetForm();
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
            <div className="registration-form__input-wrapper">
              <div className="registration-form__sub-wrapper">
                <label className="registration-form__label" htmlFor={`name`}>
                  Имя *
                </label>

                <input
                  id={`name`}
                  type={`text`}
                  name={`name`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className="registration-form__input"
                  placeholder=" "
                  autoComplete="off"
                />

                {touched.name && errors.name && (
                  <span className="registration-form__alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <hr className="registration-form__line" />

              <div className="registration-form__sub-wrapper">
                <label className="registration-form__label" htmlFor={`email`}>
                  Email *
                </label>

                <input
                  id={`email`}
                  type={`email`}
                  name={`email`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="registration-form__input"
                  placeholder=" "
                  autoComplete="off"
                />
                {touched.email && errors.email && (
                  <span className="registration-form__alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <hr className="registration-form__line" />

              <div className="registration-form__sub-wrapper">
                <label
                  className="registration-form__label"
                  htmlFor={`password`}
                >
                  Пароль *
                </label>

                <input
                  id={`password`}
                  type={`password`}
                  name={`password`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="registration-form__input"
                  placeholder=" "
                  autoComplete="off"
                />

                {touched.password && errors.password && (
                  <span className="registration-form__alert">
                    {errors.password}
                  </span>
                )}
              </div>

              <hr className="registration-form__line" />

              <button
                disabled={!isValid}
                onClick={handleSubmit}
                type={`submit`}
                className="registration-form__btn"
              >
                Регистрация
              </button>
            </div>
          )}
        </Formik>
      </form>
    </RegistrationFormStyled>
  );
};

export default RegistrationForm;
