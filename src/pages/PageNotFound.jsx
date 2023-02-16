import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <Typography variant="h3">Page Not Found </Typography>
      <Typography variant="body1">

        <Link to={"/"}>Go to Home</Link>
      </Typography>
    </>
  );
}
