import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from './ProductDetail.module.css'

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
          isEco: data.isEco,
          location: data.location,
          price: data.price,
          unit: data.unit,
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
      <p>Product Detail - {product.name}</p>
    </section>
  );
};

export default ProductDetail;
