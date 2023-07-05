import { Box, Container, Grid, Grow, Typography } from "@mui/material";
import React from "react";
import CircleProgressWithLabel from "../../Components/CircularPorcentaje";
import LinearProgressBar from "../../Components/LinearProgressBar";
import LineChart from "../../Components/LineChar";

export default function DashboardHome() {
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
                    bgcolor: "#ccc",
                    borderRadius: "16px",
                    height: "auto",
                  }}>
                  <CircleProgressWithLabel
                    value={99}
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
                        bgcolor: "#ccc",
                        borderRadius: "16px",
                        flexGrow: 1,
                      }}>
                      <LinearProgressBar
                        value={50}
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
                        bgcolor: "#ccc",
                        borderRadius: "16px",
                        flexGrow: 1,
                      }}>
                      <LinearProgressBar
                        value={50}
                        title="Proyectos finalizados"
                        subtitle="Porcentaje de solicitudes que ya finalizaron"
                        buttonText="Ir a sección"
                        link="Solicitudes"
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
              <Grid item xs={12} md={9} sx={{ p: 2, flexGrow: 1 }}>
                <Box
                  p={4}
                  sx={{
                    bgcolor: "#ccc",
                    borderRadius: "16px",
                    height: "auto",
                  }}>
                  <LineChart />
                </Box>
              </Grid>
            </Grow>
            <Grow
              in={true}
              timeout={{ enter: 500, exit: 0 }}
              style={{ transitionDelay: "100ms" }}>
              <Grid item xs={12} md={3} sx={{ p: 2, flexGrow: 1 }}>
                <Box
                  p={4}
                  sx={{
                    bgcolor: "#ccc",
                    borderRadius: "16px",
                    height: "auto",
                  }}>
                  <CircleProgressWithLabel
                    value={99}
                    title="Solicitudes procesadas"
                    subtitle="Porcentaje de todas las solicitudes que ya fueron procesadas"
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
