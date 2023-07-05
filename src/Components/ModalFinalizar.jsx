import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
} from "@mui/material";
import { getOneRegister, updateRegister } from "../firebase/api"; // Asegúrate de importar correctamente tus métodos

const ModalFinalizar = ({ open, handleClose, id }) => {
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
    handleClose(); // Cerrar el modal después de cambiar el estado
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
          sx={{ mt: 2, mr: 1 }}
          variant="outlined"
          color={"secondary"}
          onClick={() => handleStatusChange("Aceptado")}>
          Marcar como Aceptado
        </Button>
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          color={"primary"}
          onClick={() => handleStatusChange("Finalizado")}>
          Marcar como Finalizado
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ModalFinalizar;
