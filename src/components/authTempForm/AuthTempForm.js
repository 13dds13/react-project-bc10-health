import React from "react";
import PropTypes from "prop-types";
import { mainRoutes } from "../../routes/mainRoutes";
import { Formik } from "formik";
import { RegistrationFormStyled } from "./RegistrationForm.styled";
import {
  validationsSchemaRegistration,
  validationsSchemaSignIn,
} from "./validationSchema";
import { Button } from "../button/Button";

const AuthForm = ({ handleSubmit, btnName }) => {
  return (
    <RegistrationFormStyled>
      <form className="registration-form">
        <h1 className="registration-form__title">{btnName}</h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validateOnBlur
          onSubmit={(values) => {
            handleSubmit({
              username: values.name,
              email: values.email,
              password: values.password,
            });
            console.log(values);
          }}
          validationSchema={
            btnName === mainRoutes[4].name
              ? validationsSchemaRegistration
              : validationsSchemaSignIn
          }
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
              {btnName === mainRoutes[4].name && (
                <>
                  <div className="registration-form__sub-wrapper">
                    <label
                      className="registration-form__label"
                      htmlFor={`name`}
                    >
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
                  <hr className="registration-form__line" />{" "}
                </>
              )}

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
              <div className="registration-form__btn-wrapper">
                <Button
                  isValid={isValid}
                  dirty={dirty}
                  onClick={handleSubmit}
                  type={`submit`}
                  className="registration-form__btn"
                  buttonName={btnName}
                />

                {btnName === mainRoutes[3].name && (
                  <div className="registration-form__second-btn-wrapper">
                    <Button
                      isValid={isValid}
                      dirty={dirty}
                      onClick={handleSubmit}
                      type={`submit`}
                      className="registration-form__second-btn"
                      buttonName={`Регистрация`}
                      btn_mod="btn_white"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </Formik>
      </form>
    </RegistrationFormStyled>
  );
};

AuthForm.propTypes = {
  handleSubmit: PropTypes.func,
  btnName: PropTypes.string,
};

export default AuthForm;
