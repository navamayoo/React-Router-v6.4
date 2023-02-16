import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { Divider, Typography, Box } from "@mui/material";

export default function JobDetail() {
  const { id } = useParams();
  console.log("JobDetail", id);
  const jobData = useLoaderData();
  console.log("jobData", jobData);

  return (
    <>
      <Divider sx={{ mx: 20, my: 5 }} />
      <Box sx={{ p: 2 }}>
        <Typography variant="h4">{jobData.title}</Typography>
        <Typography variant="h6" color="blue">
          {jobData.salary}
        </Typography>
        <Typography variant="body1" color="gray">
          {jobData.location}
        </Typography>
      </Box>
    </>
  );
}

export const JobDetailLoader = async ({ params }) => {
  const { id } = params;
  console.log(id);
  const response = await fetch("http://localhost:5000/careers/" + id);
  console.log(response);
  if (!response.ok) {
    console.log(response);
    throw new Error("Job Not Found");
  }
  const jsonResponse = await response.json();
  return jsonResponse;
};
