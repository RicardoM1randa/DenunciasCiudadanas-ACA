import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Stack,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <Grid
      container
      sx={{
        background:
          "linear-gradient(0deg, rgba(71,17,80,1) 10%, rgba(248,93,14,1) 90%)",
      }}>
      <Container>
        <Grid container direction="row" spacing={2} mb={2}>
          <Grid item xs={12} md={12} mt={8} mb={2}>
            <Typography
              variant={"h4"}
              textAlign={"center"}
              color="text.main"
              sx={{ fontFamily: "Principal-Font", fontWeight: "bold" }}>
              Ingresa tu solicitud en el siguiente formulario
            </Typography>
            <Typography variant="body1" color="text.main" textAlign={"center"}>
              Llena los siguientes campos de manera clara y concisa, y se te
              notificara del estado de tu solicitud
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{
                height: "100%",
                border: "1px solid #f7eec74b",
                borderRadius: "20px",
              }}>
              <IconButton
                aria-label="uploadimage"
                sx={{ height: "120px", width: "120px" }}>
                <CloudUploadIcon sx={{ transform: "scale(4)" }} />
              </IconButton>
              <Typography
                align="center"
                variant="body1"
                color="text.white"
                m={2}>
                Sube un mínimo de 1 foto o máximo de 5 fotos
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}>
              <TextField fullWidth id="TxtDui" label="Ingresa tu DUI" />
              <TextField fullWidth id="TxtNombre" label="Ingresa tu nombre" />
              <TextField fullWidth id="TxtEmail" label="Ingrese un email" />
              <TextField fullWidth id="TxtAsunto" label="Asunto o problema" />
              <TextField
                fullWidth
                id="txtDescripccion"
                label="Descripción"
                multiline
                rows={6}
              />
            </Stack>
          </Grid>
        </Grid>
        <Stack mb={8}>
          <Divider>
            <Typography variant="body1" color="text.white">
              O
            </Typography>
          </Divider>
          <Typography align="center" variant="h6" color="text.main">
            Si ya tienes proyectos registrados{" "}
            <Link style={{ color: "#01E2C9" }} to="publiclogin">
              haz clic aquí
            </Link>
          </Typography>
        </Stack>
      </Container>
    </Grid>
  );
}
