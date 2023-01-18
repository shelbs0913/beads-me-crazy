import React from "react";
import Home from "./components/Home/Home";
import Shop from "./components/Shop";
import Stones from "./components/Stones/Stones";
// import Navbar from "./components/layout/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import Events from "./components/Events/Events";
// import CartList from "./components/CartList";
import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from 'react-router-dom';
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewNavbar from "./components/NewNavbar";
import { Container } from 'react-bootstrap';
import Success from "./components/pages/Success";
import Cancel from "./components/pages/Cancel";
import { CartProvider } from "./components/CartContext";
import Stripe from "./components/Stripe";



function App() {

  return <>
    <Header />
    <CartProvider>
    <Container>

      <Router>
        <div className="app app-div navbar">
        <NewNavbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/stones' element={<Stones />} />
            <Route path='/newsletter' element={<Newsletter />} />
            <Route path='/events' element={<Events />} />
            <Route path='/success' element={<Success />} />
            <Route path='/cancel' element={<Cancel />} />
            <Route path='/checkout' element={<Stripe />} />
          </Routes>
        </div> 
      </Router>
    </Container>
    </CartProvider>
    


  
    {/* <Router> */}
      {/* <Navbar /> */}
      {/* <CartList /> */}
        {/* <div className="app app-div navbar">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/stones' element={<Stones />} />
            <Route path='/newsletter' element={<Newsletter />} />
            <Route path='/events' element={<Events />} />
          </Routes>
        </div> 
    </Router> */}
  </>
}

export default App;
