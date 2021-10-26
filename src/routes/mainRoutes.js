import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/homePage" /* webpackChunkName:"HomePage" */)
    ),
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "Diary",
    path: "/diary",
    exact: true,
    component: lazy(() =>
      import("../pages/diaryPage" /* webpackChunkName:"DiaryPage" */)
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "Сalculator",
    path: "/calculator",
    exact: true,
    component: lazy(() =>
      import("../pages/calculatorPage" /* webpackChunkName:"CalculatorPage" */)
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "Sing in",
    path: "/singin",
    exact: true,
    component: lazy(() =>
      import("../pages/authPage" /* webpackChunkName:"AuthPage" */)
    ),
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "Sing up",
    path: "/singup",
    exact: true,
    component: lazy(() =>
      import("../pages/authPage" /* webpackChunkName:"AuthPage" */)
    ),
    isPrivate: false,
    isRestricted: true,
  },
];
