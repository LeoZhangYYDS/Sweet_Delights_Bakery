import * as styles from "./CakeEdit.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, InputGroup, Spinner, Container } from "react-bootstrap";

import cakeService from "../services/cakeService";
import FormContainer from "../components/formContainer/FormContainer";
import CusButton from "../components/button/CusButton";
import Loader from "../components/loader/Loader";
import { getFileFromUrl } from "../utils/writeUtils";

const CakeEdit = () => {
  // CUSTOM HOOKS
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

  // Uploaded File from Existing downloadURL
  const [uploadedFile, setUploadedFile] = useState("");
  const [preview, setPreview] = useState(true);

  // Destructure data state nested object properties & instance of useNavigate class
  const { id, name, description, category, price, image } = productData;

  // HOOK: ON-LOAD SIDE EFFECTS
  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current === false) {
      fetchProduct();
      setLoading(false);

      // CLEAN UP FUNCTION
      return () => {
        effectRan.current = true;
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // FORM FUNCTIONS
  // [0] FORM PRE-POPULATION CALL
  async function fetchProduct() {
    try {
      // (i) API FETCH CALL
      const response = await cakeService.getById(id);
      const dbProduct = await response.data;
      console.log(dbProduct);

      // (ii) UPDATING STATE DATA OBJECT
      setProductData((productData) => ({ ...productData, ...dbProduct }));

      // Save uploaded file glob to state
      if (!dbProduct.image) {
        console.log("No downloadURL provided by DB");
      } else {
        const fileGlob = getFileFromUrl(dbProduct.image);
        setUploadedFile(fileGlob);
      }

      // (iii) CLEANUP FUNCTIONS
    } catch (err) {
      console.log(err?.response);
      setError(true);
    }
  }

  // [1] CHANGE STATE FOR TEXT FORM DATA
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  // [2] CHANGE STATE FOR FILE FORM DATA
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductData({ ...productData, image: file });
    setPreview(false);
  };

  // [3] FORM SUBMISSION FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // NOTE: We add uploadedFile parameter to pass image glob
      const response = await cakeService.put(id, productData, uploadedFile);
      console.log(response);
      navigate(`/cakes/${id}`);
    } catch (err) {
      console.log(err?.response);
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
      setTimeout(() => {
        setLoading(false);
      }, 1000);
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
  if (loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  return (
    <FormContainer title="Edit Product">
      <Form onSubmit={handleSubmit}>
        {/* GROUP 1: NAME */}
        <Form.Group className="mb-4">
          <Form.Label className={styles.styledLabel}>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleTextChange}
          />
        </Form.Group>

        {/* GROUP 2: DESCRIPTION */}
        <Form.Group className="mb-3">
          <Form.Label className={styles.styledLabel}>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={description}
            onChange={handleTextChange}
          />
        </Form.Group>

        {/* GROUP 3: CATEGORY */}
        <Form.Group className="mb-3">
          <Form.Label className={styles.styledLabel}>Category</Form.Label>
          <Form.Control
            as="select"
            name="category"
            value={category}
            onChange={handleTextChange}
          >
            <option value=""> </option>
            <option value="Wedding Cake">Wedding Cake</option>
            <option value="Cheese Cake">Cheese Cake</option>
            <option value="Fruit Cake">Fruit Cake</option>
          </Form.Control>
        </Form.Group>

        {/* GROUP 4: PRODUCT DETAILS */}
        <Form.Group className="mb-3">
          {/* 4A: PRICE */}

          <Form.Label className={styles.styledLabel}>Price</Form.Label>
          <InputGroup>
            <InputGroup.Text id="price-dollar">$</InputGroup.Text>
            <Form.Control
              type="number"
              aria-describedby="price-dollar"
              id="price-input"
              name="price"
              placeholder=""
              value={price}
              onChange={handleTextChange}
            />
          </InputGroup>
        </Form.Group>

        {/* GROUP 6A: CONDITIONAL PREVIEW OF IMAGE (File in DB) */}
        {preview && !loading ? (
          <div>
            <h6 className={styles.styledLabel}>Current Image</h6>
            <img className={styles.img} src={image} alt="preview" />
          </div>
        ) : null}

        {/* GROUP 6: PRODUCT IMAGE */}
        <Form.Group className="mb-3" controlId="image">
          <Form.Label className={styles.styledLabel}>Image</Form.Label>
          <Form.Control
            type="file"
            onChange={handleFileChange}
            className={styles.file}
          />
        </Form.Group>

        {/* SUBMIT BUTTON */}
        <CusButton>
          {loading ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            "Submit"
          )}
        </CusButton>
      </Form>
    </FormContainer>
  );
};

export default CakeEdit;
