import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  productsInCart: [],
  isLoggedIn: false,
  hasProducts: false,
  onLogout: () => {},
  onLogin: () => {},
  onModalActive: ()=>{},
  productsCartUpdate: ()=>{},
});

export const AuthContextProvider = (props) => {
  const [productsInCart, setProductsInCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [hasProducts, setHasProducts] = useState(true);

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

const productsCartUpdate = (data)=>{
  setProductsInCart(prevState=> [...prevState,data]);
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
        hasProducts:hasProducts,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
