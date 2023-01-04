import React from 'react';
import './Newsletter.css'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';


export default function Newsletter() {
  return <>
  <div>
    <form action="/action_page.php">
      <div className="container">
        <h1>Subscribe to our Newsletter</h1>
          <p>Get Monthly updates about upcoming Pop-Up Shops as well as random facts 
            about different stones.</p>
      </div>
      <div className="field-container">
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email Address" variant="outlined" />
      </div>
      <div className="container">
        <Button variant="contained" color="success">Subscribe</Button>
      </div>
    </form>
  </div>
  </>
}
