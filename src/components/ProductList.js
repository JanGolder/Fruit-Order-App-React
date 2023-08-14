import Product from "./Product";
import classes from './ProductList.module.css';

const products = [
    {
        id: '1',
        name: 'Onion',
        img: '/imgs/1',
        desc: 'Homegrown eco onion',
        isEco: true,
        location: 'Kartuzy, Gospodarstwo Rolne Lucyna Falska',
        price: 15,
        unit: 'kg',
        isFreeDelivery: true,
        freeDeliveryAmount: 100,
    },
    {
        id: '2',
        name: 'Parot',
        img: '/imgs/1',
        desc: 'Homegrown eco parots',
        isEco: true,
        location: 'Kartuzy, Gospodarstwo Rolne Lucyna Falska',
        price: 10,
        unit: 'kg',
        isFreeDelivery: true,
        freeDeliveryAmount: 100,
    },
    {
        id: '3',
        name: 'Potato',
        img: '/imgs/1',
        desc: 'Homegrown eco potatos',
        isEco: true,
        location: 'Kartuzy, Gospodarstwo Rolne Lucyna Falska',
        price: 8,
        unit: 'kg',
        isFreeDelivery: true,
        freeDeliveryAmount: 100,
    }
]



const ProductList = ()=>{

return (

    <ul className={classes['product-list']}>
        {products.map(product=>{
            return (
                <Product key={product.id} productData={product}/>
            )
        })}
    </ul>

)

};

export default ProductList;