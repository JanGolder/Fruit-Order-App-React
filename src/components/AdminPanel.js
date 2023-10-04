import { useState,useRef } from "react";
import Card from '../UI/Card';
import classes from "./AdminPanel.module.css";

const AdminPanel = () => {

    const [isFreeDelivery, setIsFreeDelivery] = useState(false);

  const nameRef = useRef("");
  const descRef = useRef("");
  const imgDateRef = useRef("");

  return (
    <section className={classes["admin-wrap"]}>
      <div className={classes["main-info"]}>
        <h2>Admin Panel</h2>
        <p>You can add, edit or remove particular announcements</p>
      </div>
      <Card>
        <h3>Add Product</h3>
        <form>
          <div className={classes.element}>
            <label htmlFor="name">Name of product</label>
            <input type="text" id="name" ref={nameRef} />
          </div>
          <div className={classes.element}>
            <label htmlFor="desc">Short description</label>
            <textarea rows="2" id="desc" ref={descRef}></textarea>
          </div>
          <div className={classes.element}>
            <label htmlFor="img">Image</label>
            <input type="text" id="img" ref={imgDateRef} />
          </div>
          <div className={classes.element}>
            <label htmlFor="eco">Eco farm</label>
            <input type="checkbox" id="eco" ref={imgDateRef} />
          </div>
          <div className={classes.element}>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" ref={imgDateRef} />
          </div>
          <div className={classes.element}>
            <label htmlFor="price">Price per unit in PLN</label>
            <input type="number" id="price" ref={imgDateRef} />
          </div>
          <div className={classes.element}>
            <label htmlFor="unit">Unit</label>
            <select name="unit" id="unit">
              <option value="">Please choose an option</option>
              <option value="g">g</option>
              <option value="kg">kg</option>
              <option value="pcs">pcs</option>
            </select>
          </div>
          <div className={classes.element}>
            <label htmlFor="freedelivery">Free delivery</label>
            <input onClick={()=>{setIsFreeDelivery(!isFreeDelivery)}} className={classes.freedelivery} type="checkbox" id="freedelivery" ref={imgDateRef} />
          </div>
          {!isFreeDelivery && <div className={classes.element}>
            <label htmlFor="freedeliveryamount">
              Free delivery amount in PLN
            </label>
            <input className="freedeliveryamount" type="number" id="freedeliveryamount" ref={imgDateRef} />
          </div>}

          <div className={classes.element}>
            <label htmlFor="deliveryamount">Delivery amount in PLN</label>
            <input type="number" id="deliveryamount" ref={imgDateRef} />
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

// id: "1",
// name: "Onion",
// img: "https://www.diggers.com.au/cdn/shop/products/onion-creamgold-s1531_872401bb-5942-4b5e-b76b-dac29777ccf5_800x.jpg?v=1637121555",
// desc: "Homegrown eco onion",
// isEco: true,
// location: "Kartuzy, Gospodarstwo Rolne Lucyna Falska",
// price: 15,
// unit: "kg",
// isFreeDelivery: true,
// deliveryAmount: 15,
// freeDeliveryAmount: 100,
