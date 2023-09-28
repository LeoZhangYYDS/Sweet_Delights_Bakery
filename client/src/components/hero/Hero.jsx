import React from "react";
import * as styles from "./Hero.css";
import { Link } from "react-router-dom";
import image1 from "/img/2.webp";
import image2 from "/img/1.webp";
import image3 from "/img/7.webp";
import image4 from "/img/3.webp";

const Hero = () => {
  return (
    <div className={styles.background}>
      <div className={styles.grid}>
        <Link to="/cakes" className={styles.item1}>
          <p className={styles.text}>Cakes</p>
          <img className={styles.img} src={image1} alt="cake img" />
          <div className={styles.cover}></div>
        </Link>
        <Link to="/desserts" className={styles.item2}>
          <p className={styles.text}>Desserts</p>
          <img className={styles.img} src={image2} alt="sweets img" />
          <div className={styles.cover}></div>
        </Link>
        <Link to="/jobs" className={styles.item3}>
          <p className={styles.text}>Jobs</p>
          <img className={styles.img} src={image3} alt="our story" />
          <div className={styles.cover}></div>
        </Link>
        <Link to="/story" className={styles.item4}>
          <p className={styles.text}>Our Story</p>
          <img className={styles.img} src={image4} alt="connect" />
          <div className={styles.cover}></div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
