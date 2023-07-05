import React from "react";
import {
  Grid,
  Stack,
  Typography,
  IconButton,
  Container,
  Zoom,
  Button,
} from "@mui/material";
import truckSvg from "../assets/images/Construction hero.svg";
import { HomeHeroBackground, LogoOscuro } from "../assets/images/Logos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Hero() {
  return (
    <Stack sx={{ backgroundColor: "white" }}>
      <Grid
        container
        sx={{
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          height: "100vh",
          overflow: "hidden",
        }}>
        <HomeHeroBackground height="100%" width="100vw" />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          container
          sx={{ position: "absolute", height: "100%", width: "100%" }}>
          <Container maxWidth="lg">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center">
              <Grid item xs={12} md={6} mt={{ xs: 12, md: 0 }}>
                <Typography
                  variant="h3"
                  color="text.main"
                  sx={{ fontFamily: "Principal-Font", fontWeight: "bold" }}>
                  Un lugar para reparar nuestros problemas locales
                </Typography>
                <Typography my={2} variant="h5" color="accent.main">
                  Baja para llenar una nueva solicitud para tu comunidad o
                  inicia sesión y mirar tus solicitudes anteriores
                </Typography>
                <Button
                  variant="contained"
                  color="accent"
                  sx={{ padding: "8px 40px", borderRadius: "50px" }}>
                  Ver más
                </Button>
              </Grid>
              <Zoom in={true} timeout={1000}>
                <Grid
                  sx={{ padding: "0px 50px" }}
                  item
                  xs={12}
                  md={6}
                  display={{ xs: "none", md: "block" }}>
                  <img src={truckSvg} alt="Construction images" />
                </Grid>
              </Zoom>
            </Grid>
          </Container>
        </Stack>
      </Grid>
    </Stack>
  );
}
