import React from "react";
import EatenProductsListItem from "./eatenProductsListItem/EatenProductsListItem";
import { EatenProductsListStyles } from "./EatenProdustListStyles";

const EatenProductsList = ({
  eatenProductsList,
  isCurrentDay,
  handleClick,
}) => {
  return (
    <EatenProductsListStyles>
      {!eatenProductsList.length && <p>За этот период данные отсутствуют.</p>}
      {eatenProductsList[0] && (
        <ul className="EatenProductsList">
          {eatenProductsList.map((product) => (
            <EatenProductsListItem
              product={product}
              handleClick={handleClick}
              isCurrentDay={isCurrentDay}
            />
          ))}
        </ul>
      )}
    </EatenProductsListStyles>
  );
};

export default EatenProductsList;
