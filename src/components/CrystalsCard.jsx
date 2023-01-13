import React from 'react'
export default function CrystalsCard(props) {
  return <>
  <div>
    <img src={props.imageurl} alt={props.name}/>
    <p>{props.name}</p>
  </div>
</>
}
