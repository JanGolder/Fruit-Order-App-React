import { useState, useContext } from "react";
import AuthContext from "../context/auth-context";
import classes from "./CartProduct.module.css";
import pin from "../assets/icon-pin.png";

const CartProduct = (props) => {
// tylko id potrzebne
  const { amount, productDetail } = props.product;

    const ctx = useContext(AuthContext);

    const currentProduct = ctx.productsInCart.filter(product=> product.productDetail.id === productDetail.id);

    const currentProductObj = currentProduct[0];

    
    
    
    
    
    const [cartProduct, setCartProduct] = useState(currentProductObj);

  const addProductHandler = ()=>{
    let amount = cartProduct.amount*1 + 1;

     setCartProduct(prevState => ({...prevState, amount: amount}));
     ctx.cartUpdate(currentProductObj, 'add', 1);
  }
  const subtractProductHandler = ()=>{
    let amount = cartProduct.amount*1 - 1;
    if(amount < 1){
      if (window.confirm('Are you sure you want to remove this product out of the cart?')) {
        amount = 0;
        ctx.cartUpdate(currentProductObj, 'subtract', 1);
      } else {
        amount = 1;
      }
        
    }else {
      ctx.cartUpdate(currentProductObj, 'subtract', 1);
    }
    setCartProduct(prevState => ({...prevState, amount: amount}));
  }






  const isFreeDeliveryAmount =
  currentProductObj.amount * currentProductObj.productDetail.price >= currentProductObj.productDetail.freeDeliveryAmount;

  return (
    <li className={classes["cart-product-wrap"]}>
      <div className={classes["left-side-wrap"]}>
        <h2>{currentProductObj.productDetail.name}</h2>
        <div className={classes["pin-wrap"]}>
          <img src={pin} />
          <p>{currentProductObj.productDetail.location}</p>
        </div>
        <p className={classes.price}>$ {currentProductObj.amount * currentProductObj.productDetail.price}</p>
        {isFreeDeliveryAmount ? (
          <p
            className={`${classes["delivery-free"]} ${classes["delivery-info"]}`}
          >
            Free delivery!
          </p>
        ) : (
          <p className={classes["delivery-info"]}>
            Only
            {productDetail.freeDeliveryAmount - currentProductObj.amount * productDetail.price}$
            for free delivery!
          </p>
        )}
      </div>
      <div className={classes["right-side-wrap"]}>
        <div className={classes["amount-wrap"]}>
          <p className={classes["amount"]}>{currentProductObj.amount}</p>
          <p>{currentProductObj.productDetail.unit}</p>
        </div>
        <div className={classes["buttons-wrap"]}>
          <button onClick={subtractProductHandler}>-</button>
          <button onClick={addProductHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;
