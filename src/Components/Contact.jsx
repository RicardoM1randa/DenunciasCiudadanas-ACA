import React, { useState } from "react";
import { saveNewRegister, getOneRegister, getUserByDUI } from "../firebase/api";
import { serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";

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
import { Email } from "@mui/icons-material";

export default function Contact() {
  const [DUI, setDUI] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const sendNewProject = async (e) => {
    e.preventDefault();

    // Código para verificar si el usuario existe
    try {
      const docSnapshot = await getUserByDUI("User", DUI);
      console.log(docSnapshot);
      if (docSnapshot.length > 0) {
        console.log("El usuario existe!");
        // Aquí puedes manejar lo que suceda si el usuario existe
        // Incluso podrías usar los datos del usuario para crear el nuevo proyecto

        const newProjectArray = {
          DUI: DUI,
          Tittle: asunto,
          Description: descripcion,
          Status: "Pendiente",
          Date: serverTimestamp(),
        };

        saveNewRegister("Projects", newProjectArray);
      } else {
        console.log("No existe un usuario con ese DUI!");
        // Aquí puedes manejar lo que suceda si el usuario no existe

        const newUserArray = {
          DUI: DUI,
          Mail: email,
          Name: name,
          Role: "user",
        };

        const newProjectArray = {
          DUI: DUI,
          Tittle: asunto,
          Description: descripcion,
          Status: "Pendiente",
          Date: serverTimestamp(),
        };

        saveNewRegister("Projects", newProjectArray);
        saveNewRegister("User", newUserArray);
      }

      // Mostrar alerta de SweetAlert2 y vaciar los campos
      Swal.fire({
        icon: "success", // El icono que se muestra en la alerta
        title: "Solicitud enviada", // El título de la alerta
        text: "Puede ver sus proyectos iniciando sesión", // El subtítulo de la alerta
      }).then(() => {
        // Limpiar los campos después de mostrar la alerta
        setDUI("");
        setName("");
        setEmail("");
        setAsunto("");
        setDescripcion("");
      });
    } catch (error) {
      console.log("Hubo un error al obtener el usuario:", error);
      // Aquí puedes manejar lo que suceda si hay un error al obtener el usuario
    }
  };

  return (
    <Grid
      container
      sx={{
        background:
          "linear-gradient(0deg, rgba(71,17,80,1) 10%, rgba(248,93,14,1) 90%)",
      }}>
      <Container>
        <form onSubmit={sendNewProject}>
          <Grid
            container
            direction="row"
            spacing={2}
            mb={2}
            justifyContent={"center"}>
            <Grid item xs={12} md={12} mt={8} mb={2}>
              <Typography
                variant={"h4"}
                textAlign={"center"}
                color="text.main"
                sx={{ fontFamily: "Principal-Font", fontWeight: "bold" }}>
                Ingresa tu solicitud en el siguiente formulario
              </Typography>
              <Typography
                variant="body1"
                color="text.main"
                textAlign={"center"}>
                Llena los siguientes campos de manera clara y concisa, y se te
                notificara del estado de tu solicitud
              </Typography>
            </Grid>
            {/* <Grid item xs={12} md={4}>
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
            </Grid> */}
            <Grid item xs={12} md={8}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <TextField
                  fullWidth
                  id="TxtDui"
                  label="Ingresa tu DUI"
                  value={DUI}
                  onChange={(e) => setDUI(e.target.value)}
                />
                <TextField
                  fullWidth
                  id="TxtNombre"
                  label="Ingresa tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  fullWidth
                  id="TxtEmail"
                  label="Ingrese un email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  fullWidth
                  id="TxtAsunto"
                  label="Asunto o problema"
                  value={asunto}
                  onChange={(e) => setAsunto(e.target.value)}
                />
                <TextField
                  fullWidth
                  id="txtDescripccion"
                  label="Descripción"
                  multiline
                  rows={6}
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </Stack>
            </Grid>

            <Grid xs={12} md={12}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                mt={2}>
                <Button
                  sx={{
                    padding: "10px 50px",
                    borderRadius: "50px",
                    color: "white",
                  }}
                  color="black"
                  align="center"
                  type="submit"
                  variant="contained">
                  Enviar
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Stack mb={8} sx={{ marginLeft: -2 }}>
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
        </form>
      </Container>
    </Grid>
  );
}
