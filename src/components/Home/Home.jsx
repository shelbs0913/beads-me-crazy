import React from "react";
import earthtones from "../../assets/images/homepage/earthtones.jpg";
import greenandwhite from "../../assets/images/homepage/greenandwhite.jpg";
import hematitecollection from "../../assets/images/homepage/hematitecollection.jpg";
import greentea from "../../assets/images/homepage/greentea.jpg";
import logo from "../../assets/logo2.jpg";
import { Card, Button } from "react-bootstrap";

import "./Home";

export default function Home() {
  return (
    <>
      <div>
        <h3>Custome beads at an affordable price!!!!</h3>
        <div className="row">
          <div className="column">
            <img src={greenandwhite} alt="greenandwhite" width="100" />
            <img src={earthtones} alt="earthtones" width="100" />
            <img
              src={hematitecollection}
              alt="hematitecollection"
              width="100"
            />
            <img src={greentea} alt="greenteaa" width="100" />
          </div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary"><a href="/shop" className="shop">Shop Now</a></Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
