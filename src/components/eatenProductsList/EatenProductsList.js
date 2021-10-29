import React from "react";

const EatenProductsList = ({
  eatenProductsList,
  isCurrentDay,
  handleClick,
}) => {
  return (
    <>
      {!eatenProductsList.length && <p>За данный день данные отсутствуют</p>}
      <ul>
        {eatenProductsList.map((product) => (
          <li key={product.id}>
            <p>{product.title}</p>
            {isCurrentDay && (
              <button type="button" onClick={() => handleClick(product.id)}>
                x
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default EatenProductsList;
