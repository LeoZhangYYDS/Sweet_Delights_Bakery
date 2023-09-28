import { Link } from "react-router-dom";
import * as styles from "./CusLink.css";
const CusLink = ({ to, children }) => {
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  );
};

export default CusLink;
