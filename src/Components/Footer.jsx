import { Grid, Typography, Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { LogoOscuro } from "../assets/images/Logos";

const styledGrid = {
  minHeight: "10vh",
  backgroundColor: "background.default",
};

export default function Footer() {
  return (
    <>
      <Box>
        {/*Seccion de down footer*/}
        <Grid item xs={12} md={12} sx={styledGrid}>
          <Grid
            container
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            spacing={1}
            flexGrow="1">
            {/*Imagen logo */}
            <Grid
              xs={12}
              item
              sx={{ width: "100%", backgroundColor: "primary.main" }}>
              <Container maxWidth="md">
                <Stack
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                  spacing={2}>
                  <LogoOscuro height="150px" />
                  <div>
                    <Typography variant="h6" color="white">
                      {/* Pequeño texto */}
                      Pequeño texto o título del footer
                    </Typography>
                    {/* Lista <ul> */}
                    <Typography
                      color="accent.main"
                      variant="body1"
                      component="ul">
                      <li>Elemento de lista 1</li>
                      <li>Elemento de lista 2</li>
                      <li>Elemento de lista 3</li>
                    </Typography>
                  </div>
                </Stack>
              </Container>
            </Grid>
            <Grid item mb={2}>
              <Typography variant="subtitle" color="text.white">
                © Todos los derechos reservados
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
