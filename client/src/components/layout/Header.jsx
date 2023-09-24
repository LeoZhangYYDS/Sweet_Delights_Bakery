import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { RiShoppingCartFill } from "react-icons/ri";
import logo from "/img/logo.png";
import logo2 from "/img/logo2.png";
import * as styles from "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light" className={styles.nav}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.logoBox}>
          <img src={logo} alt="logo" className={styles.logo} />
          <img src={logo2} alt="logo2" className={styles.logo2} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1">
            <Link to="/" className={styles.link}>
              Home
            </Link>

            <Link to="/cakes" className={styles.link}>
              Cakes
            </Link>

            <Link to="/sweets" className={styles.link}>
              Sweets
            </Link>

            <Link to="/login" className={styles.link}>
              Login
            </Link>

            <Link to="/cart" className={styles.link}>
              <RiShoppingCartFill />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
