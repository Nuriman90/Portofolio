import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <div>
        <Grid container align="center" style={{ marginTop: 100 }}>
          {/* Kiri */}
          <Grid item xs={2} sm={2} md={2} lg={2}>
            <img
              style={{ height: 80, marginTop: -20 }}
              alt="logo"
              src={require("../Images/logo.png")}
            />
          </Grid>
          {/* Tengah */}
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <Typography style={{ fontSize: 13, fontWeight: 800 }}>
                I am a software engineer from Bogor, Indonesia. Love working on
                web technologies like React
            </Typography>
          </Grid>
          {/* Kanan */}
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Grid container spacing={4}>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <div>
                  <Typography style={{ textAlign: "right" }}>
                    Temukan saya di:
                  </Typography>
                </div>
              </Grid>
              {/* Logo Facebook */}
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Typography
                  variant="body2"
                  align="center"
                  style={{ marginBottom: 5, textAlign: "left" }}
                >
                  <img
                    className="footer-icon"
                    alt="telkom social medias"
                    src={require("../Images/default_facebook.png")}
                    style={{ width: 25, height: 25, marginRight: 15 }}
                  />
                  <img
                    className="footer-icon"
                    alt="telkom social medias"
                    src={require("../Images/default_instagram.png")}
                    style={{ width: 25, height: 25, marginRight: 15 }}
                  />
                  <img
                    className="footer-icon"
                    alt="telkom social medias"
                    src={require("../Images/default_twitter.png")}
                    style={{ width: 25, height: 25, marginRight: 15 }}
                  />
                  <img
                    className="footer-icon"
                    alt="telkom social medias"
                    src={require("../Images/default_youtube.png")}
                    style={{ width: 25, height: 25, marginRight: 15 }}
                  />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* CopyRight */}
        <div style={{ backgroundColor: "blue", height: 70 }}>
          <Typography variant="body2" align="center" style={{ color: "white", marginTop: 10 }}>
              Hosted on Netlify. Source available on Github.
          </Typography>
          <Typography variant="body2" align="center" style={{ color: "white", marginTop: 10 }}>
            Copyright 2019 © MetraPlasa. All Rights Reserved. | Nuriman8171@gmail.com
          </Typography>
        </div>
      </div>
    );
  }
}

export default Footer;
