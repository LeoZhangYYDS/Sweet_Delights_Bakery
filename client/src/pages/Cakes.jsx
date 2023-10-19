import { useState, useEffect, useRef } from "react";
import ItemList from "../components/itemList/ItemList";
import Loader from "../components/loader/Loader";
import { Link } from "react-router-dom";
import * as styles from "./Cake.css";
import cakeService from "../services/cakeService";
import { AiOutlineLeft } from "react-icons/ai";

const Cakes = () => {
  // PRODUCTS STATE
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
    <div className={styles.box}>
      {/* title */}
      <div className={styles.content}>
        <Link to="/" className={styles.icon}>
          <AiOutlineLeft /> Home
        </Link>
        <h1 className={styles.title}>ALL</h1>
      </div>
      {/* category */}
      <div className="category">category</div>
      {/* Products Menu */}
      {<ItemList products={data} />}
    </div>
  );
};

export default Cakes;
