import React from "react";
import * as styles from "./Home.css";
import Hero from "../components/hero/Hero";
import Banner1 from "../components/banner/Banner1";
import Banner2 from "../components/banner/Banner2";
import ItemContainer from "../components/itemContainer/ItemContainer";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
      <Banner1 />
      <ItemContainer />
      <Banner2 />
      <ItemContainer />
    </div>
  );
};

export default Home;
