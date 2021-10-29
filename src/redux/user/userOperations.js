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
      weigth,
      height,
      age,
      bloodType,
      desiredWeight,
      dailyRate,
    } = userData;
    const notAllowedProducts = needToPrepare.slice(0, 10);
    const preparedUserData = {
      notAllowedProducts,
      userStat: { weigth, height, age, bloodType, desiredWeight, dailyRate },
    };
    dispatch(refreshAuthSuccess(authData));
    dispatch(userDataSuccess(preparedUserData));
  } catch (error) {
    dispatch(userDataError(error.response.data.message));
  }
};

export const addEatenProduct = (dataToPost) => async (dispatch) => {
  try {
    dispatch(userSummaryRequest());
    const { data } = await axios.post(
      endpoint.postOrDeleteEatenProduct,
      dataToPost
    );
    const { daySummary } = data;
    dispatch(userSummarySuccess(daySummary));
  } catch (error) {
    dispatch(userSummaryError(error.response.data.message));
  }
};

export const getDayInfo = (date) => async (dispatch) => {
  try {
    dispatch(userDayInfoRequest());
    const { data } = await axios.post(endpoint.dayInfo, { date });
    const { daySummary, eatenProducts = [] } = data;
    if (!daySummary) {
      dispatch(userSummarySuccess({ ...data }));
      dispatch(userDayInfoSuccess(eatenProducts));
      return;
    }
    dispatch(userSummarySuccess({ ...daySummary, dayId: data.id }));
    dispatch(userDayInfoSuccess(eatenProducts));
  } catch (error) {
    dispatch(userDayInfoError(error.response.data.message));
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
    dispatch(userDayInfoError(error.response.data.message));
  }
};
