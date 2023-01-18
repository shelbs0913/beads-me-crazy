import React from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { getProductData} from "./ProductsStore";


export default function CartProducts(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
    
    return <>
    <h4>{productData.name}</h4>
    <p>{quantity} total</p>
    <p>${ (quantity * productData.price) }</p>
    <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
    <hr></hr>
    </> 
    
  
}
