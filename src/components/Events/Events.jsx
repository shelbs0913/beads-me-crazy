import React from 'react'
import Flyer from '../../assets/pop-up shop.png';
import { Button } from 'react-bootstrap';
import './Events';

export default function Events() {
  return <>
    <div className="flyer">
        <h1>Pop-up Shops</h1>
        <img src={Flyer} alt='pop-up shop flyer' />
        <div>
           <Button><a href={Flyer} download className="btn">Download Flyer</a></Button>
        </div>
    </div>
  </>
}