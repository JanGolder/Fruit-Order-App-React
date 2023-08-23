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
    return (
        <div className={classesModal['modal-wrap']}>
            <h1>Your Cart Summary</h1>
            <ul>
                {ctx.hasProducts && <CartProduct/>}
                {ctx.hasProducts && <CartProduct/>}
                {!ctx.hasProducts && <p className={classesModal['no-products']}>No products yet, please add something!</p>}
            </ul>
            {ctx.hasProducts && <div className={classesModal['summary-wrap']}>
                <p>Total Amount:</p>
                <div className={classesModal['summary-price-wrap']}>
                    <p>$ 675 PLN</p>
                    <p className={classesModal['summary-delivery']}>Delivery 0 PLN within</p>
                </div>
            </div>}
            <div className={classesModal['buttons-wrap']}>
            <Button isWhite={true} onClose={ctx.onModalActive}>Close</Button>
            {ctx.hasProducts && <Button>Order</Button>}
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