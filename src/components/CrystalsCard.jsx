import React from 'react';
// import { Card } from "react-bootstrap";


export default function CrystalsCard(props) {

  return <>
  <div>
    <img src={props.imageurl} alt={props.name}/>
    <p>{props.name}</p>
  </div>
</>

  // const crystals = props.crystal;

//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <Card.Title>{crystals.name}</Card.Title>
//           <Card.Img variant="top" src={crystals.imageurl} />
//           <Card.Text>{crystals.description}</Card.Text>
//         </Card.Body>
//       </Card>
//     </>
//   );
// }


}
