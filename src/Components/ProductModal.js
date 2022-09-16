import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
  backgroundColor: "darkslategray"
};

export default function ProductModal({ modalIsOn, modalIsOff,img, name,inStock, price, size, allColors, totalQuantity }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    modalIsOff();
    };
  React.useEffect(() => {
    modalIsOn && setOpen(true);
    // !modalIsOn && modalIsOff();
  }, [modalIsOn]);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
         <img style={{  display: "block",marginLeft: "auto", marginRight: "auto", width: "8rem", height:"8rem", objectFit: "cover" }} src={img}></img>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
             COLORS: {allColors.map(e => { return <div style={{ backgroundColor:`${e}`,display:"inline-block", margin:".1rem", width:"1rem", height:"1rem" }}></div>})}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            SIZES: {size.map(e => JSON.stringify(e)).join(", ")}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Available: {inStock ? "In Stock" : "Out of Stock"}
          </Typography>
          {inStock && <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Total Quantity Available: {totalQuantity}
          </Typography>}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            PRICE: ${price} 
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
