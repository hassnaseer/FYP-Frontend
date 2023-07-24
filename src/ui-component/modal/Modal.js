import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
// import AddAmenities from 'views/Amenities/addAmenities';

const DeleteModal = ({ open, onClose, onConfirm, title, message }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {message !== "Add Amenities" ?
          (
            <>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onConfirm} color="error" variant="contained">
                Confirm
              </Button>
            </>
          ) : ''}
      </DialogActions>
    </Dialog>
  );
};
  
export default DeleteModal;