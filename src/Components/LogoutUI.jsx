import { Box, Button, Grow, Stack, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../auth/auth";

export default function LogoutUI() {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };
  return (
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
            Haz click en Salir para cerrar tu sesión y regresar a la pantalla de
            inicio
          </Typography>

          <form onSubmit={logout}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              sx={{ height: "50px", borderRadius: "50px" }}>
              Salir
            </Button>
          </form>
        </Box>
      </Grow>
    </Stack>
  );
}
