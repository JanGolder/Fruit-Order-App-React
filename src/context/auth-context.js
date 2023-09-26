import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  productsInCart: {},
  summaryData: {},
  isLoggedIn: false,
  totalPrice: 0,
  totalDeliveryPrice: 0,
  onLogout: () => {},
  onLogin: () => {},
  onModalActive: () => {},
  productsCartUpdate: () => {},
});

export const AuthContextProvider = (props) => {
  const [productsInCart, setProductsInCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDeliveryPrice, setTotalDeliveryPrice] = useState(0);

  useEffect(() => {
    const storedUserLogInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLogInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    let currentTotalPrice = 0;
    let currentTotalDeliveryPrice = 0;

    productsInCart.forEach((product) => {
      if (product.price >= product.productDetail.freeDeliveryAmount) {
        currentTotalPrice += product.price;
        currentTotalDeliveryPrice += 0;
      } else {
        currentTotalPrice += product.price;
        currentTotalDeliveryPrice += product.deliveryPrice;
      }
    });

    setTotalDeliveryPrice(currentTotalDeliveryPrice);
    setTotalPrice(currentTotalPrice + currentTotalDeliveryPrice);

  }, [productsInCart]);

  const modalActiveHandler = () => {
    setIsModalActive((isModalActive) => !isModalActive);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const productsCartUpdate = (data, type, inputAmount) => {
    const reapetedProductIndex = productsInCart.findIndex(
      (product) => product.productDetail.id === data.productDetail.id
    );

    const reapetedProduct = productsInCart[reapetedProductIndex];
    let updatedItems;

    if (reapetedProduct) {
      if (type === "add") {
        const updatedItem = {
          ...reapetedProduct,
          amount:
            productsInCart[reapetedProductIndex].amount * 1 + inputAmount * 1,
          price:
            (productsInCart[reapetedProductIndex].amount * 1 +
              inputAmount * 1) *
            productsInCart[reapetedProductIndex].productDetail.price,
        };
        updatedItems = [...productsInCart];
        updatedItems[reapetedProductIndex] = updatedItem;

        setProductsInCart(updatedItems);
      } else if (type === "subtract") {
        if((productsInCart[reapetedProductIndex].amount * 1 - inputAmount * 1)>0){
        const updatedItem = {
          ...reapetedProduct,
          amount:
            productsInCart[reapetedProductIndex].amount * 1 - inputAmount * 1,
          price:
            (productsInCart[reapetedProductIndex].amount * 1 -
              inputAmount * 1) *
            productsInCart[reapetedProductIndex].productDetail.price,
        };
        updatedItems = [...productsInCart];
        updatedItems[reapetedProductIndex] = updatedItem;

        setProductsInCart(updatedItems);          
        } else {
          const newProductsInCart = productsInCart.filter(product=>product.productDetail.id !== data.productDetail.id);
          setProductsInCart(newProductsInCart);   
        }
      }
    } else {
      setProductsInCart((prevState) => [...prevState, data]);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        productsInCart: productsInCart,
        totalPrice,
        totalDeliveryPrice,
        cartUpdate: productsCartUpdate,
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
