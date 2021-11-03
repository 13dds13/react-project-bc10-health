import * as yup from "yup";

export const validationsSchemaRegistrationRu = yup.object().shape({
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

export const validationsSchemaSignInRu = yup.object().shape({

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

export const validationsSchemaRegistrationEn = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .max(15)
    .typeError()
    .required(),

  email: yup
    .string()
    .email()
    .required(),

  password: yup
    .string()
    .min(6)
    .max(16)
    .typeError()
    .required(),
});

export const validationsSchemaSignInEn = yup.object().shape({

  email: yup
    .string()
    .email()
    .required(),

  password: yup
    .string()
    .min(6)
    .max(16)
    .typeError()
    .required(),
});

