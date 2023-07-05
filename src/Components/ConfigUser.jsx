import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Stack,
  TextField,
  Button,
  Grow,
  Container,
} from "@mui/material";
import { useAuth } from "../auth/auth";
import { getUserByDUI, updateRegister } from "../firebase/api";

export default function ConfigUser() {
  const auth = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserByDUI("Users", auth.user.DUI);
      setName(data[0].name);
      setEmail(data[0].email);
    };

    fetchData();
  }, []);

  const handleUpdate = async () => {
    await updateRegister("Users", auth.user.DUI, { name, email });
    alert("Información actualizada");
  };

  return (
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
            <Button
              variant="contained"
              color="secondary"
              onClick={handleUpdate}
              sx={{ padding: "10px 50px", borderRadius: "50px" }}>
              Modificar
            </Button>
          </Stack>
        </Grid>
      </Container>
    </Grow>
  );
}
