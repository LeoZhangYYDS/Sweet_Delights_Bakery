import * as styles from "./CakeDetail.css";

import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

// Local modules
import { priceFormatter, capitalizeFirstLetter } from "../utils/readUtils";
import useAuth from "../hooks/useAuth";
import cakeService from "../services/cakeService";
import Loader from "../components/loader/Loader";
import CusButton from "../components/button/CusButton";

const CakeDetail = () => {
  // CUSTOM HOOKS
  const { user } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  // STATE INIT
  const [productData, setProductData] = useState({
    id: params.id,
    name: "",
    description: "",
    category: "",
    price: 0,
    image: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Destructure data state nested object properties
  const { id, name, description, category, price, image } = productData;

  // HOOK: Prevention of useEffect calling TWICE (React v18)
  const effectRan = useRef(false);
  useEffect(() => {
    console.log("Effect Ran");
    if (effectRan.current === false) {
      fetchProduct();
      setLoading(false);

      // CLEAN UP FUNCTION
      return () => {
        console.log("Unmounted");
        effectRan.current = true;
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // FUNCTIONS
  // [1] PAGE POPULATION
  async function fetchProduct() {
    try {
      const response = await cakeService.getById(id);
      const fetchedProduct = await response.data;
      console.log(fetchedProduct);

      // Using the spread, we create a shallow copy of the original object & overwrite/add with new data
      // NOTE: We could just do setData({...productData, ...fetchedCurrency}), but the dependency array then has issues!
      // NOTE: Specifically, we pass a function that has a first param (productData) same as the current value of the state, and we set it to state we want in the return of the function!
      setProductData((productOnMount) => ({
        ...productOnMount,
        ...fetchedProduct,
      }));
    } catch (err) {
      console.log(err?.response);
      setError(true);
    }
  }
  const handleDelete = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Call API - must match server route + pass id to route
      const response = await cakeService.del(id);
      console.log(response);

      // onSuccess - Redirect
      setLoading(false);
      navigate("/cakes");
    } catch (err) {
      console.log(err?.response);
      setError(true);
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  };
  // CONDITIONAL LOAD: ERROR
  if (error) {
    return (
      <Container className="text-center">
        <p>Error page</p>
      </Container>
    );
  }

  // CONDITIONAL LOAD: LOADING
  if (loading && effectRan.current === false) {
    return (
      <Container className="text-center">
        <Loader />
      </Container>
    );
  }

  return (
    <div className={styles.box}>
      <div className={styles.left}>
        <h2 className={styles.name1}>{capitalizeFirstLetter(name)}</h2>
        <img className={styles.img} src={image} alt={name} />
      </div>
      <div className={styles.mid}></div>

      {/* TEXT & PURCHASE AREA: RIGHT */}
      <div className={styles.right}>
        {/* HERO BOX */}
        <div className={styles.rightTop}>
          <h2 className={styles.name}>{capitalizeFirstLetter(name)}</h2>
          <p className={styles.price}>{priceFormatter(price)}</p>
          <p className={styles.description}>{description}</p>
          <p className={styles.text}>
            Pick up and delivery available in 7 days
          </p>
        </div>
        <div className={styles.rightBottom}>
          <CusButton>Add to Cart</CusButton>
          <p className={styles.text2}>
            Prices may vary in store. Pick up and delivery available in 7 days -
            Please order by 4pm to ensure availability. Choose a date & location
            at checkout. Please note that product availability may change as a
            result of a Covid lockdown period.
          </p>
          {/* AUTH LINKS: EDIT & DELETE */}
          {user?.isAdmin === true && (
            <div className={styles.buttonBox}>
              <CusButton as={Link} to={`/cakes/edit/${id}`}>
                Edit
              </CusButton>

              <CusButton onClick={handleDelete}>
                {loading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  "Delete"
                )}
              </CusButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CakeDetail;
