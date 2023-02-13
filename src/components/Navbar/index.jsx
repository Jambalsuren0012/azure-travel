import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink, Link } from "react-router-dom";
import styles from "./style.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "0" }}
      >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 , color: "#D3D3D3" }}>
            Trvlx.
          </Typography>
          <Box sx={{ display: "flex", gap: "10" }}>
            <NavLink>
              <Button>
                <Link className={styles.link} to={"/"}>
                  <Typography variant="7" sx={{ color: "#D3D3D3" }}>
                    Home
                  </Typography>
                </Link>
              </Button>
            </NavLink>
            <NavLink>
              <Button>
                <Link to={"/signUp"}>
                  <Typography variant="h7" sx={{ color: "#D3D3D3" }}>
                    Login
                  </Typography>
                </Link>
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
