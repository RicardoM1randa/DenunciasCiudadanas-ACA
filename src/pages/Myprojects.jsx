import React from "react";
import {
  Grid,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Box,
  Container,
  Zoom,
  Stack,
  TextField,
  Grow,
  Button,
} from "@mui/material";
import {
  HomeOutlined,
  SettingsOutlined,
  ExitToAppOutlined,
} from "@mui/icons-material";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import truckSvg from "../assets/images/Construction hero.svg";
import { Link } from "react-router-dom";

export default function MyProjects() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* Componente 1 */}

      <Box
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "calc(100vh - 56px)",
        }}>
        <Container>
          <Box height={"100px"} sx={{ background: "black" }} />
          {value == 0 && (
            <Grow
              in={true}
              timeout={{ enter: 500, exit: 0 }}
              style={{ transitionDelay: "100ms" }}>
              <Grid container spacing={4}>
                {/*Margen de top*/}
                {/*Seccion que se mapeara*/}
                <Grid item xs={12} md={6} ml={{ xs: 2, md: 0 }}>
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
                      <Typography variant="h4" color={"text.white"}>
                        Título
                      </Typography>
                      {/* Descripción */}
                      <Typography variant="body1" color={"text.white"}>
                        Descripción
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
                          <QueryBuilderIcon style={{ marginRight: "4px" }} />
                          Pendiente
                        </span>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                {/*Seccion que se mapeara*/}
                <Grid item xs={12} md={6} ml={{ xs: 2, md: 0 }}>
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
                      <Typography variant="h4" color={"text.white"}>
                        Título
                      </Typography>
                      {/* Descripción */}
                      <Typography variant="body1" color={"text.white"}>
                        Descripción
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
                          <QueryBuilderIcon style={{ marginRight: "4px" }} />
                          Pendiente
                        </span>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grow>
          )}
          {value == 1 && (
            <Grow
              in={true}
              timeout={{ enter: 500, exit: 0 }}
              style={{ transitionDelay: "100ms" }}>
              <Container maxWidth="md">
                <Grid item xs={12} md={12}>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Grid item xs={12} md={12} mb={2}>
                      <Typography
                        variant={"h4"}
                        textAlign={"center"}
                        color="text.white"
                        sx={{
                          fontFamily: "Principal-Font",
                          fontWeight: "bold",
                        }}>
                        Configuración
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.white"
                        textAlign={"center"}>
                        Puedes cambiar tus datos personales, y luego haz clic en
                        modificar para guardarlos
                      </Typography>
                    </Grid>
                    <TextField fullWidth id="TxtDui" label="Ingresa tu DUI" />
                    <TextField
                      fullWidth
                      id="TxtNombre"
                      label="Ingresa tu nombre"
                    />
                    <TextField
                      fullWidth
                      id="TxtEmail"
                      label="Ingrese un email"
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ padding: "10px 50px", borderRadius: "50px" }}>
                      Modificar
                    </Button>
                  </Stack>
                </Grid>
              </Container>
            </Grow>
          )}
          {value == 2 && (
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Grow
                in={true}
                timeout={{ enter: 500, exit: 0 }}
                style={{ transitionDelay: "100ms" }}>
                <Box
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    margin: 1,
                    maxWidth: 400,
                    p: 4,
                    bgcolor: "white",
                    borderRadius: 4,
                  }}>
                  <Typography
                    variant="h4"
                    align="center"
                    sx={{ fontFamily: "Principal-font" }}>
                    Cerrar sesión
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    sx={{ fontFamily: "Principal-font" }}
                    mb={2}>
                    Haz click en Salir para cerrar tu sesión y regresar a la
                    pantalla de inicio
                  </Typography>

                  <Link to="/myProjects">
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      sx={{ height: "50px", borderRadius: "50px" }}>
                      Salir
                    </Button>
                  </Link>
                </Box>
              </Grow>
            </Stack>
          )}
        </Container>
      </Box>

      {/* BottomNavigation */}
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Mis Proyectos"
          onClick={() => onclick(0)}
          icon={<HomeOutlined />}
          sx={{
            "&.Mui-selected": {
              color: "secondary.main",
            },
          }}
        />
        <BottomNavigationAction
          label="Configuración"
          onClick={() => onclick(1)}
          icon={<SettingsOutlined />}
          sx={{
            "&.Mui-selected": {
              color: "secondary.main",
            },
          }}
        />
        <BottomNavigationAction
          label="Salir"
          onClick={() => onclick(2)}
          icon={<ExitToAppOutlined />}
          sx={{
            "&.Mui-selected": {
              color: "secondary.main",
            },
          }}
        />
      </BottomNavigation>
    </>
  );
}
