import React from "react";
import * as styles from "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.error}>
      <Link to="/" className={styles.button}>
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
