// src/AtributesDialog.js

import { Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Button } from '@mui/material';
import PropTypes from 'prop-types';


const AtributesDialog = ({nombre, open, atributesContent, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{nombre}</DialogTitle>
      <DialogContent>
        <DialogContentText>{atributesContent}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AtributesDialog.propTypes = {
  nombre: PropTypes.string,
  open: PropTypes.bool,
  atributesContent: PropTypes.string,
  onClose: PropTypes.func
};
export default AtributesDialog;
