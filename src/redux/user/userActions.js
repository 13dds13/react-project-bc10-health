import { createAction } from "@reduxjs/toolkit";

export const userStatRequest = createAction("user/userStatRequest");
export const userStatSuccess = createAction("user/userStatSuccess");
export const userStatError = createAction("user/userStatError");
