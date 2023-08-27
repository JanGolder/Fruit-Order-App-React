import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  productsInCart: [],
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
  onModalActive: ()=>{},
  productsCartUpdate: ()=>{},
});

export const AuthContextProvider = (props) => {
  const [productsInCart, setProductsInCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    const storedUserLogInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLogInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const modalActiveHandler = ()=>{
    setIsModalActive(isModalActive=> !isModalActive);
  }

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

const productsCartUpdate = (data, type, inputAmount)=>{
  
  const reapetedProductIndex = productsInCart.findIndex(product=> product.productDetail.id === data.productDetail.id);
  
  const reapetedProduct = productsInCart[reapetedProductIndex];
  let updatedItems;

  if(reapetedProduct){

    if(type === 'add'){
      const updatedItem = {
        ...reapetedProduct,
        amount: productsInCart[reapetedProductIndex].amount*1 + inputAmount*1
      };
      updatedItems = [...productsInCart];
      updatedItems[reapetedProductIndex] = updatedItem;
  
      setProductsInCart(updatedItems);
    } else if (type === 'subtract'){
      const updatedItem = {
        ...reapetedProduct,
        amount: productsInCart[reapetedProductIndex].amount*1 - inputAmount*1
      };
      updatedItems = [...productsInCart];
      updatedItems[reapetedProductIndex] = updatedItem;
  
      setProductsInCart(updatedItems)
    }
  }
 else{
   setProductsInCart(prevState=> [...prevState,data]);
 }
 console.log(productsInCart)
}

  return (
    <AuthContext.Provider
      value={{
        productsInCart:productsInCart,
        cartUpdate:productsCartUpdate,
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        isModalActive: isModalActive,
        onModalActive: modalActiveHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
