import { Link } from "react-router-dom";
import ecoFram from "../assets/ecoFram.png";
import pin from "../assets/icon-pin.png";
import dollar from "../assets/icon-dollar.png";
import delivery from "../assets/icon-delivery.png";
import classes from './Product.module.css';
import Button from '../UI/Button';

const Product = (props) => {
  const {
    id,
    name,
    img,
    desc,
    isEco,
    location,
    price,
    unit,
    isFreeDelivery,
    freeDeliveryAmount,
  } = props.productData;

  return (
    <li className={classes.product}>
      <img className={classes['main-img']} src={img} />
      {isEco && <img className={classes['eco-farm']} src={ecoFram} />}
      <div className={classes['main-info']}>
        <Link className={classes.name} to={id}>{name}</Link>
        <p className={classes.text}>{desc}</p>
        <div className={classes['info-wrap']}>
          <img src={pin}/>
          <p className={classes.text}>{location}</p>
        </div>
        <div className={classes['info-wrap']}>
          <img src={dollar}/>
          <p className={classes.text}>
            {price} PLN/{unit}
          </p>
        </div>
        {isFreeDelivery && (
          <div className={classes['info-wrap']}>
            <img src={delivery}/>
            <p className={classes.text}>free delivery up to {freeDeliveryAmount} PLN</p>
          </div>
        )}
      </div>
      <div>
        <p className={classes.amount}>Amount <input type="number"/> {unit}</p>
        <p className={classes.price}>$ 225 PLN</p>
        <p className={classes.delivery}>Free delivery!</p>
        <Button>+ Add Product</Button>
      </div>
    </li>
  );
};

export default Product;
