import { useContext } from "react";
import { Outlet} from "react-router-dom";
import Login from "./Login";
import ProductList from "./ProductList";
import AuthContext from "../context/auth-context";


const Main = ()=>{

const ctx = useContext(AuthContext);

    return (
        <main>
            {!ctx.isLoggedIn && <Login/>}
            {ctx.isLoggedIn && <ProductList/>}
            {ctx.isLoggedIn && <Outlet/>}
        </main>
    );
}

export default Main;