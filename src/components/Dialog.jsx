import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ open = Boolean, handleClose = () => {}, handleApi = () => {}, onChange = () => {} }) {
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Checkout</DialogTitle>
        <DialogContent>
          <DialogContentText>Isi Email untuk melakukan checkout</DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" onChange={onChange} fullWidth variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleApi}>Lanjutkan</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
