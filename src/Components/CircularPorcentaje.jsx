import React, { useRef, useState, useLayoutEffect } from "react";
import { CircularProgress, Typography, Box } from "@mui/material";
import useResizeObserver from "use-resize-observer";
import { Height } from "@mui/icons-material";

export default function CircleProgressWithLabel({
  value,
  title,
  subtitle,
  direction = "column",
}) {
  const { ref, width = 1 } = useResizeObserver();
  const size = width;

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: direction,
        alignItems: "center",
      }}>
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" value={value} size={size} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          m={2}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <Typography variant="h4" component="div" color="primary.main">
            {`${Math.round(value)}%`}
          </Typography>
        </Box>
      </Box>
      <Box mt={2} textAlign="center">
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
      </Box>
    </Box>
  );
}
