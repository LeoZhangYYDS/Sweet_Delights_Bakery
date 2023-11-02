import { useState, useEffect, useRef } from "react";
import ItemList from "../components/itemList/ItemList";
import Loader from "../components/loader/Loader";
import { Link } from "react-router-dom";
import * as styles from "./Cake.css";
import cakeService from "../services/cakeService";
import { AiOutlineLeft } from "react-icons/ai";
import CusButton from "../components/button/CusButton";

const Cakes = () => {
  // PRODUCTS STATE
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [category, setCategory] = useState("All");

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
  // 设置一个参数把这个参数传给子组件 ItemList，当category不是All的时候，执行filter
  // 1. 遍历data中的每一个 object 中的 category，当这个 category 和点击 button 时的 setCategory 一样的时，把 filter 之后的对应 category 赋值给 filteredData
  // 2. 当category为All的时候，把整个data赋值给 filteredData 显示 整个data
  const filteredData =
    category !== "All"
      ? data.filter((item) => item.category === category)
      : data;

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
        <h1 className={styles.title}>{category}</h1>
      </div>
      {/* category */}
      <div className={styles.category}>
        <CusButton onClick={() => setCategory("All")}>All</CusButton>
        <CusButton onClick={() => setCategory("Wedding Cake")}>
          Wedding Cakes
        </CusButton>
        <CusButton onClick={() => setCategory("Cheese Cake")}>
          Cheese Cakes
        </CusButton>
        <CusButton onClick={() => setCategory("Fruit Cake")}>
          Fruit Cakes
        </CusButton>
      </div>
      {/* Products Menu */}
      {<ItemList products={filteredData} />}
    </div>
  );
};

export default Cakes;
