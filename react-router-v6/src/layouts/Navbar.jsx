import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Router-V6
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Contact</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
