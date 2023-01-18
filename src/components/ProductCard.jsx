import React, { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { useContext } from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../actions';
import "../index.css";

export default function ProductCard(props) {

    const product = props.product;
    const cartList = useContext(CartContext);
    const productQuantity = cartList.getProductQuantity(product.id);
    // console.log(cartList.items);

  return (
    <>
      <Card>
        <Card.Body>
          {/* <img className="small" src={props.imageurl} alt={props.name} /> */}
          <Card.Title>{product.name}</Card.Title>
          <Card.Img variant="top" src={product.imageurl} />
          <Card.Text>${product.price}</Card.Text>
          {productQuantity > 0 ? 
          <>
            <Form as={Row}>
              <Form.Label column='true' sm="6">In Cart: {productQuantity}</Form.Label>
              <Col sm="6">
                <Button sm="6" onClick={() => cartList.addOneToCart(product.id)} className="mx-2">+</Button>
                <Button sm="6" onClick={() => cartList.removeOneFromCart(product.id)} className="mx-2">-</Button>
              </Col>
            </Form>
            <Button variant="danger" onClick={() => cartList.deleteFromCart(product.id)} className="my-2">Remove from Cart</Button>
          </>
          :
          <Button variant="primary" onClick={() => cartList.addOneToCart(product.id)}>Add to Cart</Button>
        }
          
        </Card.Body>
      </Card>
    </>
  );
}

  // const [selectValue, setSelectValue] = useState("1");
  // const onChange = (event) => {
  //   const value = event.target.value;
  //   setSelectValue(value);
  // };

  // const dispatch = useDispatch();

  // // useEffect(() => {

  // // },[cart])

  // function myFunction(imageurl, name, quantity) {
  //   alert("This was added to your cart!");
  //   console.log(quantity);
  //   dispatch(addToCart({image:imageurl, name:name, quantity:quantity}));
  // }
 // myFunction(props.imageurl, props.name, selectValue);
// console.log(selectValue);
    // {/* <h3>{props.quantity}</h3> */}
    //       {/* <select onChange={onChange} className="form-select">
    //         <option value="1">1</option>
    //         <option value="2">2</option>
    //         <option value="3">3</option>
    //         <option value="4">4</option>
    //       </select> */}