import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as styles from "./Header.css";
import { Link } from "react-router-dom";
import logo1 from "/img/logo.png";
import logo2 from "/img/logo2.png";
import { RiShoppingCartFill } from "react-icons/ri";
import useAuth from "../../hooks/useAuth";

function Header() {
  const { user, logout } = useAuth();
  return (
    <div className={styles.background}>
      <Navbar expand="lg" className={styles.box}>
        <Navbar.Brand as={Link} to="/" className={styles.logoBox}>
          <img src={logo1} alt="logo" className={styles.logo1} />
          <img src={logo2} alt="logo2" className={styles.logo2} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.box2}>
          <Nav className={styles.nav}>
            <Link to="/cakes" className={styles.link}>
              Cakes
            </Link>

            <Link to="/desserts" className={styles.link}>
              Desserts
            </Link>

            {!user && (
              <Link to="/login" className={styles.link}>
                Login
              </Link>
            )}
            {!user && (
              <Link to="/signup" className={styles.link}>
                Sign Up
              </Link>
            )}
            {user && (
              <Link className={styles.link} to="/dashboard">
                Dashboard
              </Link>
            )}
            {user && (
              <Link
                className={styles.link}
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                Log Out
              </Link>
            )}

            <Link to="/cart" className={styles.link}>
              <RiShoppingCartFill className={styles.icon} />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
