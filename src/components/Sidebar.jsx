import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
  import { NavLink } from "react-router-dom";
  import DashboardIcon from "@mui/icons-material/Dashboard";
  import PeopleIcon from "@mui/icons-material/People";
  import SettingsIcon from "@mui/icons-material/Settings";
  import Diversity1Icon from '@mui/icons-material/Diversity1';
  const drawerWidth = 240;
  const Sidebar = () => {
    return (
      <Drawer variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      >
        <List>
          <ListItem
            button
            component={NavLink}
            to="/">
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
  
          <ListItem
            button
            component={NavLink}
            to="/users">
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
  
          <ListItem
            button
            component={NavLink}
            to="/settings">
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>

          <ListItem
            button
            component={NavLink}
            to="/compony">
            <ListItemIcon><Diversity1Icon /></ListItemIcon>
            <ListItemText primary="Compony" />
          </ListItem>

              <ListItem
            button
            component={NavLink}
            to="/acc">
            <ListItemIcon><Diversity1Icon /></ListItemIcon>
            <ListItemText primary="Accordion Component" />
          </ListItem>
  
       <ListItem
            button
            component={NavLink}
            to="/contact">
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="ContactForm" />
          </ListItem>

        </List>
      </Drawer>
    );
  };
  
  export default Sidebar;