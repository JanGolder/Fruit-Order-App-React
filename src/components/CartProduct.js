import classes from  './CartProduct.module.css';
import pin from "../assets/icon-pin.png";


const CartProduct = ()=>{
    return (
        <li className={classes['cart-product-wrap']}>
            <div className={classes['left-side-wrap']}>
                <h2>Onion</h2>
                <div className={classes['pin-wrap']}>
                    <img src={pin}/>
                    <p>Kartuzy, Gospodarstwo Rolne Lucyna Falska</p>
                </div>
                <p className={classes.price}>$ 225</p>
                <p className={classes['delivery-info']}>Free delivery!</p>
            </div>
            <div className={classes['right-side-wrap']}>
                <div className={classes['input-wrap']}>
                    <input type="number"/>
                    <p>kg</p>
                </div>
                <div className={classes['buttons-wrap']}>
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
        </li>
    )
}

export default CartProduct;