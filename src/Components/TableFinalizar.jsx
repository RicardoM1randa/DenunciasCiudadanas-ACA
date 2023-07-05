import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getRegisters } from "../firebase/api"; // Asegúrate de importar correctamente tus métodos
import ModalFinalizar from "./ModalFinalizar";

export default function TableFinalizar() {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  useEffect(() => {
    getRegisters("Projects", (querySnapshot) => {
      const projects = [];
      querySnapshot.forEach((doc) => {
        const project = doc.data();
        project.id = doc.id;
        if (project.Status === "Aceptado" || project.Status === "Finalizado") {
          projects.push(project);
        }
      });
      setData(projects);
    });
  }, []);

  const handleRowClick = (id) => {
    setSelectedRowId(id);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} onClick={() => handleRowClick(row.id)}>
                <TableCell component="th" scope="row">
                  {row.Tittle}
                </TableCell>
                <TableCell>{row.Description}</TableCell>
                <TableCell>
                  {row.Date &&
                    new Date(row.Date.seconds * 1000).toLocaleDateString()}
                </TableCell>
                <TableCell>{row.Status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalFinalizar
        open={modalOpen}
        handleClose={handleClose}
        id={selectedRowId}
      />
    </>
  );
}
