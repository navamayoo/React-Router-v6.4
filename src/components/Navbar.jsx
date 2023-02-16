import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material";


const StyleNavLink = styled(NavLink)({
  textDecoration: "none",
  color: "white",
  fontSize: 14,

  "&.active": {
    background: "navy",
    padding: 10,
    borderRadius: 5,
  },
});

export default function Navbar() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Router-V6
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            <StyleNavLink to={"/"}>Home</StyleNavLink>
            <StyleNavLink to={"about"}>About</StyleNavLink>
            <StyleNavLink to={"contact"}>Contact</StyleNavLink>
            <StyleNavLink to={"careers"}>Careers</StyleNavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
