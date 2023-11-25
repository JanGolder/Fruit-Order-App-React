import { useState, useCallback, useEffect } from "react";
import Product from "./Product";
import Card from "../UI/Card";
import classes from "./ProductList.module.css";

const ProductList = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [chosenLocation, setChosenLocation] = useState('all');
  const [filteredName, setfilteredName] = useState('');
  const [newProducts,setNewProducts] = useState([]);

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
      setNewProducts(loadedProducts);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  const voivodeshipHandler = (e)=>{
    setChosenLocation(e.target.value);
    if(e.target.value === 'all'){
      setNewProducts(products);
    } else{
    const filteredProducts = products.filter(product => product.voivodeship === e.target.value && product.name.toLowerCase().includes(filteredName.toLowerCase()));
      setNewProducts(filteredProducts);      
    }

  }

  const findProductsHandler = (e) =>{
      setfilteredName(e.target.value);
      if(chosenLocation === 'all'){
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setNewProducts(filteredProducts);       
      } else {
      const filteredProducts = products.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()) && product.voivodeship === chosenLocation);
        setNewProducts(filteredProducts);        
      }

      console.log()
  }


  return (
    <section className={classes['product-list']}>
      <Card>
        <h1>Order Fresh Fruits and Vegetables from your neighborhood!</h1>
        <select name="location" defaultValue="all" onChange={voivodeshipHandler}>
            <option value="all" disabled>Choose Your Location</option>
             <option value="all">all locations</option>
             <option value="pomorskie">pomorskie</option>
            <option value="mazowieckie">mazowieckie</option>
        </select>
        <input type="text" placeholder="Find Products" onChange={findProductsHandler}/>
        <ul>
          {isLoading && <p className={classes.loader}>Loading...</p>}
          {newProducts.map((product) => {
            return <Product key={product.id} productData={product} />
          })}
        </ul>
      </Card>
    </section>
  );
};

export default ProductList;
