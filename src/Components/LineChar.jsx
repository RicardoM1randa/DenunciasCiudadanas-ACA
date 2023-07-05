import React from "react";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";
import Chart from "chart.js/auto";

const data = {
  labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
  datasets: [
    {
      label: "# de Ventas",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function LineChart() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "auto" }}>
      <Box sx={{ flex: "1", bgcolor: "grey.500", padding: "2rem" }}>
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
}
