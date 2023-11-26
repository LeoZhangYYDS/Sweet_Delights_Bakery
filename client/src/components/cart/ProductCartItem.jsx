import * as styles from "./ProductCartItem.css";
import { priceFormatter } from "../../utils/readUtils";
import CusButton from "../button/CusButton";

function ProductCartItem({ product, handleRemove }) {
  const onRemove = () => {
    handleRemove(product.id);
  };
  return (
    <div className={styles.productGrid}>
      <img
        className={styles.productSnapshot}
        src={product.image}
        alt={product.name}
      />
      <div className={styles.productDetails}>
        <h6 className={styles.productTitle}>{product.name}</h6>
        <p>Quantity: {product.quantity}</p>
        <p className={styles.productPrice}>
          {priceFormatter(product.totalPrice)}
        </p>
        <div className={styles.x}>
          <CusButton onClick={onRemove}>X</CusButton>
        </div>
      </div>
    </div>
  );
}

export default ProductCartItem;
