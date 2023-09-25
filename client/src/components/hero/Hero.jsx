import React from "react";
import * as styles from "./Hero.css";
import { Link } from "react-router-dom";
import image1 from "/img/1.jpg";
import image2 from "/img/2.jpg";
import image3 from "/img/7.png";
import image4 from "/img/3.jpg";

const Hero = () => {
  return (
    <div className={styles.background}>
      <div className={styles.grid}>
        <Link to="/cakes" className={styles.item1}>
          <p className={styles.text}>CAKES</p>
          <img className={styles.img} src={image1} alt="cake img" />
          <div className={styles.cover}></div>
        </Link>
        <Link to="/desserts" className={styles.item2}>
          <p className={styles.text}>Desserts</p>
          <img className={styles.img} src={image2} alt="sweets img" />
          <div className={styles.cover}></div>
        </Link>
        <Link to="/story" className={styles.item3}>
          <p className={styles.text}>OUR STORY</p>
          <img className={styles.img} src={image3} alt="our story" />
          <div className={styles.cover}></div>
        </Link>
        <Link to="/jobs" className={styles.item4}>
          <p className={styles.text}>JOBS</p>
          <img className={styles.img} src={image4} alt="connect" />
          <div className={styles.cover}></div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
