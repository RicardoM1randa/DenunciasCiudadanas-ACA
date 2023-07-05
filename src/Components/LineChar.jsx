import React from "react";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";
import Chart from "chart.js/auto";

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function LineChart({ projects }) {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // Inicializa el contador de proyectos para cada mes en 0
  const projectsPerMonth = new Array(12).fill(0);

  // Recorre cada proyecto
  projects.forEach((project) => {
    // Obtiene el mes del proyecto (recuerda que getMonth() devuelve un número entre 0 y 11)
    const month = project.Date.toDate().getMonth();

    // Incrementa el contador para el mes correspondiente
    projectsPerMonth[month]++;
  });

  const data = {
    labels: months,
    datasets: [
      {
        label: "# de Proyectos",
        data: projectsPerMonth,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "auto" }}>
      <Box sx={{ flex: "1", padding: "2rem" }}>
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
}
