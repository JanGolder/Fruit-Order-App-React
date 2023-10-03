import { useRef } from "react";
import classes from "./AdminPanel.module.css";

const AdminPanel = () => {


    const nameRef = useRef('');
    const descRef = useRef('');
    const imgDateRef = useRef('');



  return (
    <section className={classes["admin-wrap"]}>
      <h2>Admin Panel</h2>
      <p>You can add, edit or remove particular announcements</p>
      <h3>Add Product</h3>
      <form>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="desc">Description</label>
          <textarea rows="2" id="desc" ref={descRef}></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="img">Image</label>
          <input type="text" id="img" ref={imgDateRef} />
        </div>
        <button>Add Product</button>
      </form>
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
