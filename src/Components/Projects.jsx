import React, { useEffect, useState } from "react";
import { Grid, Grow, Typography } from "@mui/material";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import truckSvg from "../assets/images/Construction hero.svg";
import { getRegisters } from "../firebase/api";
import { useAuth } from "../auth/auth"; // importa el hook de autenticación

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const auth = useAuth(); // obtén el contexto de autenticación

  useEffect(() => {
    // Establece los proyectos en el estado cuando los datos cambian en Firebase
    const unsubscribe = getRegisters("Projects", (snapshot) => {
      const allProjectsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // Filtra los proyectos para incluir solo aquellos que pertenecen al usuario actual
      const userProjectsData = allProjectsData.filter(
        (project) => project.DUI === auth.user.DUI
      );

      setProjects(userProjectsData);
    });

    // Anula la suscripción cuando se desmonte el componente
    return () => unsubscribe();
  }, []);

  console.log(projects);

  return (
    <Grow
      in={true}
      timeout={{ enter: 500, exit: 0 }}
      style={{ transitionDelay: "100ms" }}>
      <Grid container spacing={4}>
        {/*Margen de top*/}
        {/*Seccion que se mapeara*/}
        {projects.map((project, index) => (
          <Grid key={index} item xs={12} md={6} ml={{ xs: 2, md: 0 }}>
            <Grid
              container
              alignItems={"center"}
              spacing={2}
              sx={{
                backgroundColor: "primary.main",
                borderRadius: "20px",
              }}>
              {/* Imagen */}
              <Grid item xs={4}>
                <img src={truckSvg} alt="Imagen" width={"100%"} />
              </Grid>
              <Grid item xs={8}>
                {/* Título */}
                <Typography variant="h5" color={"text.white"}>
                  {project.Tittle}{" "}
                  {/* Suponiendo que tus proyectos tienen un título */}
                </Typography>
                {/* Descripción */}
                <Typography variant="body1" color={"text.white"}>
                  {project.Description} {/* Y una descripción */}
                </Typography>
                {/* Indicador de estado */}
                <Typography
                  variant="body1"
                  color="text.white"
                  mr={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}>
                  <span style={{ alignSelf: "flex-start" }}>Estado:</span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "#F7EEC7",
                    }}>
                    {project.Status} {/* Y un estado */}
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
}
