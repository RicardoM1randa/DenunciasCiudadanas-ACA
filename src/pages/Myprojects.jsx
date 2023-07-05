import React from "react";
import {
  Grid,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Box,
  Container,
  Zoom,
  Stack,
  TextField,
  Grow,
  Button,
} from "@mui/material";
import {
  HomeOutlined,
  SettingsOutlined,
  ExitToAppOutlined,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import { useAuth } from "../auth/auth";
import Projects from "../Components/Projects";
import LogoutUI from "../Components/LogoutUI";
import ConfigUser from "../Components/ConfigUser";

export default function MyProjects() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* Componente 1 */}

      <Box
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "calc(100vh - 56px)",
        }}>
        <Container>
          <Box height={"100px"} sx={{ background: "black" }} />
          {value == 0 && <Projects />}
          {value == 1 && <ConfigUser />}
          {value == 2 && <LogoutUI />}
        </Container>
      </Box>

      {/* BottomNavigation */}
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Mis Proyectos"
          onClick={() => onclick(0)}
          icon={<HomeOutlined />}
          sx={{
            "&.Mui-selected": {
              color: "secondary.main",
            },
          }}
        />
        <BottomNavigationAction
          label="Configuración"
          onClick={() => onclick(1)}
          icon={<SettingsOutlined />}
          sx={{
            "&.Mui-selected": {
              color: "secondary.main",
            },
          }}
        />
        <BottomNavigationAction
          label="Salir"
          onClick={() => onclick(2)}
          icon={<ExitToAppOutlined />}
          sx={{
            "&.Mui-selected": {
              color: "secondary.main",
            },
          }}
        />
      </BottomNavigation>
    </>
  );
}
