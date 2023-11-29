import { useCallback } from "react";
import classes from './ShortProduct.module.css';

const ShortProduct = (props) => {
  const { id, name, location, voivodeship } = props.productData;
  

  const removeHandle = useCallback(async () => {
    if (
      window.confirm(
        "Are you sure you want to remove this product out of the cart?"
      )
    ) {
      const response = await fetch(
        `https://greenfood-3fadf-default-rtdb.firebaseio.com/products/${id}.json`,
        { method: "DELETE" }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      props.onRemoveProduct(id)
    }
  }, []);

  return (
    <li className={classes['short-product']}>
      <p className={classes.name}>
        {name}, {location}, {voivodeship}
      </p>
      <button className={classes['edit-btn']}>Edit</button>
      <button className={classes['remove-btn']} onClick={removeHandle}>Remove</button>
    </li>
  );
};

export default ShortProduct;
