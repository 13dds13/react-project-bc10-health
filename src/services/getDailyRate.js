import axios from "axios";
import { endpoint } from "../db.json";

const getDailyRate = async (cb, dataToPost) => {
  try {
    const { data } = await axios.post(endpoint.dailyRate, dataToPost);
    const readyObj = {
      dailyRate: data.dailyRate,
      notAllowedProducts: data.notAllowedProducts.slice(0, 5),
    };
    cb(readyObj);
  } catch (error) {
    console.log(error);
  }
};

export default getDailyRate;
