import Product from "./Product";
import Card from "../UI/Card";
import classes from "./ProductList.module.css";

const products = [
  {
    id: "1",
    name: "Onion",
    img: "https://www.diggers.com.au/cdn/shop/products/onion-creamgold-s1531_872401bb-5942-4b5e-b76b-dac29777ccf5_800x.jpg?v=1637121555",
    desc: "Homegrown eco onion",
    isEco: true,
    location: "Kartuzy, Gospodarstwo Rolne Lucyna Falska",
    price: 15,
    unit: "kg",
    isFreeDelivery: true,
    freeDeliveryAmount: 100,
  },
  {
    id: "2",
    name: "Carrot",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfNay7fZM7-uyZZRRPmOEuNCeVUDYAKyr9Q&usqp=CAU",
    desc: "Homegrown eco carrots",
    isEco: true,
    location: "Kartuzy, Gospodarstwo Rolne Lucyna Falska",
    price: 10,
    unit: "kg",
    isFreeDelivery: true,
    freeDeliveryAmount: 100,
  },
  {
    id: "3",
    name: "Potato",
    img: "https://assets.bonappetit.com/photos/5d7284758d926f0009df5cfc/1:1/w_2532,h_2532,c_limit/Basically-Gojuchang-Chicken-Potato.jpg",
    desc: "Homegrown eco potatos",
    isEco: true,
    location: "Kartuzy, Gospodarstwo Rolne Lucyna Falska",
    price: 8,
    unit: "kg",
    isFreeDelivery: true,
    freeDeliveryAmount: 100,
  },
  {
    id: "4",
    name: "Kohlrabi",
    img: "https://www.bittertreats.com/wp-content/uploads/2021/05/kohlrabi-1024x1024.jpg",
    desc: "Homegrown, fresh kolhrabi",
    isEco: false,
    location: "Żukowo, Gospodarstwo Rolne Andrzej Halski",
    price: 3,
    unit: "szt",
    isFreeDelivery: true,
    freeDeliveryAmount: 100,
  },
];

const ProductList = () => {
  return (
    <section className={classes['product-list']}>
      <Card>
        <h1>Order Fresh Fruits and Vegetables from your neighborhood!</h1>
        <select name="location">
            <option value="" disabled selected>Choose Your Location</option>
            <option value="pomorskie">pomorskie</option>
            <option value="mazowieckie">mazowieckie</option>
        </select>
        <input type="text" placeholder="Find Products"/>
        <ul>
          {products.map((product) => {
            return <Product key={product.id} productData={product} />;
          })}
        </ul>
      </Card>
    </section>
  );
};

export default ProductList;
