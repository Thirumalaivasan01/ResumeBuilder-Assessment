import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

function Appbarfixed() {
  let pos = {
    position: "sticky",
    top: "0"
  };
  return (
    <div>
      {/* <h2>How to use AppBar Component in ReactJS?</h2> */}
      <AppBar position="sticky" id="appbar">
        <Toolbar>
          <IconButton
            edge="start"
            style={{
              marginRight: 20
            }}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1
            }}
          >
            Resume Builder
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Appbarfixed;
