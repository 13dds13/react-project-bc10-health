import React from "react";
import { EatenProductsListStyles } from "../EatenProdustListStyles";
import sprite from "../../../images/sprite.svg";
import { useTranslation } from "react-i18next";

const EatenProductsListItem = ({ product, handleClick, isCurrentDay }) => {
  const onClick = () => handleClick(product.id);
  const { t } = useTranslation();
  return (
    <EatenProductsListStyles>
      <li className="EatenProductsList__item" key={product.id}>
        <p className="EatenProductsList__item_border EatenProductsList__item_widthTitle">{product.title}</p>
        <p className="EatenProductsList__item_border EatenProductsList__item_widthGramKcal">
          {/* {product.weight} г */}
          {product.weight} {t("EatenProductsListItem.item_1")}
        </p>
        {/* <p className="EatenProductsList__item_border EatenProductsList__item_widthGramKcal">{Math.round(product.kcal)} ккал</p> */}
        <p className="EatenProductsList__item_border EatenProductsList__item_widthGramKcal">{Math.round(product.kcal)} {t("EatenProductsListItem.item_2")}</p>
        {isCurrentDay && (
          <button className="EatenProductsList__item-button" type="button" onClick={onClick}>
            <svg width="12" height="12" fill="#9B9FAA">
              <use href={sprite + "#close"} />
            </svg>
          </button>
        )}
      </li>
    </EatenProductsListStyles>
  );
};

export default EatenProductsListItem;
