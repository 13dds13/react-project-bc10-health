import React from "react";
import { EatenProductsListStyles } from "./EatenProdustListStyles";
import sprite from "../../images/sprite.svg";

const EatenProductsList = ({
  eatenProductsList,
  isCurrentDay,
  handleClick,
}) => {
  console.log(typeof []);
  return (
    <>
//       {!eatenProductsList.length ? (
//         <p>За данный день данные отсутствуют</p>
//       ) : (
//         <ul>
//           {eatenProductsList[0] &&
//             eatenProductsList.map((product) => (
//               <li key={product.id}>
//                 <p>{product.title}</p>
//                 {isCurrentDay && (
//                   <button type="button" onClick={() => handleClick(product.id)}>
//                     x
//                   </button>
//                 )}
//               </li>
//             ))}

      <EatenProductsListStyles>
        {!eatenProductsList.length && <p>За данный день данные отсутствуют</p>}
      <ul className="EatenProductsList">
        {eatenProductsList.map((product) => (
          <li className="EatenProductsList__item" key={product.id}>
            <p className="EatenProductsList__item_border EatenProductsList__item_widthTitle">{product.title}</p>
            <p className="EatenProductsList__item_border EatenProductsList__item_widthGramKcal">грами</p>
            <p className="EatenProductsList__item_border EatenProductsList__item_widthGramKcal">ккал</p>
            {isCurrentDay && (
              <button className="EatenProductsList__item-button" type="button" onClick={() => handleClick(product.id)}>
                <svg width="12" height="12" fill="#9B9FAA">
        <use href={sprite + "#close"} />
      </svg>
              </button>
            )}
          </li>
        ))}
        </ul>
        </EatenProductsListStyles>
    </>
  );
};

export default EatenProductsList;
