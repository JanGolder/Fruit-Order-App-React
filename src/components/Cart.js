import classes from './Cart.module.css';
import { useContext } from 'react';
import AuthContext from '../context/auth-context';

const Cart = ()=>{

const ctx = useContext(AuthContext);

const modalHandler = ()=>{
    ctx.onModalActive();
}

const hasProducts = ctx.productsInCart.length>0;

    return (
        <div className={classes['cart-wrap']} onClick={modalHandler}>
            <p className={classes['cart-text']}>Your Cart</p>
            <div className={hasProducts ? classes['cart-amount'] : classes['cart-no-amount']}>{ctx.productsInCart.length}</div>
        </div>
    )
};

export default Cart;