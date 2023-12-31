import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/auth-context";
import Cart from "./Cart";
import classes from "./Header.module.css";
import CartModal from "./CartModal";

const Header = () => {
  const ctx = useContext(AuthContext);

  return (
    <header className={classes.header}>
      <p>GreenFood.app</p>
      <div className={classes["right-side-header"]}>
        {ctx.isLoggedIn && (
          <NavLink to="/" className={classes["link-white"]}>
            Home
          </NavLink>
        )}
        {ctx.isLoggedIn && (
          <NavLink to="admin-panel" className={classes["link-white"]}>
            Admin Panel
          </NavLink>
        )}
        {ctx.isLoggedIn && <Cart />}
        {ctx.isLoggedIn && <button onClick={ctx.onLogout} className={classes["button-white"]}>Logout</button>}
        {ctx.isModalActive && <CartModal/>}
      </div>
    </header>
  );
};

export default Header;
