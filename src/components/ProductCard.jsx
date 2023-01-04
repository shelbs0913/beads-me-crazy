import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions';

export default function ProductCard(props) {

  const cartList = useSelector(state => state);
  console.log(cartList);
  const dispatch = useDispatch();

function myFunction(imageurl, name) {
    alert('This was added');
    console.log(imageurl);
    console.log(name);
    dispatch(addToCart({image:imageurl, name:name}));
}
  
  return <>
    <div>
      <img src={props.imageurl} alt={props.name}/>
      <p>{props.name}</p>
      <button onClick={() => myFunction(props.imageurl, props.name)}>Add to Cart</button>
    </div>
  </>
}
