import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as styles from "./Header.css";
import CusLink from "../link/CusLink";
import logo1 from "/img/logo.png";
import { Link } from "react-router-dom";
import logo2 from "/img/logo2.png";
import { RiShoppingCartFill } from "react-icons/ri";
import useAuth from "../../hooks/useAuth";

function Header() {
  const { user, logout } = useAuth();
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

            <CusLink to="/cart">
              <RiShoppingCartFill className={styles.icon} />
            </CusLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
