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
import { AuthProvider, CheckAdminRoute, CheckRoute } from "../auth/auth";
import FinalizarSolicitudes from "../pages/dashboard/FinalizarSolicitudes";

export default function MainApp() {
  return (
    <Box backgroundColor="background.default">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publicLogin" element={<PublicLogin />} />
          <Route
            path="/myProjects"
            element={
              <CheckRoute>
                <MyProjects />
              </CheckRoute>
            }
          />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Box>
  );
}

function Dashboard() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <CheckAdminRoute>
              <DashboardHome />
            </CheckAdminRoute>
          }
        />
        <Route path="/Solicitudes" element={<Solicitudes />} />
        <Route path="/FinalizaSolicitudes" element={<FinalizarSolicitudes />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/dashboard/settings" component={DashboardSettings} />
        <Route path="/dashboard/profile" component={DashboardProfile} /> */}
      </Routes>
    </>
  );
}
