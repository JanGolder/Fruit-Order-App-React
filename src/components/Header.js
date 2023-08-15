import Button from "../UI/Button";
import Cart from "./Cart";


import classes from './Header.module.css'


const Header = ()=>{
    return (
        <header className={classes.header}>
            <p>GreenFood.app</p>
            <div className={classes['right-side-header']}>
                <Cart/>
                <Button isWhite={true}>Admin Panel</Button>
                <Button isWhite={true}>Logout</Button>
            </div>
        </header>
    )

};


export default Header;