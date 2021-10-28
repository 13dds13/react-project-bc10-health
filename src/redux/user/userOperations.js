import axios from "axios";
import { userStatError, userStatRequest, userStatSuccess } from "./userActions";
import { endpoint } from "../../db.json";
import { refreshAuthSuccess } from "../auth/authActions";

export const getUserStat = () => async (dispatch) => {
  try {
    dispatch(userStatRequest());
    const { data } = await axios(endpoint.user);
    const { email: userEmail, username, id, userData } = data;
    const authData = { userEmail, username, id };
    dispatch(refreshAuthSuccess(authData));
    dispatch(userStatSuccess(userData));
  } catch (error) {
    dispatch(userStatError(error.response.data.message));
  }
};
