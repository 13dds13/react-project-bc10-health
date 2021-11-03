import * as yup from "yup";
// import { setLocale } from "yup";

// setLocale({
//   number: {
//     min: "Минимальное значение ${min}",
//     max: "Максимальное значение ${max}",
//   },
// });

export const validationsSchema = yup.object().shape({
  weight: yup
    .number()
    .min(20, "Минимальное значение 20")
    .max(500, "Максимальное значение 500")
    .typeError("Числовое значение от 20  до 500")
    .required("Обязательное поле"),

  height: yup
    .number()
    .min(100, "Минимальное значение 100")
    .max(250, "Максимальное значение 250")
    .typeError("Числовое значение от 100  до 250")
    .required("Обязательное поле"),

  age: yup
    .number()
    .min(18, "Минимальное значение 18")
    .max(100, "Максимальное значение 100")
    .typeError("Числовое значение от 18  до 100")
    .required("Обязательное поле"),

  desiredWeight: yup
    .number()
    .min(20, "Минимальное значение 20")
    .max(500, "Максимальное значение 500")
    .typeError("Числовое значение от 20  до 500")
    .required("Обязательное поле"),

  bloodType: yup.number().required(""),
});
