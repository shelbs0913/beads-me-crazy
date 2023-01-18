import React, {useState} from "react";
import "./Newsletter.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";

export default function Newsletter() {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit() {
      const newContact = {
        firstName: firstName,
        lastName: lastName,
        email: email
      }
      axios.post("http://localhost:5000/newsletter", newContact).then (
        (response) => {
          console.log(response);
        }
      )
      console.log(newContact);
      
  }

  return (
    <>
      <div>
        <form action="/action_page.php">
          <div className="container">
            <h1>Subscribe to our Newsletter</h1>
            <p>
              Get Monthly updates about upcoming Pop-Up Shops as well as random
              facts about different stones.
            </p>
          </div>
          <div className="field-container">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="container">
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
