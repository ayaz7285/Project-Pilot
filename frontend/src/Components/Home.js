import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import DropDown from "./DropDown";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import MyComponent from "./MyComponent";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { NavLink, Outlet, Link, Navigate,useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [active,setActive] = React.useState(1);
  const location = useLocation().pathname;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  function handleActiveLink(key){
    setActive(key);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    console.log(localStorage.getItem("token"));
  };

  if (localStorage.getItem("token") == null)
    return <Navigate to="/login"></Navigate>;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#F1E4EF" }}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          <div class="inner">
            <IconButton size="large">
              <Avatar alt="user1" src="pfp1.jpg" />
            </IconButton>
            <DropDown />
          </div>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <div style={{backgroundColor:"#6B3F78" , height:"100%", color:"white"}}>
          <DrawerHeader>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                fontFamily: 'Major Mono Display , monospace',
              }}
            >
              ProjectPilot
            </span>
            <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
              {theme.direction === "rt1" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider/>
          <List>
            <div style={location==="/home" && active===1?{borderRight:"3.5px solid white",backgroundColor:"#904997"}:{}}>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="/home"
                onClick={() => handleActiveLink(1)}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <HomeIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Home"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              </NavLink>
            </div>

            <div style={location==="/tasks" && active===2?{borderRight:"3.5px solid white",backgroundColor:"#904997"}:{}}>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="/tasks"
                onClick={() => handleActiveLink(2)}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <TaskAltIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Tasks"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              </NavLink>
            </div>
            <div style={location==="/projects" && active===3?{borderRight:"3.5px solid white",backgroundColor:"#904997"}:{}}>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="/projects"
                onClick={() => handleActiveLink(3)}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <AssignmentOutlinedIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Projects"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              </NavLink>
            </div>
            <div style={location==="/teams" && active===4 ?{borderRight:"3.5px solid white",backgroundColor:"#904997"}:{}}>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="/teams"
                onClick={() => handleActiveLink(4)}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <GroupsIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Teams"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              </NavLink>
            </div>
          </List>
        </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor:"#D6EDFF",minHeight:"750px"}}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
