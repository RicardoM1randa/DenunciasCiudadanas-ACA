import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";

const ModalAccept = ({
  open,
  handleClose,
  id,
  Nombre,
  Desc,
  Fecha,
  Estado,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{"Detalles de la fila"}</DialogTitle>
      <DialogContent>
        <Typography>{`Has seleccionado la fila con id: ${id}`}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAccept;
