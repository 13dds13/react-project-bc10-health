import React from "react";
import PropTypes from "prop-types";
import { mainRoutes } from "../../routes/mainRoutes";
import { Formik } from "formik";
import { AuthFormStyled } from "./AuthTempForm.styled";
import {
  validationsSchemaRegistrationRu,
  validationsSchemaSignInRu,
  validationsSchemaRegistrationEn,
  validationsSchemaSignInEn
} from "./validationSchema";
import { Button } from "../button/Button";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const AuthForm = ({ handleSubmit, btnName, currenBtnName }) => {
  const history = useHistory();
  const { t } = useTranslation();
  const currentLanguage = useSelector(state => state.language.languages);

  return (
    <AuthFormStyled>
      <form className="registration-form">
        <h1 className="registration-form__title">{btnName}</h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: ""
          }}
          validateOnBlur
          onSubmit={values => {
            handleSubmit({
              username: values.name,
              email: values.email,
              password: values.password
            });
            // console.log(values);
          }}
          validationSchema={
            currentLanguage === "ru"
              ? btnName === mainRoutes[4][currenBtnName]
                ? validationsSchemaRegistrationRu
                : validationsSchemaSignInRu
              : btnName === mainRoutes[4][currenBtnName]
              ? validationsSchemaRegistrationEn
              : validationsSchemaSignInEn
          }
        >
          {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
            <div className="registration-form__input-wrapper">
              {btnName === mainRoutes[4][currenBtnName] && (
                <>
                  <div className="registration-form__sub-wrapper">
                    <label className="registration-form__label" htmlFor={`name`}>
                      {/* Имя * */}
                      {t("AuthTempForm.label_1")}
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

                    {touched.name && errors.name && <span className="registration-form__alert">{errors.name}</span>}
                  </div>
                  <hr className="registration-form__line" />{" "}
                </>
              )}

              <div className="registration-form__sub-wrapper">
                <label className="registration-form__label" htmlFor={`email`}>
                  {/* Email * */}
                  {t("AuthTempForm.label_3")}
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
                {touched.email && errors.email && <span className="registration-form__alert">{errors.email}</span>}
              </div>

              <hr className="registration-form__line" />

              <div className="registration-form__sub-wrapper">
                <label className="registration-form__label" htmlFor={`password`}>
                  {/* Пароль * */}
                  {t("AuthTempForm.label_2")}
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

                {touched.password && errors.password && <span className="registration-form__alert">{errors.password}</span>}
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

                {btnName === mainRoutes[3][currenBtnName] && (
                  <div className="registration-form__second-btn-wrapper">
                    <Button
                      isValid={true}
                      dirty={true}
                      onClick={() => {
                        let path = `/singup`;
                        history.push(path);
                      }}
                      type={`button`}
                      className="registration-form__second-btn"
                      // buttonName={`Регистрация`}
                      buttonName={mainRoutes[4][currenBtnName]}
                      btn_mod="btn_white"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </Formik>
      </form>
    </AuthFormStyled>
  );
};

AuthForm.propTypes = {
  handleSubmit: PropTypes.func,
  btnName: PropTypes.string
};

export default AuthForm;
