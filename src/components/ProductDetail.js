import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import ecoFram from "../assets/ecoFram.png";
import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
  const params = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://greenfood-3fadf-default-rtdb.firebaseio.com/products/${params.productId}.json`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const product = {
        id: data.img,
        name: data.name,
        img: data.img,
        desc: data.desc,
        isEco: data.eco,
        location: data.location,
        region: data.region,
        price: data.price,
        unit: data.unit,
        deliveryAmount: data.deliceryAmount,
        isFreeDelivery: data.isFreeDelivery,
        freeDeliveryAmount: data.freeDeliveryAmount,
      };
      setProduct(product);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  return (
    <section className={classes["product-detail-wrap"]}>
        <img className={classes["main-img"]} src={product.img} />
        <div className={classes["content-wrap"]}>
          <p className={classes.name}>{product.name}</p>      
          {product.isEco && <img className={classes['eco-farm']} src={ecoFram} />}
          <p>{product.desc}</p>
          <p>Farm Location: {product.location} / {product.region} voivodeship</p>
          <p>Eco Nutrition: {product.isEco ? 'Yes' : 'No'}</p>
          <p>Price: {product.price}/{product.unit}</p>
          <p>Delivery: {product.deliveryAmount} PLN</p>
          {product.isFreeDelivery && (<p>Free delivery available up to: {product.freeDeliveryAmount} PLN</p>)}
        </div>
        <div>
          <button>Remove Product</button>
          <button>Edit Product</button>
        </div>
    </section>
  );
};

export default ProductDetail;
