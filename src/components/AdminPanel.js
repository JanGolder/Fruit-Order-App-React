import { useState,useRef } from "react";
import Card from '../UI/Card';
import useInput from '../hooks/use-input';
import classes from "./AdminPanel.module.css";

// const defaultProductDetails = {
//     id: '',
//     name: '',
//     img: '',
//     desc: '',
//     isEco: false,
//     location: '',
//     price: '',
//     unit: '',
//     isFreeDelivery: false,
//     deliveryAmount: '',
//     freeDeliveryAmount: '',
// }

const AdminPanel = () => {

const [isFreeDelivery, setIsFreeDelivery] = useState(false);

// const [productDetails, setProductDetails] = useState(defaultProductDetails);

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

const nameInputClasses = nameHasError
? "form-control invalid"
: "form-control";
const imgInputClasses = imgHasError
? "form-control invalid"
: "form-control";
const descInputClasses = descHasError
? "form-control invalid"
: "form-control";
const isEcoInputClasses = isEcoHasError
? "form-control invalid"
: "form-control";
const locationInputClasses = locationHasError
? "form-control invalid"
: "form-control";
const priceInputClasses = priceHasError
? "form-control invalid"
: "form-control";
const unitInputClasses = unitHasError
? "form-control invalid"
: "form-control";
const isFreeDeliveryInputClasses = isFreeDeliveryHasError
? "form-control invalid"
: "form-control";
const deliveryAmountInputClasses = deliveryAmountHasError
? "form-control invalid"
: "form-control";
const freeDeliveryAmountInputClasses = freeDeliveryAmountHasError
? "form-control invalid"
: "form-control";

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
            {nameHasError && <p>Please write correct name.</p>}
          </div>
          <div className={classes.element}>
            <label htmlFor="desc">Short description</label>
            <textarea rows="2" id="desc" onChange={descChangeHandler} onBlur={descBlurHandler}  value={descValue}></textarea>
            {nameHasError && <p>Please add short description.</p>}
          </div>
          <div className={classes.element}>
            <label htmlFor="img">Image</label>
            <input type="text" id="img" onChange={imgChangeHandler} onBlur={imgBlurHandler}  value={imgValue} />
            {nameHasError && <p>Please add img in http format.</p>}
          </div>
          <div className={classes.element}>
            <label htmlFor="eco">Eco farm</label>
            <input type="checkbox" id="eco" onChange={isEcoChangeHandler} onBlur={isEcoBlurHandler}  value={isEcoValue} />
          </div>
          <div className={classes.element}>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" onChange={locationChangeHandler} onBlur={locationBlurHandler}  value={locationValue} />
            {nameHasError && <p>Please write farms location.</p>}
          </div>
          <div className={classes.element}>
            <label htmlFor="price">Price per unit in PLN</label>
            <input type="number" id="price" onChange={priceChangeHandler} onBlur={priceBlurHandler}  value={priceValue} />
            {nameHasError && <p>Please write price per unit.</p>}
          </div>
          <div className={classes.element}>
            <label htmlFor="unit">Unit</label>
            <select name="unit" id="unit">
              <option value={unitValue}>Please choose an option</option>
              <option value="g">g</option>
              <option value="kg">kg</option>
              <option value="pcs">pcs</option>
            </select>
            {nameHasError && <p>Please choose unit.</p>}
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
            {nameHasError && <p>Please write delivery amount.</p>}
          </div>
          <button disabled={!formIsValid} className={classes.button}>Add Product</button>
        </form>
      </Card>

    </section>
  );
};

export default AdminPanel;
