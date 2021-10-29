import { createAction } from "@reduxjs/toolkit";

export const userDataRequest = createAction("user/userDataRequest");
export const userDataSuccess = createAction("user/userDataSuccess");
export const userDataError = createAction("user/userDataError");

export const userSummaryRequest = createAction("user/userSummaryRequest");
export const userSummarySuccess = createAction("user/userSummarySuccess");
export const userSummaryError = createAction("user/userSummaryError");

export const userDayInfoRequest = createAction("user/userDayInfoRequest");
export const userDayInfoSuccess = createAction("user/userDayInfoSuccess");
export const userDayInfoError = createAction("user/userDayInfoError");
