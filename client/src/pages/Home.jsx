import React from "react";
import * as styles from "./Home.css";

const Home = () => {
  return (
    <div className={styles.box}>
      <h1 className={styles.text}>SWEET DELIGHTS</h1>
      <h4 className={styles.text}>Since 1965</h4>
      <div className={styles.image}></div>
    </div>
  );
};

export default Home;
