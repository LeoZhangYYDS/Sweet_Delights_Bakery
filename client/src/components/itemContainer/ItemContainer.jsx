import * as styles from "./ItemContainer.css";
import ItemList from "../itemList/ItemList";
import { useState, useEffect, useRef } from "react";
import cakeService from "../../services/cakeService";
import Loader from "../../components/loader/Loader";

const ItemContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // HOOK: ON-LOAD SIDE EFFECTS
  const effectRan = useRef(false);
  useEffect(() => {
    // console.log("Effect Ran");
    if (effectRan.current === false) {
      fetchProducts();
      setLoading(false);

      // CLEAN UP FUNCTION
      return () => {
        // console.log("Unmounted");
        effectRan.current = true;
      };
    }
  }, []);

  // [5A] COMPONENT FUNCTION
  async function fetchProducts() {
    try {
      // TU API Request
      const response = await cakeService.getAll();

      // Access Object Properties to Find Data Array & Save to Variable
      const data = await response.data;

      // SUCCESS: Output needs to override data state
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err?.response);
      setError(true);
    }
  }

  // CONDITIONAL LOAD: ERROR
  if (error) {
    return <p>Error page</p>;
  }

  // CONDITIONAL LOAD: LOADING
  if (loading) {
    return <Loader />;
  }
  return (
    <div className={styles.background}>
      <div className={styles.box}>
        <ItemList products={data} setLimit={true} />
      </div>
    </div>
  );
};

export default ItemContainer;
