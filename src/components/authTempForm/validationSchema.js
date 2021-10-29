import * as yup from "yup";

export const validationsSchema = yup.object().shape({
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
