import { useCallback, useState, useEffect } from "react";
import ShortProduct from "./ShortProduct";
import classes from './ShortProductList.module.css';


const ShortProductList =(props)=>{

  const {onRemoveProduct, products} = props

    // const [isLoading, setIsLoading] = useState(false);
    // const [products, setProducts] = useState([]);
    // const [error, setError] = useState(false);

    // const fetchProductsHandler = useCallback(async () => {
    //     setIsLoading(true);
    //     setError(null);
    //     try {
    //       const response = await fetch(
    //         "https://greenfood-3fadf-default-rtdb.firebaseio.com/products.json"
    //       );
    //       if (!response.ok) {
    //         throw new Error("Something went wrong!");
    //       }
    //       const data = await response.json();
    //       const loadedProducts = [];
    
    //       for (const key in data) {
    //         loadedProducts.push({
    //           id: key,
    //           name: data[key].name,
    //           location: data[key].location,
    //           voivodeship: data[key].voivodeship,
    //         });
    //       }
    //       setProducts(loadedProducts);
    //     } catch (error) {
    //       setError(error.message);
    //     }
    //     setIsLoading(false);
    //   }, []);
    
    //   useEffect(() => {
    //     fetchProductsHandler();
    //   }, [fetchProductsHandler]);

    //   const removeProductHandler = (id)=>{
    //     const newProducts = products.filter(product => product.id !== id);
    //     setProducts(newProducts);
    //   }

    return (
        <>
            <h3>Edit/Remove Product</h3>
            <ul className={classes['product-list']}>
            {products.map((product) => {
            return <ShortProduct key={product.id} productData={product} onRemoveProduct={onRemoveProduct}/>
          })}
            </ul>
        </>

    );
};

export default ShortProductList;