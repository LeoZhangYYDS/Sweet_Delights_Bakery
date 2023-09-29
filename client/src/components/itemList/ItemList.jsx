import React from "react";
import * as styles from "./ItemList.css";
import ItemCard from "../itemcard/itemCard";
import img from "/img/1.webp";

const itemList = () => {
  const datas = [
    { name: "item1", price: "30", img: img },
    { name: "item2", price: "30", img: img },
    { name: "item3", price: "30", img: img },
    { name: "item4", price: "30", img: img },
  ];
  return (
    <div className={styles.grid}>
      {datas.map((data) => (
        <ItemCard
          key={data.name}
          name={data.name}
          price={data.price}
          img={data.img}
        />
      ))}
    </div>
  );
};

export default itemList;
