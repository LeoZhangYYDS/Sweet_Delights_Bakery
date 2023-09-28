import React from "react";
import * as styles from "./Banner2.css";
import image1 from "/img/b2.webp";
import Container from "react-bootstrap/Container";
import CusButton from "../button/CusButton";

const Banner2 = () => {
  return (
    <Container className={styles.background}>
      {/* <h2 className={styles.heading}> Dessert </h2> */}
      <div className={styles.box1}>
        <div className={styles.box2}>
          <h2 className={styles.text1}>Party Packs</h2>
          <p className={styles.text2}>
            Dedicated to all things sweet and delightful,the ultimate
            destination for dessert lovers
          </p>
          <div className={styles.box3}>
            <CusButton to="/desserts">Shop Now</CusButton>
          </div>
        </div>
        <img className={styles.img} src={image1} alt="sweets" />
      </div>
    </Container>
  );
};

export default Banner2;
