import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions';
import '../index.css';


export default function ProductCard(props) {

  const [selectValue, setSelectValue] = useState("1");
  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
  };

  const dispatch = useDispatch();

  // useEffect(() => {

  // },[cart])

  function myFunction(imageurl, name, quantity) {
    alert('This was added');
    console.log(quantity);
    dispatch(addToCart({image:imageurl, name:name, quantity:quantity}));
  }

  
  return <>
    <div className="card">
      <img className="small"src={props.imageurl} alt={props.name}/>
      <h3>{props.name}</h3>
      <h3>$10</h3>
      <h3>{props.quantity}</h3>
      <select onChange={onChange} className="form-select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button onClick={() => {
          myFunction(props.imageurl, props.name, selectValue)
          console.log(selectValue)
        }}>Add to Cart</button>
    </div>
  </>
}