import React from "react";
import { Logo, Background404 } from "../assets/images/Logos";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { renderToStaticMarkup } from "react-dom/server";
import { Button, Stack, Typography, Grow, Zoom } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  const svgString = encodeURIComponent(renderToStaticMarkup(<Background404 />));

  return (
    <Stack
      sx={{
        backgroundImage: {
          //xs: `url("data:image/svg+xml,${svgStringMobile}")`,
          md: `url("data:image/svg+xml,${svgString}")`,
        },
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        overflow: "hidden",
      }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          height={"100vh"}>
          <Zoom in={true} timeout={1000}>
            <Grid item md={6} xs={6}>
              <Logo />
            </Grid>
          </Zoom>
          <Grow in={true} timeout={1000}>
            <Grid item md={6} xs={6}>
              <Typography textAlign={"center"} variant="h1">
                404
              </Typography>
              <Typography textAlign={"center"} variant="h4">
                La pagina que buscas no se encuentra por aqui...
              </Typography>
              <Stack alignItems={"center"} justifyContent={"center"} mt={2}>
                <Link to="/">
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      padding: "15px 50px",
                      borderRadius: "50px",
                    }}>
                    <Typography textAlign={"center"} variant="h6">
                      Regresar al inicio
                    </Typography>
                  </Button>
                </Link>
              </Stack>
            </Grid>
          </Grow>
        </Grid>
      </Container>
    </Stack>
  );
}
