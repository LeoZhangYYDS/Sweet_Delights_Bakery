import * as styles from "./ItemContainer.css";
import ItemList from "../itemList/itemList";
const ItemContainer = () => {
  return (
    <div className={styles.background}>
      <div className={styles.box}>{/* <ItemList /> */}</div>
    </div>
  );
};

export default ItemContainer;
