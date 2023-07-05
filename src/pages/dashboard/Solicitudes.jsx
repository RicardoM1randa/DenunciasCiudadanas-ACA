import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ShowTable from "../../Components/Table";

// Tus datos de prueba
const rows = [
  {
    id: 1,
    nombre: "Nombre 1",
    descripcion: "Descripción 1",
    fecha: "01/01/2023",
    estado: "Activo",
  },
  {
    id: 2,
    nombre: "Nombre 2",
    descripcion: "Descripción 2",
    fecha: "02/02/2023",
    estado: "Inactivo",
  },
];

export default function Solicitudes() {
  const [filtro, setFiltro] = React.useState("");

  const handleChange = (event) => {
    setFiltro(event.target.value);
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box sx={{ height: "70px" }} />
      <Container>
        <Typography variant="h4" color="text.white" sx={{ mt: 2 }}>
          <Link to={"/dashboard"}>Inicio</Link> > Nuevas
        </Typography>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="filtro-label">Filtrar por:</InputLabel>
          <Select
            labelId="filtro-label"
            value={filtro}
            label="Filtro"
            onChange={handleChange}>
            <MenuItem value={10}>Opción 1</MenuItem>
            <MenuItem value={20}>Opción 2</MenuItem>
            <MenuItem value={30}>Opción 3</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ mt: 2 }}>
          <ShowTable rows={rows} />
        </Box>
      </Container>
    </Box>
  );
}
