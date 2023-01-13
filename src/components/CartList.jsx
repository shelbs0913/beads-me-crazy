import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CartList(props) {
  const cart = useSelector((state) => state);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const displayCart = () => {
    console.log("Button Pressed");
    console.log(cart);
  };

  return (
    <>
      <div>
        <Button
          onClick={handleOpen}
          className="btn1"
          id="total"
          variant="contained"
          color="secondary"
        >
          Cart
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Here are your Items!!!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {props.name}
              {props.quantity}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}
