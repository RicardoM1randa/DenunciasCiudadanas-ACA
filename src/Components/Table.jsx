import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import ModalAccept from "./ModalAccept";

export default function ShowTable({ rows }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

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
            {rows.map((row, index) => (
              <TableRow key={index} onClick={() => handleRowClick(row.id)}>
                <TableCell component="th" scope="row">
                  {row.Tittle}
                </TableCell>
                <TableCell>{row.Description}</TableCell>
                <TableCell>{row.Date.toDate().toLocaleDateString()}</TableCell>
                <TableCell>{row.Status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalAccept
        open={modalOpen}
        handleClose={handleClose}
        id={selectedRowId}
      />
    </>
  );
}
