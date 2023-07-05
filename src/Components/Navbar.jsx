import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { LogoOscuro } from "../assets/images/Logos";
import { Link } from "react-router-dom";
import usePositionScreen from "../hooks/usePositionScreen";

export default function Navbar() {
  const position = usePositionScreen();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          transition: "0.5s",
          backgroundColor:
            position < 100 ? "transparent" : "background.default",
          boxShadow: "0",
          zIndex: "10 !important",
        }}>
        <Toolbar>
          <Link to="/">
            <LogoOscuro height="50px" />
          </Link>
          <Typography ml={1} variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">U-track</Link>
          </Typography>
          <Link to="publicLogin">
            <Button color="inherit">Ingresar</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
