import { Outlet } from "react-router-dom";
import Login from "./Login";
import ProductList from "./ProductList";

const Main = ()=>{

    return (
        <main>
            {/* <Login/> */}
            {<ProductList/>}
            {<Outlet/>}
        </main>

    );
}

export default Main;