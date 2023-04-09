import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const options = ["Manage Team", "Add Member", "Leave Team"];

const ITEM_HEIGHT = 48;

export default function TeamCardMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{position:"relative",padding:"5px"}}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{position:"absolute",right:0}}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <SettingsIcon /><span style={{marginLeft:"7px"}}>Manage Team</span> 
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <PersonAddAltSharpIcon /> <span style={{marginLeft:"7px"}}>Add Member</span> 
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <LogoutOutlinedIcon /> <span style={{marginLeft:"7px"}}>Leave Team</span> 
        </MenuItem>
      </Menu>
    </div>
  );
}
