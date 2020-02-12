import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Grid, withStyles, Typography } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { Styles } from "./Style";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

class AppBar1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed" style={{ backgroundColor: "yellow" }}>
        <Toolbar>
          <Grid container spacing={2}>
            {/* Logo */}
            <Grid item xs={9} sm={9} md={9} lg={9}>
              <NavLink to="/">
                <img
                  className={classes.logo}
                  alt="Logo"
                  src={require("../Images/Blanja.png")}
                ></img>
              </NavLink>
            </Grid>
            {/* Socials */}
            <Grid item xs={2} sm={1} md={1} lg={1}>
              <Typography>
                <NavLink className={classes.link} to="/Socials">
                  Socials
                </NavLink>
              </Typography>
            </Grid>
            {/* About */}
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <Typography>
                <NavLink className={classes.link} to="/About">
                  About
                </NavLink>
              </Typography>
            </Grid>
            {/* Test */}
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {popupState => (
                  <div>
                    <Typography {...bindTrigger(popupState)} className={classes.link}>
                      Test
                    </Typography>
                    <Menu style={{ marginTop: 50, marginLeft: -60 }} {...bindMenu(popupState)}>
                      {/* Rumus Matematika */}
                      <MenuItem>
                        <PopupState variant="popover" popupId="demo-popup-menu">
                          {popupState => (
                            <div>
                              <Typography {...bindTrigger(popupState)} className={classes.link}>
                                Matematika
                              </Typography>
                              <Menu style={{ marginLeft: 120 }} {...bindMenu(popupState)}>
                                <MenuItem>
                                  <NavLink className={classes.link} to="/Rumus">
                                    Rumus
                                  </NavLink>
                                </MenuItem>
                              </Menu>
                            </div>
                          )}
                        </PopupState>
                      </MenuItem>
                      {/* CRUD */}
                      <MenuItem >
                          <PopupState variant="popover" popupId="demo-popup-menu" >
                            {popupState => (
                              <div>
                                <Typography {...bindTrigger(popupState)} className={classes.link}>
                                  CRUD
                                </Typography>
                                <Menu style={{ marginLeft: 120, }} {...bindMenu(popupState)}>
                                  <MenuItem>
                                  <NavLink className={classes.link} to="/Crud" >
                                    Data
                                  </NavLink>
                                </MenuItem>
                                </Menu>
                              </div>
                            )}
                          </PopupState>
                        </MenuItem>

                    </Menu>
                  </div>
                )}
              </PopupState>
            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(Styles)(AppBar1);
