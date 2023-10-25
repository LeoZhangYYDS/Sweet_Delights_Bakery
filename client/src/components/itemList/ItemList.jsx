import React from "react";
import * as styles from "./ItemList.css";
import ItemCard from "../itemcard/itemCard";
import { priceFormatter, capitalizeFirstLetter } from "../../utils/readUtils";

const itemList = (props) => {
  const { products, setLimit } = props;

  //当传进来的 setLimit 为 true的时候显示 前 4 个 product
  //如果 没有传或者为 false 的时候显示所有 product
  //const variable = condition ? value1 : value2;
  const displayProducts = setLimit ? products.slice(0, 4) : products;

  return (
    <div className={styles.grid}>
      {displayProducts.length > 0 &&
        displayProducts.map((product) => (
          <ItemCard
            key={product.id}
            id={product.id}
            name={capitalizeFirstLetter(product.name)}
            price={priceFormatter(product.price)}
            image={product.image}
            description={product.description}
          />
        ))}
    </div>
  );
};

export default itemList;
