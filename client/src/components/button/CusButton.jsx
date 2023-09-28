import * as styles from "./CusButton.css";
import { Link } from "react-router-dom";
const CusButton = ({ children, type, onClick, to }) => {
  if (to) {
    return (
      <Link to={to}>
        <button className={styles.button}>{children}</button>
      </Link>
    );
  }
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default CusButton;
