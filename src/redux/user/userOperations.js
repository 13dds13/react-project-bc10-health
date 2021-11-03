import axios from "axios";
import {
  userDataError,
  userDataRequest,
  userDataSuccess,
  userDayInfoError,
  userDayInfoRequest,
  userDayInfoSuccess,
  userSummaryError,
  userSummaryRequest,
  userSummarySuccess,
} from "./userActions";
import { endpoint } from "../../db.json";
import { refreshAuthSuccess } from "../auth/authActions";

export const getUserData = () => async (dispatch) => {
  try {
    dispatch(userDataRequest());
    const { data } = await axios(endpoint.user);
    const { email: userEmail, username, id, userData } = data;
    const authData = { userEmail, username, id };
    const {
      notAllowedProducts: needToPrepare,
      weight,
      height,
      age,
      bloodType,
      desiredWeight,
      dailyRate,
    } = userData;
    const notAllowedProducts = needToPrepare.slice(0, 5);
    const preparedUserData = {
      notAllowedProducts,
      userStat: { weight, height, age, bloodType, desiredWeight, dailyRate },
    };
    dispatch(refreshAuthSuccess(authData));
    dispatch(userDataSuccess(preparedUserData));
  } catch (error) {
    dispatch(userDataError(error?.response?.data?.message));
  }
};

export const getDayInfo = (date) => async (dispatch) => {
  try {
    dispatch(userDayInfoRequest());
    const { data } = await axios.post(endpoint.dayInfo, { date });
    const { daySummary, eatenProducts = [] } = data;
    if (!daySummary) {
      dispatch(userSummarySuccess({ ...data, date }));
      dispatch(userDayInfoSuccess(eatenProducts));
      return;
    }
    dispatch(userSummarySuccess({ ...daySummary, dayId: data.id }));
    dispatch(userDayInfoSuccess(eatenProducts));
  } catch (error) {
    dispatch(userDayInfoError(error?.response?.data?.message));
  }
};

export const addEatenProduct = (dataToPost) => async (dispatch) => {
  try {
    dispatch(userSummaryRequest());
    const { data } = await axios.post(
      endpoint.postOrDeleteEatenProduct,
      dataToPost
    );
    if (data?.day) {
      dispatch(userSummarySuccess(data.daySummary));
      dispatch(userDayInfoSuccess(data.eatenProducts));
      return;
    }
    if (data?.newDay) {
      dispatch(userSummarySuccess(data.newSummary));
      dispatch(userDayInfoSuccess([data.eatenProduct]));
    }
  } catch (error) {
    dispatch(userSummaryError(error?.response?.data?.message));
  }
};

export const deleteProduct = (dataToDelete) => async (dispatch) => {
  try {
    dispatch(userDayInfoRequest());
    const { data } = await axios.delete(endpoint.postOrDeleteEatenProduct, {
      data: dataToDelete,
    });
    const daySummary = data.newDaySummary;
    dispatch(userSummarySuccess(daySummary));
  } catch (error) {
    dispatch(userDayInfoError(error?.response?.data?.message));
  }
};

export const dailyRateForAuthUser =
  (usersId, preparedData) => async (dispatch) => {
    try {
      dispatch(userDayInfoRequest());
      await axios.post(`${endpoint.dailyRate}/${usersId}`, preparedData);
      dispatch(getUserData());
      // const {
      //   dailyRate,
      //   date,
      //   kcalConsumed,
      //   kcalLeft,
      //   percentsOfDailyRate,
      //   userId,
      //   _id: id,
      // } = data;
      // const daySummary = {
      //   dailyRate,
      //   date,
      //   kcalConsumed,
      //   kcalLeft,
      //   percentsOfDailyRate,
      //   userId,
      //   id,
      // };
      // const notAllowedProducts = data.notAllowedProducts.slice(0, 5);
      // dispatch(userSummarySuccess(daySummary));
      // dispatch(userDataSuccess({ notAllowedProducts }));
    } catch (error) {
      dispatch(userDayInfoError(error?.response?.data?.message));
    }
  };
