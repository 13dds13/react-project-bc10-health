import { lazy } from "react";

export const mainRoutes = [
  {
    // name: "Home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/homePage" /* webpackChunkName:"HomePage" */)
    ),
    isPrivate: false,
    isRestricted: false,
  },
  {
    // name: "Дневник",
    name_ru: "Дневник",
    name_en: 'Diary',
    path: "/diary",
    exact: true,
    component: lazy(() =>
      import("../pages/diaryPage" /* webpackChunkName:"DiaryPage" */)
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    // name: "Калькулятор",
    name_ru: "Калькулятор",
    name_en: "Calculator",
    path: "/calculator",
    exact: true,
    component: lazy(() =>
      import("../pages/calculatorPage" /* webpackChunkName:"CalculatorPage" */)
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    // name: "Вход",
    name_ru: "Вход",
    name_en: "Log in",
    path: "/singin",
    exact: true,
    component: lazy(() =>
      import("../pages/authPage" /* webpackChunkName:"AuthPage" */)
    ),
    isPrivate: false,
    isRestricted: true,
  },
  {
    // name: "Регистрация",
    name_ru: "Регистрация",
    name_en: "Sing up",
    path: "/singup",
    exact: true,
    component: lazy(() =>
      import("../pages/authPage" /* webpackChunkName:"AuthPage" */)
    ),
    isPrivate: false,
    isRestricted: true,
  },
];
