import React from "react";
import * as styles from "./Banner1.css";
import image1 from "/img/c1.webp";
import CusButton from "../button/CusButton";

const Banner1 = () => {
  return (
    <div className={styles.background}>
      {/* <h2 className={styles.heading}> Celebration Cakes </h2> */}
      <div className={styles.box1}>
        <img className={styles.img} src={image1} alt="background" />
        <div className={styles.box2}>
          <h2 className={styles.text1}>For Your Special Day</h2>
          <p className={styles.text2}>
            Planning your celebration is a lot of work. Finding your Celebration
            Cake shouldn't be!
          </p>
          <CusButton to="/cakes">Shop Now</CusButton>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
