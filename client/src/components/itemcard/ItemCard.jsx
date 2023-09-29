import React from "react";
import * as styles from "./ItemCard.css";

const itemCard = (props) => {
  const { name, price, img } = props;
  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt="img" />
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>${price}</div>
    </div>
  );
};

export default itemCard;
