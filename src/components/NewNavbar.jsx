import React from 'react';
import {Button, Container, Navbar, Modal} from 'react-bootstrap';
import { useState, useContext} from 'react';
import { CartContext } from './CartContext';
import CartProducts from '../components/CartProducts';
import './layout/Navbar'
import { Link } from 'react-router-dom';


export default function NewNavbar() {
    const cartList = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productCounts = cartList.cartList.reduce((sum, product) => sum + product.quantity, 0);
    console.log(productCounts);
    // console.log(cartList.cartList);

    // function getCartTotal(amountOfItems) {
    //     return amountOfItems * 10;
    // };

  return (
    <>
        <Navbar expand="sm">
            <Navbar.Brand href='/'>Home</Navbar.Brand>
            <Navbar.Brand href='/shop'>Shop</Navbar.Brand>
            <Navbar.Brand href='/stones'>Stones</Navbar.Brand>
            <Navbar.Brand href='/newsletter'>Newsletter</Navbar.Brand>
            <Navbar.Brand href='/events'>Events</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end"> 
                <Button onClick={handleShow}>Cart {productCounts} Items</Button>
            </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {productCounts > 0 ?
                <>
                    <p>Items in your cart:</p>
                    {cartList.cartList.map((currentProduct, index) => (
                        <CartProducts key={index} id={currentProduct.id} quantity={currentProduct.quantity}></CartProducts>
                    ))}

                    <h1>Total: ${cartList.getTotalCost()}</h1>
                    <Link to='/checkout'>Purchase Items!!</Link>
                </>  
                :
                        <h1>There are no items in your cart!</h1>
                }
            </Modal.Body>
        </Modal>
    </>
    
  )
}