import { useCallback, useState, useEffect } from "react";
import Card from "../UI/Card";


const ShortProductList =()=>{

    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState();
    const [error, setError] = useState(false);

    const fetchProductsHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(
            "https://greenfood-3fadf-default-rtdb.firebaseio.com/products.json"
          );
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
          const data = await response.json();
          const loadedProducts = [];
    
          for (const key in data) {
            loadedProducts.push({
              id: key,
              name: data[key].name,
              img: data[key].img,
              desc: data[key].desc,
              isEco: data[key].eco,
              location: data[key].location,
              voivodeship: data[key].voivodeship,
              price: data[key].price,
              unit: data[key].unit,
              isFreeDelivery: data[key].isFreeDelivery,
              freeDeliveryAmount: data[key].freeDeliveryAmount,
            });
          }
          setProducts(loadedProducts);
        } catch (error) {
          setError(error.message);
        }
        setIsLoading(false);
      }, []);
    
      useEffect(() => {
        fetchProductsHandler();
      }, [fetchProductsHandler]);



    return (
        <>
            <h3>Edit/Remove Product</h3>

        </>

    );
};

export default ShortProductList;