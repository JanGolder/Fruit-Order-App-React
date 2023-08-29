import React from 'react';
import ReactDOM from 'react-dom';
import { useContext } from 'react';
import AuthContext from '../context/auth-context';
import CartProduct from './CartProduct';
import classesBackdrop from './Backdrop.module.css';
import classesModal from './ModalOverlay.module.css';
import Button from '../UI/Button';


const Backdrop = () =>{

    const ctx = useContext(AuthContext);

    return <div onClick={ctx.onModalActive} className={classesBackdrop['modal-backdrop']}/>;
}

const ModalOverlay = () =>{
    const ctx = useContext(AuthContext);

const hasProducts = ctx.productsInCart.length>0;



    return (
        <div className={classesModal['modal-wrap']}>
            <h1>Your Cart Summary</h1>
            <ul>
                {ctx.productsInCart.map(product=>{
                    return (
                        <CartProduct key={product.productDetail.id} product={product}/>
                    )
                })}
                {/* {ctx.hasProducts && <CartProduct/>}
                {ctx.hasProducts && <CartProduct/>} */}
                {!hasProducts && <p className={classesModal['no-products']}>No products yet, please add something!</p>}
            </ul>
            {hasProducts && <div className={classesModal['summary-wrap']}>
                <p>Total Amount:</p>
                <div className={classesModal['summary-price-wrap']}>
                    <p>$ {ctx.totalPrice} PLN</p>
                    <p className={classesModal['summary-delivery']}>Delivery {ctx.totalDeliveryPrice} PLN within</p>
                </div>
            </div>}
            <div className={classesModal['buttons-wrap']}>
            <Button isWhite={true} onClose={ctx.onModalActive}>Close</Button>
            {hasProducts && <Button>Order</Button>}
            </div>
        </div>
    )
}

const CartModal = ()=>{

return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop/>,document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay/>,document.getElementById('modal-root'))}
    </React.Fragment>
)

};

export default CartModal;