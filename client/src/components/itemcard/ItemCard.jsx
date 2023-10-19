import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./ItemCard.css";

const itemCard = (props) => {
  const { name, price, image, id } = props;
  return (
    <Link className={styles.card} to={`/cakes/${id}`}>
      <img className={styles.img} src={image} alt={name} />
      <div className={styles.content}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price}</div>
      </div>
    </Link>
  );
};

export default itemCard;
