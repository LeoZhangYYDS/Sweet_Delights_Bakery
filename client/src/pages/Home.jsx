import React from "react";
import * as styles from "./Home.css";
import Hero from "../components/hero/Hero";
import Banner1 from "../components/banner/Banner1";
import Banner2 from "../components/banner/Banner2";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
      <Banner1 />
      <Banner2 />
    </div>
  );
};

export default Home;
