import { useState } from "react";
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

const [isFreeDeliveryValue, setIsFreeDelivery] = useState(false);
const [isEcoValue, setIsEcoValue] = useState(false);

// const [productDetails, setProductDetails] = useState(defaultProductDetails);

const {
  inputValue: nameValue,
  isValid: nameIsValid,
  hasError: nameHasError,
  valueChangeHandler: nameChangeHandler,
  inputBlurHandler: nameBlurHandler,
  reset: nameReset
} = useInput(value=>value.trim() !== '');

const {
  inputValue: imgValue,
  isValid: imgIsValid,
  hasError: imgHasError,
  valueChangeHandler: imgChangeHandler,
  inputBlurHandler: imgBlurHandler,
  reset: imgReset
} = useInput(value=>value.trim() !== '');

const {
  inputValue: descValue,
  isValid: descIsValid,
  hasError: descHasError,
  valueChangeHandler: descChangeHandler,
  inputBlurHandler: descBlurHandler,
  reset: descReset
} = useInput(value=>value.trim() !== '');

// const {
//   inputValue: isEcoValue,
//   isValid: isEcoIsValid,
//   hasError: isEcoHasError,
//   valueChangeHandler: isEcoChangeHandler,
//   inputBlurHandler: isEcoBlurHandler,
//   reset: isEcoReset
// } = useInput(value=>value.trim() !== '');

const {
  inputValue: locationValue,
  isValid: locationIsValid,
  hasError: locationHasError,
  valueChangeHandler: locationChangeHandler,
  inputBlurHandler: locationBlurHandler,
  reset: locationReset
} = useInput(value=>value.trim() !== '');

const {
  inputValue: priceValue,
  isValid: priceIsValid,
  hasError: priceHasError,
  valueChangeHandler: priceChangeHandler,
  inputBlurHandler: priceBlurHandler,
  reset: priceReset
} = useInput(value=>value.trim() !== '');

const {
  inputValue: unitValue,
  isValid: unitIsValid,
  hasError: unitHasError,
  valueChangeHandler: unitChangeHandler,
  inputBlurHandler: unitBlurHandler,
  reset: unitReset
} = useInput(value=>value.trim() !== '');

// const {
//   inputValue: isFreeDeliveryValue,
//   isValid: isFreeDeliveryIsValid,
//   hasError: isFreeDeliveryHasError,
//   valueChangeHandler: isFreeDeliveryChangeHandler,
//   inputBlurHandler: isFreeDeliveryBlurHandler,
//   reset: isFreeDeliveryReset
// } = useInput(value=>value.trim() !== '');

const {
  inputValue: deliveryAmountValue,
  isValid: deliveryAmountIsValid,
  hasError: deliveryAmountHasError,
  valueChangeHandler: deliveryAmountChangeHandler,
  inputBlurHandler: deliveryAmountBlurHandler,
  reset: deliveryAmountReset
} = useInput(value=>value.trim() !== '');

const {
  inputValue: freeDeliveryAmountValue,
  isValid: freeDeliveryAmountIsValid,
  hasError: freeDeliveryAmountHasError,
  valueChangeHandler: freeDeliveryAmountChangeHandler,
  inputBlurHandler: freeDeliveryAmountBlurHandler,
  reset: freeDeliveryAmountReset
} = useInput(value=>value.trim() !== '');

let formIsValid = false;

// ADD Unit Validation (unitIsValid)
if(nameIsValid && imgIsValid && descIsValid && locationIsValid && priceIsValid && deliveryAmountIsValid && freeDeliveryAmountIsValid){
  formIsValid=true;
}

const submitHandler = (e)=>{
  e.preventDefault();
  console.log(nameValue, imgValue, descValue, isEcoValue, locationValue, priceValue, unitValue, isFreeDeliveryValue, deliveryAmountValue, freeDeliveryAmountValue);
  nameReset();
  imgReset();
  descReset();
  setIsFreeDelivery(false);
  // isEcoReset();
  locationReset();
  priceReset();
  unitReset();
  setIsEcoValue(false);
  // isFreeDeliveryReset();
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
const locationInputClasses = locationHasError
? "form-control invalid"
: "form-control";
const priceInputClasses = priceHasError
? "form-control invalid"
: "form-control";
const unitInputClasses = unitHasError
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
          <div className={nameInputClasses}>
            <label htmlFor="name">Name of product</label>
            <input type="text" id="name" onChange={nameChangeHandler} onBlur={nameBlurHandler} value={nameValue} />
            {nameHasError && <p>Please write correct name.</p>}
          </div>
          <div className={descInputClasses}>
            <label htmlFor="desc">Short description</label>
            <textarea rows="2" id="desc" onChange={descChangeHandler} onBlur={descBlurHandler} value={descValue}></textarea>
            {descHasError && <p>Please add short description.</p>}
          </div>
          <div className={imgInputClasses}>
            <label htmlFor="img">Image</label>
            <input type="text" id="img" onChange={imgChangeHandler} onBlur={imgBlurHandler} value={imgValue} />
            {imgHasError && <p>Please add img in http format.</p>}
          </div>
          <div className='form-control'>
            <label htmlFor="eco">Eco farm</label>
            <input type="checkbox" id="eco" onChange={()=>{setIsEcoValue(!isEcoValue)}} checked={isEcoValue}  value={isEcoValue} />
          </div>
          <div className={locationInputClasses}>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" onChange={locationChangeHandler} onBlur={locationBlurHandler}  value={locationValue} />
            {locationHasError && <p>Please write farms location.</p>}
          </div>
          <div className={priceInputClasses}>
            <label htmlFor="price">Price per unit in PLN</label>
            <input type="number" id="price" onChange={priceChangeHandler} onBlur={priceBlurHandler}  value={priceValue} />
            {priceHasError && <p>Please write price per unit.</p>}
          </div>
          <div className={unitInputClasses}>
            <label htmlFor="unit">Unit</label>
            <select name="unit" id="unit">
              <option value={unitValue}>Please choose an option</option>
              <option value="g">g</option>
              <option value="kg">kg</option>
              <option value="pcs">pcs</option>
            </select>
            {unitHasError && <p>Please choose unit.</p>}
          </div>
          <div className='form-control'>
            <label htmlFor="freedelivery">Free delivery</label>
            <input checked={isFreeDeliveryValue} onChange={()=>{setIsFreeDelivery(!isFreeDeliveryValue)}} className={classes.freedelivery} type="checkbox" id="freedelivery" value={isFreeDeliveryValue} />
          </div>
          {isFreeDeliveryValue && <div className={freeDeliveryAmountInputClasses}>
            <label htmlFor="freedeliveryamount">
              Free delivery amount in PLN
            </label>
            <input className="freedeliveryamount" type="number" id="freedeliveryamount" onChange={freeDeliveryAmountChangeHandler} onBlur={freeDeliveryAmountBlurHandler}  value={freeDeliveryAmountValue} />
          </div>}

          <div className={deliveryAmountInputClasses}>
            <label htmlFor="deliveryamount">Delivery amount in PLN</label>
            <input type="number" id="deliveryamount" onChange={deliveryAmountChangeHandler} onBlur={deliveryAmountBlurHandler}  value={deliveryAmountValue} />
            {deliveryAmountHasError && <p>Please write delivery amount.</p>}
          </div>
          {/* <button disabled={!formIsValid} className={classes.button}>Add Product</button> */}
          <button className={classes.button}>Add Product</button>
        </form>
      </Card>

    </section>
  );
};

export default AdminPanel;
