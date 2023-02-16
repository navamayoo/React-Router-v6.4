import { Container, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <>
      <Typography variant="body1">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </Typography>
      <Container sx={{ p: 3 }}></Container>
      <Outlet />
    </>
  );
}
