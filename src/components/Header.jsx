import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Indonesia
        </Button>
        <Button color="inherit" component={Link} to="/programming">
          Programming
        </Button>
        <Button color="inherit" component={Link} to="/saved">
          Saved
        </Button>
        <Button color="inherit" component={Link} to="/search">
          Search
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
