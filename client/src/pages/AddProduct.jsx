import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, InputGroup, Spinner } from "react-bootstrap";

import cakeService from "../services/cakeService";
import FormContainer from "../components/formContainer/FormContainer";
import CusButton from "../components/button/CusButton";
import * as styles from "./AddProduct.css";

function AddProduct() {
  // HOOK: SETTING COMPONENT STATE (& init values)
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  // Destructure data state nested object properties & instance of useNavigate class
  const { name, description, category, price } = productData;

  // FORM FUNCTIONS
  // [1] handleTextChange will handle change in state value event for TEXT data
  // NOTE: To update state object, we create shallow copy & mutate properties according to input field changed
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  // [2] handleFileChange will handle change in state for FILE data
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductData({ ...productData, image: file });
  };

  // [3] handleSubmit will control form submission event
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // API Post (refactored)
      const response = await cakeService.post(productData);
      console.log(response);
      //navigate("/add");
      window.location.reload();
    } catch (err) {
      console.log(err?.response);
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <FormContainer title="Add Product">
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
}

export default AddProduct;
