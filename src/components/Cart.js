import classes from './Cart.module.css';

const Cart = ()=>{
    return (
        <div className={classes['cart-wrap']}>
            <p className={classes['cart-text']}>Your Cart</p>
            <div className={classes['cart-amount']}>3</div>
        </div>
    )
};

export default Cart;