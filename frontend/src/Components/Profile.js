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
import Paper from "@mui/material/Paper";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <Box>
      <Paper
        elevation={4}
        style={{
          width: "75%",
          margin: "20px auto",
          height: "80vh",
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
          <div style={{ padding: "25px" }}>
            <div style={{ fontSize: "30px", fontWeight: "bold" ,marginBottom:"2px"}}>
              Ayaz Sarwar
            </div>
            <div style={{ color: "#A7A6BA" ,marginBottom:"2px"}}>@ayaz7285</div>
            <div style={{ display: "flex" ,marginBottom:"2px"}}>
              <GroupSharpIcon style={{marginTop:"10px"}}/>
              <div style={{ marginLeft: "10px" }}>
                <div>191 followers</div>
                <div>157 following</div>
              </div>
            </div>
            <div style={{ display: "flex" ,marginBottom:"2px"}}>
              <ApartmentIcon />
              <div style={{ marginLeft: "10px" }}>Company</div>
            </div>
            <div style={{ display: "flex" ,marginBottom:"2px"}}>
              <SchoolIcon />
              <div style={{ marginLeft: "10px" }}>Institute</div>
            </div>
            <div style={{ display: "flex" ,marginBottom:"2px"}}>
              <LinkedInIcon />
              <div style={{ marginLeft: "10px" }}>Linkedin</div>
            </div>
            <div style={{ display: "flex" ,marginBottom:"2px"}}>
              <GitHubIcon />
              <div style={{ marginLeft: "10px" }}>Github</div>
            </div>
            <div style={{ display: "flex" ,marginBottom:"2px"}}>
              <FacebookSharpIcon />
              <div style={{ marginLeft: "10px" }}>Facebook</div>
            </div>
            <div style={{ display: "flex" }}>
              <LanguageSharpIcon />
              <div style={{ marginLeft: "10px" }}>Website</div>
            </div>
          </div>
        </div>

        <div className="profile-right-side">
          <div
            style={{
              display: "flex",
              position: "relative",
              width: "690px",
              height: "100px",
            }}
          >
            <div>
              <div style={{ fontSize: "30px", paddingLeft: "20px" ,paddingTop:"10px",fontWeight:"bold"}}>
                  Ayaz Sarwar
              </div>
              <div style={{ fontSize: "20px", paddingLeft: "20px",color:"#3900f5"}}>
                  Software Developer
              </div>
            </div>
            <Button
              variant="outlined"
              style={{
                right: 0,
                marginRight: "15px",
                marginTop:"20px",
                position: "absolute",
                borderRadius: "20px",
              }}
            >
              <Link to="/editprofile" style={{color:"blue",textDecoration:"none"}}>Edit Profile</Link>
            </Button>
          </div>
          <Divider sx={{width:"95%",margin:"auto"}}/>
          <div style={{minHeight: "170px" ,padding:"20px"}}>
            I’m a first year CS Master's student at McMaster University, Canada,
            and received my CS Bachelor's degree from Shandong University,
            China. Currently, I am open to SDE/SWE Co-op position starting from
            May/Sept 2023. I hope to be a Full-stack Developer in the future.
          </div>
          <Divider sx={{width:"95%",margin:"auto"}}/>
          <div style={{minHeight:"320px",padding:"20px",fontSize:"17px"}}>
              <div style={{display:"flex",marginBottom:"10px"}}>
                <div style={{width:"40%"}}>
                    userid
                </div>
                <div style={{color:"#6699CC"}}>
                    @ayaz7285
                </div>
              </div>
              <div style={{display:"flex",marginBottom:"10px"}}>
                <div style={{width:"40%"}}>
                    name
                </div>
                <div style={{color:"#6699CC"}}>
                    Ayaz Sarwar
                </div>
              </div>
              <div style={{display:"flex",marginBottom:"10px"}}>
                <div style={{width:"40%"}}>
                    email
                </div>
                <div style={{color:"#6699CC"}}>
                    ayaz.3.sarwar@gmail.com
                </div>
              </div>
              <div style={{display:"flex",marginBottom:"10px"}}>
                <div style={{width:"40%"}}>
                    contact
                </div>
                <div style={{color:"#6699CC"}}>
                    +91 8374104891
                </div>
              </div>
              <div style={{display:"flex",marginBottom:"10px"}}>
                <div style={{width:"40%"}}>
                    Profession
                </div>
                <div style={{color:"#6699CC"}}>
                    Software Developer
                </div>
              </div>
          </div>
        </div>
      </Paper>
    </Box>
  );
}
