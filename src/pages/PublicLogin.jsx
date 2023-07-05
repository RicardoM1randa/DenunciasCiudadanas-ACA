import React from "react";
import { Grid, Box, Typography, TextField, Button, Fade } from "@mui/material";
import { Link } from "react-router-dom";

export default function PublicLogin() {
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
            label="DUI"
            variant="outlined"
            InputLabelProps={{
              sx: {
                color: "primary.main",
                "&.Mui-focused": {
                  color: "secondary.main",
                },
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
                "& .MuiInputLabel-root": {
                  color: "primary.main",
                },
                "& .Mui-focused .MuiInputLabel-root": {
                  color: "secondary.main",
                },
              },
            }}
          />
          <Link to="/myProjects">
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ height: "50px", borderRadius: "50px" }}>
              Ingresar
            </Button>
          </Link>
        </Box>
      </Fade>
    </Grid>
  );
}
