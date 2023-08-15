import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import Cart from "./Cart";


import classes from './Header.module.css'


const Header = ()=>{
    return (
        <header className={classes.header}>
            <p>GreenFood.app</p>
            <div className={classes['right-side-header']}>
                <Cart/>
                <NavLink to='admin-panel' className={classes['button-white']}>Admin Panel</NavLink>
                <NavLink to='/' className={classes['button-white']}>Home</NavLink>
                <Button isWhite={true}>Logout</Button>
            </div>
        </header>
    )

};


export default Header;