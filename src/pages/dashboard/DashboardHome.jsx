import { Box, Container, Grid, Grow, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CircleProgressWithLabel from "../../Components/CircularPorcentaje";
import LinearProgressBar from "../../Components/LinearProgressBar";
import LineChart from "../../Components/LineChar";
import { getRegisters } from "../../firebase/api";
import DonutChart from "../../Components/DonutChart";

export default function DashboardHome() {
  const [projectsState, setProjectsState] = useState([]);
  const [acceptedPercentage, setAcceptedPercentage] = useState(0);
  const [finishedPercentage, setFinishedPercentage] = useState(0);
  const [notPendingPercentage, setNotPendingPercentage] = useState(0);

  //para donutbar
  const [pending, setPending] = useState(0);
  const [accepted, setAccepted] = useState(0);
  const [denied, setDenied] = useState(0);
  const [finished, setFinished] = useState(0);

  useEffect(() => {
    getRegisters("Projects", (querySnapshot) => {
      const projects = [];
      querySnapshot.forEach((doc) => {
        projects.push(doc.data());
      });
      setProjectsState(projects);

      const acceptedAndPendingProjects = projects.filter(
        (project) =>
          project.Status === "Aceptado" || project.Status === "Pendiente"
      );

      const acceptedProjects = acceptedAndPendingProjects.filter(
        (project) => project.Status === "Aceptado"
      );
      setAccepted(acceptedProjects.length);

      if (acceptedAndPendingProjects.length > 0) {
        const percentage =
          (acceptedProjects.length / acceptedAndPendingProjects.length) * 100;
        setAcceptedPercentage(percentage);
      } else {
        setAcceptedPercentage(0);
      }

      //Logica de finalizados
      const finishedProjects = projects.filter(
        (project) => project.Status === "Finalizado"
      );
      setFinished(finishedProjects.length);

      if (acceptedProjects.length > 0) {
        const percentageFinished =
          (finishedProjects.length / acceptedProjects.length) * 100;
        setFinishedPercentage(percentageFinished);
      } else {
        setFinishedPercentage(0);
      }

      //Logica de procesados (circularBar)
      const notPendingProjects = projects.filter(
        (project) => project.Status !== "Pendiente"
      );

      if (projects.length > 0) {
        const percentageNotPending =
          (notPendingProjects.length / projects.length) * 100;
        setNotPendingPercentage(percentageNotPending);
      } else {
        setNotPendingPercentage(0);
      }

      //Logica para donut bar
      const pendingProjects = projects.filter(
        (project) => project.Status === "Pendiente"
      );
      setPending(pendingProjects.length);

      const deniedProjects = projects.filter(
        (project) => project.Status === "Denegado"
      );
      setDenied(deniedProjects.length);
    });
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box sx={{ height: "70px" }} />

      <Container>
        <Grow
          in={true}
          timeout={{ enter: 500, exit: 0 }}
          style={{ transitionDelay: "100ms" }}>
          <Typography align="center" variant="h3" color="text.white">
            Inicio
          </Typography>
        </Grow>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grow
              in={true}
              timeout={{ enter: 500, exit: 0 }}
              style={{ transitionDelay: "100ms" }}>
              <Grid item xs={12} md={4} sx={{ p: 2 }}>
                <Box
                  p={4}
                  sx={{
                    bgcolor: "#eee",
                    borderRadius: "16px",
                    height: "auto",
                  }}>
                  <CircleProgressWithLabel
                    value={notPendingPercentage}
                    title="Solicitudes procesadas"
                    subtitle="Porcentaje de todas las solicitudes que ya fueron procesadas"
                  />
                </Box>
              </Grid>
            </Grow>
            <Grow
              in={true}
              timeout={{ enter: 500, exit: 0 }}
              style={{ transitionDelay: "100ms" }}>
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  p: 2,
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}>
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12} md={6} sx={{ p: 2, flexGrow: 1 }}>
                    <Box
                      p={2}
                      sx={{
                        bgcolor: "#eee",
                        borderRadius: "16px",
                        flexGrow: 1,
                      }}>
                      {/* Progressbar proyectos aceptado*/}
                      <LinearProgressBar
                        value={acceptedPercentage}
                        title="Solicitudes aprobadas"
                        subtitle="Porcentaje del total de solicitudes que si fueron aprobadas"
                        buttonText="Ir a sección"
                        link="Solicitudes"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2, flexGrow: 1 }}>
                    <Box
                      p={2}
                      sx={{
                        bgcolor: "#eee",
                        borderRadius: "16px",
                        flexGrow: 1,
                      }}>
                      {/* Progressbar proyectos finalizados*/}
                      <LinearProgressBar
                        value={finishedPercentage}
                        title="Proyectos finalizados"
                        subtitle="Porcentaje de solicitudes que ya finalizaron"
                        buttonText="Ir a sección"
                        link="FinalizaSolicitudes"
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grow>
            <Grow
              in={true}
              timeout={{ enter: 500, exit: 0 }}
              style={{ transitionDelay: "100ms" }}>
              <Grid item xs={12} md={8} sx={{ p: 2, flexGrow: 1 }}>
                <Box
                  p={4}
                  sx={{
                    bgcolor: "#eee",
                    borderRadius: "16px",
                    height: "auto",
                  }}>
                  <LineChart projects={projectsState} />
                </Box>
              </Grid>
            </Grow>
            <Grow
              in={true}
              timeout={{ enter: 500, exit: 0 }}
              style={{ transitionDelay: "100ms" }}>
              <Grid item xs={12} md={4} sx={{ p: 2, flexGrow: 1 }}>
                <Box
                  p={4}
                  sx={{
                    bgcolor: "#eee",
                    borderRadius: "16px",
                    height: "auto",
                  }}>
                  <DonutChart
                    pending={pending}
                    accepted={accepted}
                    denied={denied}
                    finished={finished}
                  />
                </Box>
              </Grid>
            </Grow>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
