import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import "../App.css";
import { otherMapping, pageMapping } from "./PageCreation";

const drawerWidth = 260;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [searchInput, setSearchInput] = React.useState("");

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const filteredPageMapping = Object.fromEntries(
    Object.entries(pageMapping).filter(([label]) => label.toLowerCase().includes(searchInput.toLowerCase()))
  );

  const filteredOtherMapping = Object.fromEntries(
    Object.entries(otherMapping).filter(([label]) => label.toLowerCase().includes(searchInput.toLowerCase()))
  );

  const drawer = (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <input className="searchBar" type="text" value={searchInput} onChange={handleSearchInputChange} />
      </Box>
      <Divider />
      <List>
        {Object.entries(filteredPageMapping).map(([label, pageData]) => (
          <ListItem component={Link} to={pageData.url} key={label}>
            <ListItemIcon>{pageData.icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Object.entries(filteredOtherMapping).map(([label, pageData]) => (
          <ListItem component={Link} to={pageData.url} key={label}>
            <ListItemIcon>{pageData.icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}></AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
