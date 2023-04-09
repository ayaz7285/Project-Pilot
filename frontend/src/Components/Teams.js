import React from "react";
import { Box } from "@mui/material";
import TeamCard from "./TeamCard";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

export default function () {
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
      <h1>Teams</h1>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyItems: "space-around",
        }}
      >
        <TeamCard color={randomHexColor()} />
        <TeamCard color={randomHexColor()} />
        <TeamCard color={randomHexColor()} />
        <TeamCard color={randomHexColor()} />
        <TeamCard color={randomHexColor()} />
        <TeamCard color={randomHexColor()} />
        <Link
          to="/createProject"
          style={{ color: "black", textDecoration: "none" }}
        >
          <Card
            sx={{
              minWidth: 206,
              minHeight: 206,
              margin: "20px",
            }}
            elevation={4}
          >
            <Avatar
              sx={{
                width: "100px",
                height: "100px",
                margin: "35px auto",
              }}
              variant="rounded"
            >
              <GroupAddIcon sx={{ fontSize: "70px" }} />
            </Avatar>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                paddingBottom: "15px",
                fontWeight: "bold",
              }}
            >
              Create Team
            </div>
          </Card>
        </Link>
      </Box>
    </Box>
  );
}
