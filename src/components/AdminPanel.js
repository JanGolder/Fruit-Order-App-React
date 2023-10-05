import { useState,useRef } from "react";
import Card from '../UI/Card';
import useInput from '../hooks/use-input';
import classes from "./AdminPanel.module.css";

const defaultProductDetails = {
    id: '',
    name: '',
    img: '',
    desc: '',
    isEco: false,
    location: '',
    price: '',
    unit: '',
    isFreeDelivery: false,
    deliveryAmount: '',
    freeDeliveryAmount: '',
}

const AdminPanel = () => {

const [isFreeDelivery, setIsFreeDelivery] = useState(false);

const [productDetails, setProductDetails] = useState(defaultProductDetails);

const {
  value: nameValue,
  isValid: nameIsValid,
  hasError: nameHasError,
  valueChangeHandler: nameChangeHandler,
  inputBlurHandler: nameBlurHandler,
  reset: nameReset
} = useInput(value=>value.trim() !== '');

const {
  value: imgValue,
  isValid: imgIsValid,
  hasError: imgHasError,
  valueChangeHandler: imgChangeHandler,
  inputBlurHandler: imgBlurHandler,
  reset: imgReset
} = useInput(value=>value.trim() !== '');

const {
  value: descValue,
  isValid: descIsValid,
  hasError: descHasError,
  valueChangeHandler: descChangeHandler,
  inputBlurHandler: descBlurHandler,
  reset: descReset
} = useInput(value=>value.trim() !== '');

const {
  value: isEcoValue,
  isValid: isEcoIsValid,
  hasError: isEcoHasError,
  valueChangeHandler: isEcoChangeHandler,
  inputBlurHandler: isEcoBlurHandler,
  reset: isEcoReset
} = useInput(value=>value.trim() !== '');

const {
  value: locationValue,
  isValid: locationIsValid,
  hasError: locationHasError,
  valueChangeHandler: locationChangeHandler,
  inputBlurHandler: locationBlurHandler,
  reset: locationReset
} = useInput(value=>value.trim() !== '');

const {
  value: priceValue,
  isValid: priceIsValid,
  hasError: priceHasError,
  valueChangeHandler: priceChangeHandler,
  inputBlurHandler: priceBlurHandler,
  reset: priceReset
} = useInput(value=>value.trim() !== '');

const {
  value: unitValue,
  isValid: unitIsValid,
  hasError: unitHasError,
  valueChangeHandler: unitChangeHandler,
  inputBlurHandler: unitBlurHandler,
  reset: unitReset
} = useInput(value=>value.trim() !== '');

const {
  value: isFreeDeliveryValue,
  isValid: isFreeDeliveryIsValid,
  hasError: isFreeDeliveryHasError,
  valueChangeHandler: isFreeDeliveryChangeHandler,
  inputBlurHandler: isFreeDeliveryBlurHandler,
  reset: isFreeDeliveryReset
} = useInput(value=>value.trim() !== '');

const {
  value: deliveryAmountValue,
  isValid: deliveryAmountIsValid,
  hasError: deliveryAmountHasError,
  valueChangeHandler: deliveryAmountChangeHandler,
  inputBlurHandler: deliveryAmountBlurHandler,
  reset: deliveryAmountReset
} = useInput(value=>value.trim() !== '');

const {
  value: freeDeliveryAmountValue,
  isValid: freeDeliveryAmountIsValid,
  hasError: freeDeliveryAmountHasError,
  valueChangeHandler: freeDeliveryAmountChangeHandler,
  inputBlurHandler: freeDeliveryAmountBlurHandler,
  reset: freeDeliveryAmountReset
} = useInput(value=>value.trim() !== '');

let formIsValid = false;

if(nameIsValid && imgIsValid && descIsValid && isEcoIsValid && locationIsValid && priceIsValid && unitIsValid && isFreeDeliveryIsValid && deliveryAmountIsValid && freeDeliveryAmountIsValid){
  formIsValid=true;
}

const submitHandler = (e)=>{
  e.preventDefault();
  console.log(nameValue, imgValue, descValue, isEcoValue, locationValue, priceValue, unitValue, isFreeDeliveryValue, deliveryAmountValue, freeDeliveryAmountValue);
  nameReset();
  imgReset();
  descReset();
  isEcoReset();
  locationReset();
  priceReset();
  unitReset();
  isFreeDeliveryReset();
  deliveryAmountReset();
  freeDeliveryAmountReset();
}


//   const nameRef = useRef("");
//   const descRef = useRef("");
//   const imgDateRef = useRef("");

  return (
    <section className={classes["admin-wrap"]}>
      <div className={classes["main-info"]}>
        <h2>Admin Panel</h2>
        <p>You can add, edit or remove particular announcements</p>
      </div>
      <Card>
        <h3>Add Product</h3>
        <form onSubmit={submitHandler}>
          <div className={classes.element}>
            <label htmlFor="name">Name of product</label>
            <input type="text" id="name" onChange={nameChangeHandler} onBlur={nameBlurHandler} value={nameValue} />
          </div>
          <div className={classes.element}>
            <label htmlFor="desc">Short description</label>
            <textarea rows="2" id="desc" onChange={descChangeHandler} onBlur={descBlurHandler}  value={descValue}></textarea>
          </div>
          <div className={classes.element}>
            <label htmlFor="img">Image</label>
            <input type="text" id="img" onChange={imgChangeHandler} onBlur={imgBlurHandler}  value={imgValue} />
          </div>
          <div className={classes.element}>
            <label htmlFor="eco">Eco farm</label>
            <input type="checkbox" id="eco" onChange={isEcoChangeHandler} onBlur={isEcoBlurHandler}  value={isEcoValue} />
          </div>
          <div className={classes.element}>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" onChange={locationChangeHandler} onBlur={locationBlurHandler}  value={locationValue} />
          </div>
          <div className={classes.element}>
            <label htmlFor="price">Price per unit in PLN</label>
            <input type="number" id="price" onChange={priceChangeHandler} onBlur={priceBlurHandler}  value={priceValue} />
          </div>
          <div className={classes.element}>
            <label htmlFor="unit">Unit</label>
            <select name="unit" id="unit">
              <option value={unitValue}>Please choose an option</option>
              <option value="g">g</option>
              <option value="kg">kg</option>
              <option value="pcs">pcs</option>
            </select>
          </div>
          <div className={classes.element}>
            <label htmlFor="freedelivery">Free delivery</label>
            <input onClick={()=>{setIsFreeDelivery(!isFreeDelivery)}} onChange={isFreeDeliveryChangeHandler} onBlur={isFreeDeliveryBlurHandler} className={classes.freedelivery} type="checkbox" id="freedelivery" value={isFreeDeliveryValue} />
          </div>
          {isFreeDelivery && <div className={classes.element}>
            <label htmlFor="freedeliveryamount">
              Free delivery amount in PLN
            </label>
            <input className="freedeliveryamount" type="number" id="freedeliveryamount" onChange={freeDeliveryAmountChangeHandler} onBlur={freeDeliveryAmountBlurHandler}  value={freeDeliveryAmountValue} />
          </div>}

          <div className={classes.element}>
            <label htmlFor="deliveryamount">Delivery amount in PLN</label>
            <input type="number" id="deliveryamount" onChange={deliveryAmountChangeHandler} onBlur={deliveryAmountBlurHandler}  value={deliveryAmountValue} />
          </div>
          <button className={classes.button}>Add Product</button>
        </form>
      </Card>


      {/* add new product - inputs
                edit / remove products - list of products with filter, action when clicked*/}
    </section>
  );
};

export default AdminPanel;
