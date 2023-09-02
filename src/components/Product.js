import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth-context";
import ecoFram from "../assets/ecoFram.png";
import pin from "../assets/icon-pin.png";
import dollar from "../assets/icon-dollar.png";
import delivery from "../assets/icon-delivery.png";
import classes from './Product.module.css';


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
    deliveryAmount,
    freeDeliveryAmount,
  } = props.productData;

const ctx = useContext(AuthContext);





// const currentProduct = ctx.productsInCart.filter(product=> product.productDetail.id === id);
// const currentProductObj = currentProduct[0];


const [orderDetail, setOrderDetail] = useState({amount:0, price: 0, deliveryPrice:0, productDetail:props.productData});

const amountProductHandler = (e)=>{
  setOrderDetail({amount: e.target.value*1, price: e.target.value*price, deliveryPrice:e.target.value*price>=freeDeliveryAmount?0:15, productDetail:props.productData})
}

const updateCartHandler = ()=>{
  
  ctx.cartUpdate(orderDetail, 'add', orderDetail.amount);
  setOrderDetail((prevState)=>({...prevState, amount: 0, price: 0}))
}

const currentProduct = ctx.productsInCart.filter(product=>product.productDetail.id === id);
const currentProductPrice = currentProduct[0]!== undefined ? currentProduct[0].price+orderDetail.price : orderDetail.price;

console.log(currentProduct);


const isFreeDeliveryAmount = currentProductPrice >= freeDeliveryAmount;

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
        <p className={classes.amount}>Amount <input onChange={amountProductHandler} type="number" min={0} value={orderDetail.amount}/> {unit}</p>
        <p className={classes.price}>$ {orderDetail.amount*price} PLN</p>
        {isFreeDeliveryAmount ? <p className={`${classes.delivery} ${classes['free-delivery']}`}>Free delivery!</p>: <p className={classes.delivery}>Only {freeDeliveryAmount-currentProductPrice}$ for free delivery!</p>}
        <button onClick={updateCartHandler} className={classes.button} disabled={orderDetail.amount === 0}>+ Add Product</button>
      </div>
    </li>
  );
};

export default Product;
