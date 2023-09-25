import React from "react";
import * as styles from "./Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.background}>
      <div className={styles.footer}>
        <span className={styles.text}>@2023 SWEET DELIGHTS</span>
        <div className={styles.links}>
          <a href="https://www.facebook.com/" target="_blank">
            <AiFillFacebook className={styles.icon} />
          </a>
          <a href="https://twitter.com/?lang=en" target="_blank">
            <AiOutlineTwitter className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
