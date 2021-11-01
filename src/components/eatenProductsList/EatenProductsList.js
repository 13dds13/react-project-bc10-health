import React from "react";
import { EatenProductsListStyles } from "./EatenProdustListStyles";
import sprite from "../../images/sprite.svg";

const EatenProductsList = ({
  eatenProductsList,
  isCurrentDay,
  handleClick,
}) => {
  return (
    <EatenProductsListStyles>
      {!eatenProductsList.length && <p>За этот период данные отсутствуют.</p>}
      <ul className="EatenProductsList">
        {eatenProductsList[0] &&
          eatenProductsList.map((product) => (
            <li className="EatenProductsList__item" key={product.id}>
              <p className="EatenProductsList__item_border EatenProductsList__item_widthTitle">
                {product.title}
              </p>
              <p className="EatenProductsList__item_border EatenProductsList__item_widthGramKcal">
                Вес: {product.weight}
              </p>
              <p className="EatenProductsList__item_border EatenProductsList__item_widthGramKcal">
                Ккал: {Math.round(product.kcal)}
              </p>
              {isCurrentDay && (
                <button
                  className="EatenProductsList__item-button"
                  type="button"
                  onClick={() => handleClick(product.id)}
                >
                  <svg width="12" height="12" fill="#9B9FAA">
                    <use href={sprite + "#close"} />
                  </svg>
                </button>
              )}
            </li>
          ))}
      </ul>
    </EatenProductsListStyles>
  );
};

export default EatenProductsList;
