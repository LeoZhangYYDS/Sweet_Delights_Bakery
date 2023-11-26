import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer, Slide } from "react-toastify";
import * as styles from "./Layout.css";
import img from "/img/bg5.webp";

const Layout = (props) => {
  const { cartProducts, handleRemove } = props;
  return (
    <div className={styles.app}>
      <ToastContainer
        style={{ textAlign: "center" }}
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        transition={Slide}
        theme="colored"
      />
      <img className={styles.img} src={img} alt="bg" />
      <Header cartProducts={cartProducts} handleRemove={handleRemove} />
      <div className={styles.appContent}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
