import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js";
import {
  ArcElement,
  CategoryScale,
  DoughnutController,
  LinearScale,
} from "chart.js";
import { Box } from "@mui/material";

Chart.register(DoughnutController, ArcElement, LinearScale, CategoryScale);

function DonutChart({ pending, accepted, denied, finished }) {
  const data = {
    labels: ["Pendiente", "Aceptado", "Denegado", "Finalizado"],
    datasets: [
      {
        data: [pending, accepted, denied, finished],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)", // Red
          "rgba(75, 192, 192, 0.8)", // Green
          "rgba(255, 206, 86, 0.8)", // Yellow
          "rgba(54, 162, 235, 0.8)", // Blue
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "auto" }}>
      <Box sx={{ flex: "1", padding: "2rem" }}>
        <Doughnut data={data} />;
      </Box>
    </Box>
  );
}

export default DonutChart;
