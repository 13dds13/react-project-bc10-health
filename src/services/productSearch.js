import axios from "axios";
import { endpoint } from "../db.json";

const productSearch = async (productName) => {
  try {
    const { data } = await axios(`${endpoint.productSearch}${productName}`);
    const variantsList = data.slice(0, 20);
    return variantsList;
  } catch (error) {
    const msg =
      error.response.status === 400
        ? "Такого продукта в базе нет"
        : "Ой! Что-то пошло не так :(";
    return msg;
  }
};

export default productSearch;
