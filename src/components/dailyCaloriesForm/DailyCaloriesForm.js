import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { setLocale } from "yup";

const DailyCaloriesForm = () => {
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
      .typeError("Должно быть числовое значение от 20  до 500")
      .required("Обязательное поле"),

    height: yup
      .number()
      .min(100)
      .max(250)
      .typeError("Должно быть числовое значение от 100  до 250")
      .required("Обязательное поле"),

    age: yup
      .number()
      .min(18)
      .max(100)
      .typeError("Должно быть числовое значение от 18  до 100")
      .required("Обязательное поле"),

    desiredWeight: yup
      .number()
      .min(20)
      .max(500)
      .typeError("Должно быть числовое значение от 20  до 500")
      .required("Обязательное поле"),

    bloodType: yup.number().required(""),
  });

  return (
    <form>
      <h1>Просчитай свою суточную норму калорий прямо сейчас</h1>
      <Formik
        initialValues={{
          weight: "",
          height: "",
          age: "",
          desiredWeight: "",
          bloodType: "",
        }}
        validateOnBlur
        onSubmit={(values) => console.log(values)}
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
          <div>
            <p>
              <label htmlFor={`height`}>Рост, см *</label>
              <input
                // type={`number`}
                name={`height`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.height}
                className={`input`}
                placeholder=" "
                autoComplete="off"
              />
            </p>
            {touched.height && errors.height && <p>{errors.height}</p>}

            <p>
              <label htmlFor={`age`}>Возраст, лет *</label>
              <input
                // type={`number`}
                name={`age`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
                className={`input`}
                placeholder=" "
                autoComplete="off"
              />
            </p>
            {touched.age && errors.age && <p>{errors.age}</p>}

            <p>
              <label htmlFor={`weight`}>Текущий вес, кг *</label>
              <input
                // type={`number`}
                name={`weight`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.weight}
                className={`input`}
                placeholder=" "
                autoComplete="off"
              />
            </p>
            {touched.weight && errors.weight && <p>{errors.weight}</p>}

            <p>
              <label htmlFor={`desiredWeight`}>Желаемый вес, кг *</label>
              <input
                // type={`number`}
                name={`desiredWeight`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.desiredWeight}
                className={`input`}
                placeholder=" "
                autoComplete="off"
              />
            </p>
            {touched.desiredWeight && errors.desiredWeight && (
              <p>{errors.desiredWeight}</p>
            )}

            <p>
              <label htmlFor={`bloodType`}>Группа крови *</label>
              <input
                type={`radio`}
                name={`bloodType`}
                onChange={handleChange}
                // onBlur={handleBlur}
                value={1}
                className={`bloodSelector`}
                // checked
              />
              1
              <input
                type={`radio`}
                name={`bloodType`}
                onChange={handleChange}
                // onBlur={handleBlur}
                value={2}
                className={`bloodSelector`}
              />
              2
              <input
                type={`radio`}
                name={`bloodType`}
                onChange={handleChange}
                // onBlur={handleBlur}
                value={3}
                className={`bloodSelector`}
              />
              3
              <input
                type={`radio`}
                name={`bloodType`}
                onChange={handleChange}
                // onBlur={handleBlur}
                value={4}
                className={`bloodSelector`}
              />
              4
            </p>
            {errors.bloodType && <p>{errors.bloodType}</p>}

            <button disabled={!isValid} onClick={handleSubmit} type={`submit`}>
              Похудеть
            </button>
          </div>
        )}
      </Formik>
    </form>
  );
};

export default DailyCaloriesForm;
