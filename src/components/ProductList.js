import { useState, useCallback, useEffect } from "react";
import Product from "./Product";
import Card from "../UI/Card";
import classes from "./ProductList.module.css";

const ProductList = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [voivodeship, setVoivoship] = useState();
  const [error, setError] = useState(null);

  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://greenfood-3fadf-default-rtdb.firebaseio.com/products.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const loadedProducts = [];

      for (const key in data) {
        loadedProducts.push({
          id: key,
          name: data[key].name,
          img: data[key].img,
          desc: data[key].desc,
          isEco: data[key].eco,
          location: data[key].location,
          voivoship: data[key].voivoship,
          region: data[key].region,
          price: data[key].price,
          unit: data[key].unit,
          isFreeDelivery: data[key].isFreeDelivery,
          freeDeliveryAmount: data[key].freeDeliveryAmount,
        });
      }
      setProducts(loadedProducts);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  const voivodeshipHandler = (e)=>{
    setVoivoship(e.target.value);
  }


  return (
    <section className={classes['product-list']}>
      <Card>
        <h1>Order Fresh Fruits and Vegetables from your neighborhood!</h1>
        <select name="location" defaultValue="" onChange={voivodeshipHandler}>
            <option value="" disabled>Choose Your Location</option>
            <option value="pomorskie">pomorskie</option>
            <option value="mazowieckie">mazowieckie</option>
        </select>
        <input type="text" placeholder="Find Products"/>
        <ul>
          {isLoading && <p className={classes.loader}>Loading...</p>}
          {products.map((product) => {
            return <Product key={product.id} productData={product} />
          })}
        </ul>
      </Card>
    </section>
  );
};

export default ProductList;
