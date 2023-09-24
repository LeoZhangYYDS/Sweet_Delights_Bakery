import React from "react";
import * as styles from "./Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.box}>
        <div></div>
        <div className={styles.item}>@2023 SWEET DELIGHTS</div>
        <div></div>
        <a href="https://www.facebook.com/" target="_blank">
          <AiFillFacebook className={styles.item} />
        </a>
        <a href="https://twitter.com/?lang=en" target="_blank">
          <AiOutlineTwitter className={styles.item} />
        </a>

        <div></div>
      </div>
    </div>
  );
};

export default Footer;
