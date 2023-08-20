import classes from './Cart.module.css';
import { useContext } from 'react';
import AuthContext from '../context/auth-context';

const Cart = ()=>{

const ctx = useContext(AuthContext);

const modalHandler = ()=>{
    ctx.onModalActive();
}

    return (
        <div className={classes['cart-wrap']} onClick={modalHandler}>
            <p className={classes['cart-text']}>Your Cart</p>
            <div className={classes['cart-amount']}>3</div>
        </div>
    )
};

export default Cart;