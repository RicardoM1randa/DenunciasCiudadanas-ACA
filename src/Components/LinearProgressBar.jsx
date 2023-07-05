import React from "react";
import { LinearProgress, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function LinearProgressBar({
  link,
  value,
  title,
  subtitle,
  buttonText,
}) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="subtitle1">{subtitle}</Typography>
      <Box sx={{ width: "100%", mt: 2, position: "relative" }}>
        <LinearProgress
          value={value}
          variant="determinate"
          sx={{
            bgcolor: "grey.500",
            "& .MuiLinearProgress-bar": { bgcolor: "primary.main" },
          }}
        />

        <Typography variant="subtitle2" component="div" color="primary.main">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
      <Box mt={2} ml="auto">
        <Link to={link}>
          <Button variant="contained">{buttonText}</Button>
        </Link>
      </Box>
    </Box>
  );
}
