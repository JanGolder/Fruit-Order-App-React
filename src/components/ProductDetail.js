import { useParams } from "react-router-dom";
import classes from './ProductDetail.module.css'

const ProductDetail = () => {
  const params = useParams();

  return (
    <section className={classes["product-detail-wrap"]}>
      <p>Product Detail - {params.productId}</p>
    </section>
  );
};

export default ProductDetail;
