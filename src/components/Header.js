import Cart from "./Cart";
import Log from "./Log";

import classes from './Header.module.css'

const Header = ()=>{
    return (
        <header className={classes.header}>
            <p>GreenFood.app</p>
            <div className={classes['right-side-header']}>
                <Cart/>
                <Log/>                
            </div>
        </header>
    )

};


export default Header;