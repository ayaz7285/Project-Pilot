import React from "react";
import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r, g, b];
  }

  function randomHexColor() {
    let [r, g, b] = randomRgbColor();
    let hr = r.toString(16).padStart(2, "0");
    let hg = g.toString(16).padStart(2, "0");
    let hb = b.toString(16).padStart(2, "0");
    return "#" + hr + hg + hb;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <h1>Projects</h1>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyItems: "space-around",
        }}
      >
        <ProjectCard color={randomHexColor()} />
        <ProjectCard color={randomHexColor()} />
        <ProjectCard color={randomHexColor()} />
        <ProjectCard color={randomHexColor()} />
        <ProjectCard color={randomHexColor()} />
        <ProjectCard color={randomHexColor()} />
      </Box>
    </Box>
  );
}
