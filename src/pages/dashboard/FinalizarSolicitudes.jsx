import React, { useEffect, useState } from "react";
import { Box, Container, Grow, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ShowTable from "../../Components/Table"; // Asegúrate de importar esta función
import { getRegisters } from "../../firebase/api";
import TableFinalizar from "../../Components/TableFinalizar";

export default function FinalizarSolicitudes() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const unsubscribe = getRegisters("Projects", (snapshot) => {
      const projectsData = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((project) =>
          ["Finalizado", "Aceptado"].includes(project.Status)
        );
      console.log(projectsData);
      setProjects(projectsData);
    });

    // Anula la suscripción cuando se desmonte el componente
    return () => unsubscribe();
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box sx={{ height: "70px" }} />
      <Grow
        in={true}
        timeout={{ enter: 500, exit: 0 }}
        style={{ transitionDelay: "100ms" }}>
        <div>
          <Container>
            <Typography variant="h4" color="text.white" sx={{ mt: 2 }}>
              <Link to={"/dashboard"}>Inicio</Link> > Proceso
            </Typography>
            <Box sx={{ mt: 2 }}>
              <TableFinalizar rows={projects} />
            </Box>
          </Container>
        </div>
      </Grow>
    </Box>
  );
}
