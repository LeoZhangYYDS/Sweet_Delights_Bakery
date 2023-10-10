import React from "react";
import * as styles from "./ItemList.css";
import ItemCard from "../itemcard/itemCard";
import { priceFormatter, capitalizeFirstLetter } from "../../utils/readUtils";

const itemList = (props) => {
  const { products } = props;
  return (
    <div className={styles.grid}>
      {products.length > 0 &&
        products.map((product) => (
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
