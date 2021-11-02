import axios from "axios";
import { endpoint } from "../db.json";

const productSearch = async (productName) => {
  let correctProdName = productName;
  if (productName.includes("%")) {
    correctProdName = productName.slice(0, productName.length - 1);
  }

  if (productName.includes("(") && productName.includes(")")) {
    correctProdName = productName.slice(
      productName.indexOf("(") + 1,
      productName.indexOf(")")
    );
  }
  try {
    const { data } = await axios(`${endpoint.productSearch}${correctProdName}`);
    const variantsList = data.slice(0, 20);
    return variantsList;
  } catch (error) {
    const msg =
      error.response.status === 400
        ? "Такого продукта в базе нет"
        : "Недопустимое название продукта, введите другое значение.";
    return msg;
  }
};

export default productSearch;
