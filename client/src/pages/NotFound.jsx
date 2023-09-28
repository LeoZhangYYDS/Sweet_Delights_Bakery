import React from "react";
import * as styles from "./NotFound.css";
import { Link } from "react-router-dom";
import CusButton from "../components/button/CusButton";

const NotFound = () => {
  return (
    <div className={styles.error}>
      <p className={styles.text}> 404 Page Not Found </p>
      <CusButton to="/" className={styles.button}>
        Back to home
      </CusButton>
    </div>
  );
};

export default NotFound;
