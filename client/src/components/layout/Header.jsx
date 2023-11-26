import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import * as styles from "./Header.css";
import CusLink from "../link/CusLink";
import CusButton from "../button/CusButton";
import logo1 from "/img/logo.png";
import { Link } from "react-router-dom";
import logo2 from "/img/logo2.png";
import { RiShoppingCartFill } from "react-icons/ri";
import useAuth from "../../hooks/useAuth";
import Cart from "../cart/Cart";

function Header(props) {
  const { cartProducts, handleRemove } = props;
  const { user, logout } = useAuth();
  // CART OFFCANVAS
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={styles.background}>
      <Navbar expand="xxl" className={styles.box}>
        <Navbar.Brand as={Link} to="/" className={styles.logoBox}>
          <img src={logo1} alt="logo" className={styles.logo1} />
          <img src={logo2} alt="logo2" className={styles.logo2} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.box2}>
          <Nav className={styles.nav}>
            <CusLink to="/cakes">Cakes</CusLink>

            <CusLink to="/desserts">Desserts</CusLink>

            {!user && <CusLink to="/login">Login</CusLink>}
            {!user && <CusLink to="/signup">Sign Up</CusLink>}
            {user && <CusLink to="/dashboard">Dashboard</CusLink>}
            {user && (
              <button
                as={Link}
                to="/"
                className={styles.button}
                onClick={() => {
                  logout();
                }}
              >
                <CusLink>Log Out</CusLink>
              </button>
            )}

            <button className={styles.button} onClick={handleShow}>
              <RiShoppingCartFill className={styles.icon} />
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Cart
        show={show}
        handleClose={handleClose}
        cartProducts={cartProducts}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default Header;
