import React from "react";
import "../styles.css";
import Box from "@mui/material/Box";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

//import de paginas que se crearan
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

export default function MainApp() {
  //importamos el navigate
  let navigate = useNavigate();
  return (
    <Box backgroundColor="background.default">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* 
        <FooterContainer /> */}
    </Box>
  );
}
