import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
} from "@mui/material";
import { getOneRegister, updateRegister } from "../firebase/api";

const ModalAccept = ({ open, handleClose, id }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (id) {
      const fetchProject = async () => {
        const project = await getOneRegister("Projects", id);
        setData(project.data());
      };
      fetchProject();
    }
  }, [id]);

  const handleStatusChange = async (status) => {
    await updateRegister("Projects", id, { Status: status });
    setData((prevData) => ({ ...prevData, Status: status }));
    handleClose(); // cierra el diálogo después de cambiar el estado
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{"Detalles del proyecto"}</DialogTitle>
      <DialogContent>
        <Typography variant={"h6"}>{`Título: ${data.Tittle}`}</Typography>
        <Typography>{`Descripción: ${data.Description}`}</Typography>
        <Typography>{`Fecha: ${
          data.Date && new Date(data.Date.seconds * 1000).toLocaleDateString()
        }`}</Typography>
        <Typography
          color={"accent.main"}>{`Estado: ${data.Status}`}</Typography>
        <Button
          variant="outlined"
          color={"secondary"}
          sx={{ mt: 2, mr: 1 }} // añade un margen superior
          onClick={() => handleStatusChange("Denegado")}>
          Marcar como Denegada
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 2 }} // añade un margen superior
          onClick={() => handleStatusChange("Aceptado")}>
          Marcar como Aceptado
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAccept;
