import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Container sx={{ p: 10 }}>
        <Outlet />
      </Container>
    </>
  );
}
