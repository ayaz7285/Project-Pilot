import * as React from "react";
import Box from "@mui/material/Box";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import Button from "@mui/material/Button";
import GroupSharpIcon from "@mui/icons-material/GroupSharp";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Paper from "@mui/material/Paper";
import { Divider, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export default function EditProfile() {

  const handleSubmit = () => {
    console.log("changes saved");
  };

  return (
    <Box>
      <Paper
        elevation={4}
        style={{
          width: "80%",
          margin: "20px auto",
          height: "fit-content",
          display: "flex",
        }}
      >
        <div
          className="profile-left-side"
          style={{ width: "35%", border: "1px solid #A7A6BA", height: "100%" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="pfp1.jpg" style={{ height: "260px", width: "230px" }} />
          </div>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            sx={{ marginLeft: "120px" }}
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
          <div style={{ padding: "15px" }}>
            <div
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                defaultValue="Ayaz Sarwar"
              />
            </div>
            <div style={{ color: "#A7A6BA", marginBottom: "20px" }}>
              <TextField
                id="outlined-basic"
                label="userid"
                variant="outlined"
                defaultValue="@ayaz7285"
              />
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <GroupSharpIcon style={{ marginTop: "10px" }} />
              <div style={{ marginLeft: "10px" }}>
                <div>191 followers</div>
                <div>157 following</div>
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <ApartmentIcon sx={{ marginTop: "12px" }} />
              <div style={{ marginLeft: "10px" }}>
                <TextField
                  id="outlined-basic"
                  label="Company"
                  variant="outlined"
                  defaultValue="company"
                />
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <SchoolIcon sx={{ marginTop: "12px" }} />
              <div style={{ marginLeft: "10px" }}>
                <TextField
                  id="outlined-basic"
                  label="Institute"
                  variant="outlined"
                  defaultValue="institute"
                />
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <LinkedInIcon sx={{ marginTop: "12px" }} />
              <div style={{ marginLeft: "10px" }}>
                <TextField
                  id="outlined-basic"
                  label="Linkedin"
                  variant="outlined"
                  defaultValue="linkedin"
                />
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <GitHubIcon sx={{ marginTop: "12px" }} />
              <div style={{ marginLeft: "10px" }}>
                <TextField
                  id="outlined-basic"
                  label="Github"
                  variant="outlined"
                  defaultValue="github"
                />
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <FacebookSharpIcon sx={{ marginTop: "12px" }} />
              <div style={{ marginLeft: "10px" }}>
                <TextField
                  id="outlined-basic"
                  label="Facebook"
                  variant="outlined"
                  defaultValue="facebook"
                />
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <LanguageSharpIcon sx={{ marginTop: "12px" }} />
              <div style={{ marginLeft: "10px" }}>
                <TextField
                  id="outlined-basic"
                  label="Website"
                  variant="outlined"
                  defaultValue="website"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="profile-right-side">
          <div
            style={{
              display: "flex",
              position: "relative",
              width: "690px",
              height: "fit-content",
              marginBottom: "25px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "30px",
                  paddingLeft: "20px",
                  paddingTop: "15px",
                  fontWeight: "bold",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="name"
                  variant="outlined"
                  defaultValue="Ayaz Sarwar"
                />
              </div>
              <div
                style={{
                  fontSize: "20px",
                  paddingLeft: "20px",
                  paddingTop: "25px",
                  color: "#3900f5",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Profession"
                  variant="outlined"
                  defaultValue="Software Developer"
                />
              </div>
            </div>
            <Button
              variant="outlined"
              onClick={handleSubmit}
              style={{
                right: 0,
                marginRight: "15px",
                marginTop: "20px",
                position: "absolute",
                borderRadius: "20px",
              }}
            >
              <Link
                to="/profile"
                style={{ color: "blue", textDecoration: "none" }}
              >
                Save Changes
              </Link>
            </Button>
          </div>
          <Divider sx={{ width: "95%", margin: "auto" }} />
          <div style={{ minHeight: "170px", padding: "20px" }}>
            <TextField
              id="outlined-multiline-static"
              label="Bio"
              multiline
              rows={7}
              defaultValue="I’m a first year CS Master's student at McMaster University, Canada, and received my CS Bachelor's degree from Shandong University, China. Currently, I am open to SDE/SWE Co-op position starting from May/Sept 2023. I hope to be a Full-stack Developer in the future."
              sx={{ width: "100%" }}
            />
          </div>
          <Divider sx={{ width: "95%", margin: "auto" }} />
          <div
            style={{ minHeight: "320px", padding: "20px", fontSize: "17px" }}
          >
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <div style={{ width: "40%" }}>userid</div>
              <div style={{ color: "#6699CC" }}>
                <TextField
                  id="outlined-basic"
                  label="userid"
                  variant="outlined"
                  defaultValue="@ayaz7285"
                />
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <div style={{ width: "40%" }}>name</div>
              <div style={{ color: "#6699CC" }}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  defaultValue="Ayaz Sarwar"
                />
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <div style={{ width: "40%" }}>email</div>
              <div style={{ color: "#6699CC" }}>
                <TextField
                  id="outlined-basic"
                  label="email"
                  variant="outlined"
                  defaultValue="ayaz.3.sarwar@gmail.com"
                />
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <div style={{ width: "40%" }}>contact</div>
              <div style={{ color: "#6699CC" }}>
                <TextField
                  id="outlined-basic"
                  label="Contact"
                  variant="outlined"
                  defaultValue="+91 8374104891"
                />
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <div style={{ width: "40%" }}>Profession</div>
              <div style={{ color: "#6699CC" }}>
                <TextField
                  id="outlined-basic"
                  label="Profession"
                  variant="outlined"
                  defaultValue="Software Developer"
                />
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </Box>
  );
}
