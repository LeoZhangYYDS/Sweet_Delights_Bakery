import * as styles from "./Loader.css";
import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div className={styles.loadingBox}>
      <Spinner className={styles.loadingSpinner} animation="border" />
    </div>
  );
}

export default Loader;
