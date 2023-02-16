import { Typography } from "@mui/material";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CareerList from "../components/CareerList";

export default function Careers() {
  const careerData = useLoaderData();
  console.log("jobDetail", careerData);

  return (
    <>
      <Typography variant="h4">Careers</Typography>
      {careerData &&
        careerData.map((career) => {
          return (
            <Link to={career.id.toString()} key={career.id}>
              <CareerList title={career.title} location={career.location} />
            </Link>
          );
        })}
    </>
  );
}

//Career Loader
export const careerLoader = async () => {
  const response = await fetch("http://localhost:5000/careers");
  if (!response.ok) {
    console.log(response);
    throw new Error("Job Not Found");
  }
  const jsonResponse = await response.json();
  return jsonResponse;
};
