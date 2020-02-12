import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Route, Switch, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Styles } from "./Style.js";
import Book from "./Book/Book";
import AddBook from "./Book/AddBook";
import EditBook from "./Book/EditBook";
import MenuItem from '@material-ui/core/MenuItem';

class Crud extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.rootUtama}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <List>
          <MenuItem>
                <Link style={{ marginLeft: 20 }} className={classes.ln} to="/Crud" ><Button>Data Buku</Button></Link>
              </MenuItem>
            <NavLink to="/dashboard-admin/data-murid" className={classes.link}>
              <ListItem button>
                <ListItemText primary="Murid" />
              </ListItem>
            </NavLink>
            <NavLink to="/dashboard-admin/data-materi" className={classes.link}>
              <ListItem button>
                <ListItemText primary="Materi" />
              </ListItem>
            </NavLink>
            <NavLink
              to="/dashboard-admin/data-sliders"
              className={classes.link}
            >
              <ListItem button>
                <ListItemText primary="Sliders" />
              </ListItem>
            </NavLink>
            <NavLink
              to="/dashboard-admin/data-sponsor"
              className={classes.link}
            >
              <ListItem button>
                <ListItemText primary="Sponsor" />
              </ListItem>
            </NavLink>
          </List>
          <Divider />
          <List>
          <div align='center' style={{ marginTop: 20 }}>
            <Button
              style={{ background: "#A93092" }}
              variant="contained"
              color="primary"
              startIcon={<ExitToAppIcon />}
            >
              <NavLink className={classes.ld} to="/">
                Keluar
              </NavLink>
            </Button>
            </div>
          </List>
        </Drawer>
        {/* Pindah Halaman */}
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
          <Route path="/Crud" exact component={Book} />
          <Route path="/Crud/AddBook" component={AddBook} />
          <Route path="/Crud/EditBook" component={EditBook} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withStyles(Styles)(Crud);
