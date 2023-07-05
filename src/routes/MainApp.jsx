import React from "react";
import "../styles.css";
import Box from "@mui/material/Box";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

//import de paginas que se crearan
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import PublicLogin from "../pages/PublicLogin";
import MyProjects from "../pages/Myprojects";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Solicitudes from "../pages/dashboard/Solicitudes";

export default function MainApp() {
  return (
    <Box backgroundColor="background.default">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/publicLogin" element={<PublicLogin />} />
        <Route path="/myProjects" element={<MyProjects />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

function Dashboard() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/Solicitudes" element={<Solicitudes />} />
        {/* <Route path="/dashboard/settings" component={DashboardSettings} />
        <Route path="/dashboard/profile" component={DashboardProfile} /> */}
      </Routes>
    </>
  );
}
