import { useParams } from "react-router-dom";

const ProductDetail = ()=>{

const params = useParams();

return (
    <p>Product Detail - {params.productId}</p>

)

};

export default ProductDetail;