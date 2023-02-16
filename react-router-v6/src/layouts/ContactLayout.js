import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const StyleNavLink = styled(NavLink)({
  textDecoration: "none",
  color: "white",
  fontSize: 14,
  background: "#448aff",
  "&.active": {
    background: "navy",
  },
  padding: 10,
  borderRadius: 5,
});

export default function ContactLayout() {
  return (
    <>
      <Typography variant="h4">Contact</Typography>
      <Typography variant="body">
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 5,
          gap: 5,
        }}>
        <StyleNavLink to={"mail"}>Mail Us</StyleNavLink>
        <StyleNavLink to={"phone"}>Phone Us</StyleNavLink>
      </Box>
      <Container sx={{ p: 10 }}>
        <Outlet />
      </Container>
    </>
  );
}
