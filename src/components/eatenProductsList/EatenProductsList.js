import React from "react";
import EatenProductsListItem from "./eatenProductsListItem/EatenProductsListItem";
import { EatenProductsListStyles } from "./EatenProdustListStyles";
import { useTranslation } from "react-i18next";

const EatenProductsList = ({ eatenProductsList, isCurrentDay, handleClick }) => {
  const { t } = useTranslation();
  return (
    <EatenProductsListStyles>
      {/* {!eatenProductsList.length && <p>За этот период данные отсутствуют.</p>} */}
      {!eatenProductsList.length && <p>{t("EatenProductsList.text")}</p>}
      {eatenProductsList[0] && (
        <ul className="EatenProductsList">
          {eatenProductsList.map(product => (
            <EatenProductsListItem product={product} handleClick={handleClick} isCurrentDay={isCurrentDay} key={product.id} />
          ))}
        </ul>
      )}
    </EatenProductsListStyles>
  );
};

export default EatenProductsList;
