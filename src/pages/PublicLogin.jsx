import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, TextField, Button, Fade } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/auth";

export default function PublicLogin() {
  const auth = useAuth();
  const navigate = useNavigate();
  let location = useLocation();

  const [userName, setUserName] = useState("");
  let from = location.state?.from?.pathname || "/myProjects";

  const login = (e) => {
    e.preventDefault();
    auth.login({ userName });
  };

  // Revisa si el usuario ya está autenticado cuando el componente se monta o cuando "auth.user" cambia
  useEffect(() => {
    if (auth.user) navigate(from, { replace: true });
  }, [auth.user, navigate, from]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(0deg, rgba(71,17,80,1) 10%, rgba(248,93,14,1) 90%)",
      }}>
      <Fade
        in={true}
        timeout={{ enter: 500, exit: 0 }}
        style={{ transitionDelay: "100ms" }}>
        <Box
          sx={{
            margin: 1,
            maxWidth: 400,
            p: 4,
            bgcolor: "white",
            borderRadius: 4,
          }}>
          <form onSubmit={login}>
            <Typography
              variant="h4"
              align="center"
              sx={{ fontFamily: "Principal-font" }}>
              Login
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ fontFamily: "Principal-font" }}
              mb={2}>
              ingrese su DUI para ver sus solicitudes anteriores
            </Typography>
            <TextField
              fullWidth
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              label="DUI"
              variant="outlined"
              color="primary"
              InputLabelProps={{
                sx: {
                  color: "primary.main",
                  "&.Mui-focused": {
                    color: "secondary.main",
                  },
                },
              }}
              InputProps={{
                sx: {
                  color: "primary.main", // Color del texto ingresado
                },
              }}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "primary.main",
                  },
                  "&:hover fieldset": {
                    borderColor: "secondary.main",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "secondary.main",
                  },
                },
              }}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              sx={{ height: "50px", borderRadius: "50px" }}>
              Ingresar
            </Button>
          </form>
        </Box>
      </Fade>
    </Grid>
  );
}
