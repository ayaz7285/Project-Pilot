import React from "react";
import Divider from "@mui/material/Divider";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
export default function DashBoard() {
  const username = localStorage.getItem("token");
  const colors = [
    "#F9627D",
    "#83B692",
    "#F0A6CA",
    "#CC3EAF",
    "#7E66A3",
    "#FF5400",
    "#E74B58",
    "#DC0073",
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Hi, {username}</h2>
      <h4 style={{ textAlign: "center" }}>Welcome to your DashBoard</h4>
      <div id="dashboard-container">
        <div id="dashboard-tasks">
          <h3 style={{ paddingLeft: "20px" }}>Tasks Due Soon</h3>
          <Divider />
          <div id="dashboard-list-of-tasks">
            <div id="dashboard-task-card">
              <span class="critical-dot"></span>
              <div id="dashboard-task-details">
                <div style={{ height: "70%", fontWeight: "bold" }}>
                  Add new Controllers controllers
                </div>
                <div style={{ color: "#888896" }}>Dec 13</div>
              </div>
            </div>
            <div id="dashboard-task-card">
              <span class="major-dot"></span>
              <div id="dashboard-task-details">
                <div style={{ height: "70%", fontWeight: "bold" }}>
                  Add new Controllers controllers
                </div>
                <div style={{ color: "#888896" }}>Dec 13</div>
              </div>
            </div>
            <div id="dashboard-task-card">
              <span class="minor-dot"></span>
              <div id="dashboard-task-details">
                <div style={{ height: "70%", fontWeight: "bold" }}>
                  Add new Controllers controllers
                </div>
                <div style={{ color: "#888896" }}>Dec 13</div>
              </div>
            </div>
            <div id="dashboard-task-card">
              <span class="low-dot"></span>
              <div id="dashboard-task-details">
                <div style={{ height: "70%", fontWeight: "bold" }}>
                  Add new Controllers controllers
                </div>
                <div style={{ color: "#888896" }}>Dec 13</div>
              </div>
            </div>

            <div id="dashboard-task-card">
              <span class="minor-dot"></span>
              <div id="dashboard-task-details">
                <div style={{ height: "70%", fontWeight: "bold" }}>
                  Add new Controllers controllers
                </div>
                <div style={{ color: "#888896" }}>Dec 13</div>
              </div>
            </div>
            <div id="dashboard-task-card">
              <span class="major-dot"></span>
              <div id="dashboard-task-details">
                <div style={{ height: "70%", fontWeight: "bold" }}>
                  Add new Controllers controllers
                </div>
                <div style={{ color: "#888896" }}>Dec 13</div>
              </div>
            </div>
            <div id="dashboard-newtask-card">
              <Link
                to="/createTask"
                style={{ color: "black", textDecoration: "none" }}
              >
                <div style={{ display: "flex" }}>
                  <AddCircleOutlineRoundedIcon
                    sx={{ fontSize: "40px", margin: "25px 15px" }}
                  />
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      paddingTop: "33px",
                    }}
                  >
                    Create Task
                  </div>
                </div>
              </Link>
            </div>
            <div id="dashboard-newtask-card">
              <Link
                to="/tasks"
                style={{ color: "black", textDecoration: "none" }}
              >
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      padding: "34px",
                    }}
                  >
                    View all Tasks
                  </div>
                  <ArrowForwardIosIcon
                    sx={{ fontSize: "20px", margin: "36px 10px" }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div id="dashboard-projects">
          <h3 style={{ paddingLeft: "20px" }}>Projects</h3>
          <Divider />
          <div id="dashboard-list-of-projects">
            <div>
              <div
                id="dashboard-project"
                style={{ backgroundColor: `${colors[0]}` }}
              >
                <AssignmentIcon
                  sx={{
                    color: "white",
                    margin: "15px",
                    height: "50px",
                    width: "50px",
                  }}
                />
                <div style={{ textAlign: "center" }}>Project 0</div>
              </div>
            </div>

            <div>
              <div
                id="dashboard-project"
                style={{ backgroundColor: `${colors[1]}` }}
              >
                <AssignmentIcon
                  sx={{
                    color: "white",
                    margin: "15px",
                    height: "50px",
                    width: "50px",
                  }}
                />
                <div style={{ textAlign: "center" }}>Project 1</div>
              </div>
            </div>
            <div>
              <div
                id="dashboard-project"
                style={{ backgroundColor: `${colors[2]}` }}
              >
                <AssignmentIcon
                  sx={{
                    color: "white",
                    margin: "15px",
                    height: "50px",
                    width: "50px",
                  }}
                />
                <div style={{ textAlign: "center" }}>Project 2</div>
              </div>
            </div>
            <div>
              <div
                id="dashboard-project"
                style={{ backgroundColor: `${colors[3]}` }}
              >
                <AssignmentIcon
                  sx={{
                    color: "white",
                    margin: "15px",
                    height: "50px",
                    width: "50px",
                  }}
                />
                <div style={{ textAlign: "center" }}>Project 3</div>
              </div>
            </div>
            <div>
              <div
                id="dashboard-project"
                style={{ backgroundColor: `${colors[4]}` }}
              >
                <AssignmentIcon
                  sx={{
                    color: "white",
                    margin: "15px",
                    height: "50px",
                    width: "50px",
                  }}
                />
                <div style={{ textAlign: "center" }}>Project 4</div>
              </div>
            </div>

            <div>
              <div
                id="dashboard-project"
                style={{ backgroundColor: `${colors[5]}` }}
              >
                <AssignmentIcon
                  sx={{
                    color: "white",
                    margin: "15px",
                    height: "50px",
                    width: "50px",
                  }}
                />
                <div style={{ textAlign: "center" }}>Project 5</div>
              </div>
            </div>
            <div>
              <div
                id="dashboard-project"
                style={{ backgroundColor: `${colors[6]}` }}
              >
                <AssignmentIcon
                  sx={{
                    color: "white",
                    margin: "15px",
                    height: "50px",
                    width: "50px",
                  }}
                />
                <div style={{ textAlign: "center" }}>Project 6</div>
              </div>
            </div>

            <div>
              <div
                id="dashboard-project"
                style={{ backgroundColor: `${colors[7]}` }}
              >
                <AssignmentIcon
                  sx={{
                    color: "white",
                    margin: "15px",
                    height: "50px",
                    width: "50px",
                  }}
                />
                <div style={{ textAlign: "center" }}>Project 7</div>
              </div>
            </div>
            <Link
              to="/projects"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div
                id="dashboard-project"
                style={{ border: "3.5px dashed gray" }}
              >
                <ArrowForwardIosIcon
                  sx={{
                    color: "gray",
                    margin: "12px",
                    height: "50px",
                    width: "50px",
                    size: "10px",
                  }}
                />
                <div style={{ textAlign: "center" }}>View All</div>
              </div>
            </Link>

            <div>
            <Link
              to="/createProject"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div
                id="dashboard-project"
                style={{ border: "3.5px dashed gray" }}
              >
                <AddIcon
                  sx={{
                    color: "gray",
                    margin: "12px",
                    height: "50px",
                    width: "50px",
                    size: "14px",
                  }}
                />
                <div style={{ textAlign: "center" }}>New Project</div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
