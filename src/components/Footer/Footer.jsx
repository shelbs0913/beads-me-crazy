import React from "react";
import { TextField } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Button } from "@mui/material";

export default function Footer() {
  return (
    <>
      <div>
        <form action="/action_page.php">
          <div className="container">
            <h1>Email Us</h1>
            <p>Let us know if you don't see what you like on our site!!</p>
          </div>
          <div className="field-container">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
            <TextareaAutosize
              maxRows={4}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
              style={{ width: 200 }}
            />
          </div>
          <div className="container">
            <Button variant="contained" color="success">
              Send
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
