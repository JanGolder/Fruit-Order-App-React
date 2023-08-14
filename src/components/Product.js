import { Link } from "react-router-dom";

const Product = (props)=>{
    return (
        <li>
            {props.productData.name}
            <Link to={props.productData.id}>Details</Link>
        </li>
    )
};

export default Product;