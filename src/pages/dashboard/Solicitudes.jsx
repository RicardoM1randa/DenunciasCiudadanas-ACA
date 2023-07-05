import React, { useEffect, useState } from "react";
import { Box, Container, Grow, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ShowTable from "../../Components/Table"; // Asegúrate de importar esta función
import { getRegisters } from "../../firebase/api";

export default function Solicitudes() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const unsubscribe = getRegisters("Projects", (snapshot) => {
      const projectsData = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((project) =>
          ["Pendiente", "Aceptado", "Denegado"].includes(project.Status)
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
              <Link to={"/dashboard"}>Inicio</Link> > Nuevas
            </Typography>
            <Box sx={{ mt: 2 }}>
              <ShowTable rows={projects} />
            </Box>
          </Container>
        </div>
      </Grow>
    </Box>
  );
}
