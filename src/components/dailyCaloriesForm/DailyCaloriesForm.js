import React, { useState } from "react";
import { Formik } from "formik";
// import * as yup from "yup";
// import { setLocale } from "yup";
import { DailyCaloriesFormStyled } from "./DailyCaloriesForm.styled";
import { Button } from "../button/Button";
import { useEffect } from "react";
import { validationsSchemaRu, validationsSchemaEn } from "./validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth, getUserId } from "../../redux/auth/authSelectors";
import getDailyRate from "../../services/getDailyRate";
import { dailyRateForAuthUser } from "../../redux/user/userOperations";
import { getIsOpenModal } from "../../redux/modal/modalSelectors";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18next";

const DailyCaloriesForm = ({ getCalloriesData, showModal, formikData }) => {
  const [data, setData] = useState({});
  const isAuth = useSelector(getIsAuth);
  const userId = useSelector(getUserId);
  const isOpenModal = useSelector(getIsOpenModal);
  const dispatch = useDispatch();


  const { t } = useTranslation();
  const currentLanguage = useSelector(state => state.language.languages);
  
  useEffect(
    () => {
      if (!data.weight) {
        return;
      }

      const preparedData = {
        weight: Number(data.weight),
        height: Number(data.height),
        age: Number(data.age),
        desiredWeight: Number(data.desiredWeight),
        bloodType: Number(data.bloodType)
      };

      !isAuth ? getDailyRate(getCalloriesData, preparedData) : dispatch(dailyRateForAuthUser(userId, preparedData));
    },
    [data, dispatch, getCalloriesData, isAuth, isOpenModal, userId]
  );

  return (
    <DailyCaloriesFormStyled>
      <form className="dailyCalories-form">
        <h1 className="dailyCalories-form__title">
          {/* {title} */}
          {/* Просчитай свою суточную норму калорий прямо сейчас */}
          {t("dailyCaloriesForm.title")}
        </h1>
        <Formik
          initialValues={
            formikData || {
              weight: "",
              height: "",
              age: "",
              desiredWeight: "",
              bloodType: "1"
            }
          }
          validateOnBlur
          onSubmit={values => {
            showModal();
            setData(values);
          }}

          validationSchema={currentLanguage === "ru" ? validationsSchemaRu : validationsSchemaEn}
        >
          {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, setFieldValue }) => (
            <div className="dailyCalories-form__input-wrapper">
              <div className="group">
                <div className="sub-group">
                  <div className="dailyCalories-form__sub-wrapper">
                    <label className="dailyCalories-form__label" htmlFor={`height`}>
                      {/* Рост, см * */}
                      {t("dailyCaloriesForm.label_1")}
                    </label>

                    <input
                      id={`height`}
                      // type={`number`}
                      name={`height`}
                      onChange={e => {
                        e.preventDefault();
                        const { value } = e.target;
                        const regex = /^[0-9]*$/;
                        if (regex.test(value.toString())) {
                          setFieldValue("height", value);
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.height}
                      className="dailyCalories-form__input"
                      placeholder=" "
                      autoComplete="off"
                    />

                    {touched.height && errors.height && <span className="dailyCalories-form__alert">{errors.height}</span>}
                  </div>

                  <hr className="dailyCalories-form__line" />

                  <div className="dailyCalories-form__sub-wrapper">
                    <label className="dailyCalories-form__label" htmlFor={`age`}>
                      {/* Возраст, лет * */}
                      {t("dailyCaloriesForm.label_2")}
                    </label>

                    <input
                      id={`age`}
                      // type={`number`}
                      name={`age`}
                      onChange={e => {
                        e.preventDefault();
                        const { value } = e.target;
                        const regex = /^[0-9]*$/;
                        if (regex.test(value.toString())) {
                          setFieldValue("age", value);
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.age}
                      className="dailyCalories-form__input"
                      placeholder=" "
                      autoComplete="off"
                    />
                    {touched.age && errors.age && <span className="dailyCalories-form__alert">{errors.age}</span>}
                  </div>

                  <hr className="dailyCalories-form__line" />

                  <div className="dailyCalories-form__sub-wrapper">
                    <label className="dailyCalories-form__label" htmlFor={`weight`}>
                      {/* Текущий вес, кг * */}
                      {t("dailyCaloriesForm.label_3")}
                    </label>

                    <input
                      id={`weight`}
                      // type={`number`}
                      name={`weight`}
                      onChange={e => {
                        e.preventDefault();
                        const { value } = e.target;
                        const regex = /^[0-9]*$/;
                        if (regex.test(value.toString())) {
                          setFieldValue("weight", value);
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.weight}
                      className="dailyCalories-form__input"
                      placeholder=" "
                      autoComplete="off"
                    />

                    {touched.weight && errors.weight && <span className="dailyCalories-form__alert">{errors.weight}</span>}
                  </div>

                  <hr className="dailyCalories-form__line" />
                </div>
                <div className="sub-group">
                  <div className="dailyCalories-form__sub-wrapper">
                    <label className="dailyCalories-form__label" htmlFor={`desiredWeight`}>
                      {/* Желаемый вес, кг * */}
                      {t("dailyCaloriesForm.label_4")}
                    </label>

                    <input
                      id={`desiredWeight`}
                      // type={`number`}
                      name={`desiredWeight`}
                      onChange={e => {
                        e.preventDefault();
                        const { value } = e.target;
                        const regex = /^[0-9]*$/;
                        if (regex.test(value.toString())) {
                          setFieldValue("desiredWeight", value);
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.desiredWeight}
                      className="dailyCalories-form__input"
                      placeholder=" "
                      autoComplete="off"
                    />

                    {touched.desiredWeight && errors.desiredWeight && (
                      <span className="dailyCalories-form__alert">{errors.desiredWeight}</span>
                    )}
                  </div>

                  <hr className="dailyCalories-form__line" />

                  <div className="dailyCalories-form__radio-form-wrapper">
                    <label className="dailyCalories-form__radio-label" htmlFor={`bloodType`}>
                      {/* Группа крови * */}
                      {t("dailyCaloriesForm.label_5")}
                    </label>

                    <div className="dailyCalories-form__radio-input-wrapper">
                      <label className="dailyCalories-form__blood-selector-label" htmlFor="blood-1">
                        <input
                          id="blood-1"
                          type={`radio`}
                          name={`bloodType`}
                          onChange={handleChange}
                          // onBlur={handleBlur}
                          value={1}
                          className="dailyCalories-form__blood-selector"
                          checked={values.bloodType === "1" || values.bloodType === 1}
                        />
                        <span className="dailyCalories-form__blood-selector-name">1</span>
                      </label>
                    </div>

                    <div className="dailyCalories-form__radio-input-wrapper">
                      <label className="dailyCalories-form__blood-selector-label" htmlFor="blood-2">
                        <input
                          id="blood-2"
                          type={`radio`}
                          name={`bloodType`}
                          onChange={handleChange}
                          // onBlur={handleBlur}
                          value={2}
                          className="dailyCalories-form__blood-selector"
                          checked={values.bloodType === "2" || values.bloodType === 2}
                        />
                        <span className="dailyCalories-form__blood-selector-name">2</span>
                      </label>
                    </div>

                    <div className="dailyCalories-form__radio-input-wrapper">
                      <label className="dailyCalories-form__blood-selector-label" htmlFor="blood-3">
                        <input
                          id="blood-3"
                          type={`radio`}
                          name={`bloodType`}
                          onChange={handleChange}
                          // onBlur={handleBlur}
                          value={3}
                          className="dailyCalories-form__blood-selector"
                          checked={values.bloodType === "3" || values.bloodType === 3}
                        />
                        <span className="dailyCalories-form__blood-selector-name">3</span>
                      </label>
                    </div>

                    <div className="dailyCalories-form__radio-input-wrapper">
                      <label className="dailyCalories-form__blood-selector-label" htmlFor="blood-4">
                        <input
                          id="blood-4"
                          type={`radio`}
                          name={`bloodType`}
                          onChange={handleChange}
                          // onBlur={handleBlur}
                          value={4}
                          className="dailyCalories-form__blood-selector"
                          checked={values.bloodType === "4" || values.bloodType === 4}
                        />
                        <span className="dailyCalories-form__blood-selector-name">4</span>
                      </label>
                    </div>
                  </div>
                </div>
                {errors.bloodType && <p>{errors.bloodType}</p>}
              </div>
              <div className="dailyCalories-form__btn-wrapper">
                <Button
                  // buttonName="Похудеть"
                  buttonName={t("dailyCaloriesForm.btn_name")}
                  isValid={isValid}
                  dirty={dirty}
                  onClick={handleSubmit}
                  type={`submit`}
                  // showModal={showModal}
                />
              </div>
            </div>
          )}
        </Formik>
      </form>
    </DailyCaloriesFormStyled>
  );
};

export default DailyCaloriesForm;
