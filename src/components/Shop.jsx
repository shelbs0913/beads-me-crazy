import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { productArray } from './ProductsStore';
import ProductCard from './ProductCard';
import Footer from './Footer/Footer';
import "../index.css";
// import alaska from '../assets/images/alaska.jpg';
// import blue from '../assets/images/blue.jpg';
// import classicblackandgold from '../assets/images/classicblackandgold.jpg';
// import drawstringSS from '../assets/images/drawstringSS.jpg';
// import earth from '../assets/images/earth.jpg';
// import fall from '../assets/images/fall.jpg';
// import fall2 from '../assets/images/fall2.jpg';
// import frostedgreen from '../assets/images/frostedgreen.jpg';
// import galaxy from '../assets/images/galaxy.jpg';
// import greentea from '../assets/images/greentea.jpg';
// import jade from '../assets/images/jade.jpg';
// import jasper from '../assets/images/jasper.jpg';
// import jodeci from '../assets/images/jodeci.jpg';
// import mars from '../assets/images/mars.jpg';
// import mossgreen from '../assets/images/mossgreen.jpg';
// import OGsolarsystem from '../assets/images/OGsolarsystem.jpg';
// import orangelotus from '../assets/images/orangelotus.jpg';
// import oxy from '../assets/images/oxy.jpg';
// import peace from '../assets/images/peace.jpg';
// import pearlicious from '../assets/images/pearlicious.jpg';
// import protection from '../assets/images/protection.jpg';
// import protection1 from '../assets/images/protection1.jpg';
// import protection2 from '../assets/images/protection2.jpg';
// import purple from '../assets/images/purple.jpg';
// import purplelotus from '../assets/images/purplelotus.jpg';
// import purpleprotection from '../assets/images/purpleprotection.jpg';
// import Queendom from '../assets/images/Queendom.jpg';
// import redlotus from '../assets/images/redlotus.jpg';
// import strawberrycream from '../assets/images/strawberrycream.jpg';
// import summerblues from '../assets/images/summerblues.jpg';
// import summerrays from '../assets/images/summerrays.jpg';
// import summershells from '../assets/images/summershells.jpg';
// import summersunset from '../assets/images/summersunset.jpg';
// import sundial from '../assets/images/sundial.jpg';
// import tigerlotus from '../assets/images/tigerlotus.jpg';
// import unicorn from '../assets/images/unicorn.jpg';
// import vixen from '../assets/images/vixen.jpg';
// import wysteria from '../assets/images/wysteria.jpg';
// import yellowlotus from '../assets/images/yellowlotus.jpg';


export default function Shop() {
  return <>
    <div>
      <h1 align="center" className="p-3">Shop Now</h1>
        <Row xs={1} md={4} className="g-4">
          {productArray.map((product, index) => (
             <Col align="center" key={index}>
             <ProductCard product={product} />
           </Col>
          ))}
        </Row>
    </div>
    <Footer />
  </>
}

//  {/* <div className='grid-container'>
//         <ProductCard imageurl={alaska} name="Alaska" />
//         <ProductCard imageurl={blue} name="Blue" />
//         <ProductCard imageurl={classicblackandgold} name="Classic Black and Gold" />
//         <ProductCard imageurl={drawstringSS} name="Drawstring Solar System" />
//         <ProductCard imageurl={earth} name="Earth" />
//         <ProductCard imageurl={fall} name="Fall" />
//         <ProductCard imageurl={fall2} name="Fall2" />
//         <ProductCard imageurl={frostedgreen} name="Frosted Green" />
//         <ProductCard imageurl={galaxy} name="Galaxy" />
//         <ProductCard imageurl={greentea} name="Green Tea" />
//         <ProductCard imageurl={jade} name="Jade" />
//         <ProductCard imageurl={jasper} name="Jasper" />
//         <ProductCard imageurl={jodeci} name="Jodeci" />
//         <ProductCard imageurl={mars} name="Mars" />
//         <ProductCard imageurl={mossgreen} name="Moss" />
//         <ProductCard imageurl={OGsolarsystem} name="Original Solar System" />
//         <ProductCard imageurl={orangelotus} name="Orange Lotus Flower" />
//         <ProductCard imageurl={oxy} name="Oxy" />
//         <ProductCard imageurl={peace} name="Peace" />
//         <ProductCard imageurl={pearlicious} name="Pearlicious" />
//         <ProductCard imageurl={protection} name="Protection" />
//         <ProductCard imageurl={protection1} name="Protection1" />
//         <ProductCard imageurl={protection2} name="Protection2" />
//         <ProductCard imageurl={purple} name="Purple" />
//         <ProductCard imageurl={purplelotus} name="Purple Lotus Flower" />
//         <ProductCard imageurl={purpleprotection} name="Purple Protection" />
//         <ProductCard imageurl={Queendom} name="Queendom" />
//         <ProductCard imageurl={redlotus} name="Red Lotus Flower" />
//         <ProductCard imageurl={strawberrycream} name="Strawberry Cream" />
//         <ProductCard imageurl={summerblues} name="Summer Blues" />
//         <ProductCard imageurl={summerrays} name="Summer Rays" />
//         <ProductCard imageurl={summershells} name="Summer Shells" />
//         <ProductCard imageurl={summersunset} name="Summer Sunset" />
//         <ProductCard imageurl={sundial} name="Sundial" />
//         <ProductCard imageurl={tigerlotus} name="Tiger Lotus" />
//         <ProductCard imageurl={unicorn} name="Unicorn" />
//         <ProductCard imageurl={vixen} name="Vixen" />
//         <ProductCard imageurl={wysteria} name="Wysteria" />
//         <ProductCard imageurl={yellowlotus} name="Yellow Lotus Flower" />
//      </div> */}
