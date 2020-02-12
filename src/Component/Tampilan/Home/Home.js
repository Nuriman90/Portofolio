import React, { Component } from "react";
import { Grid, Container, withStyles } from "@material-ui/core";
import { Styles } from "./Style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from "react-image";
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

class Home extends Component {
  constructor(){
    super()
    this.state = {
        open : false
    };
  }
  handleClose = () => {
    this.setState({
        open : false
    })
  }
  componentDidMount(){
    setTimeout(() => {
        this.setState({
            open : true
        })
    })
  }

  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { open } = this.state
    return (
      <div className={classes.bgslider}>
        <Container style={{ marginTop: 100 }}>
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={this.handleClose}
          >
            <Fade in={open}>
              <div className={classes.paper}>
              <img src={require("../../A&F/Images/modalpromo.jpg")} alt="modal"
                style={{ width: 800, height: 400 }} />
                </div>
            </Fade>
          </Modal>
        </div>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {/* Kosong */}
            </Grid>

            <Grid item xs={12} md={6}>
              <div className={classes.containerslide}>
                <Slider {...settings}>
                  <div className={classes.slickSlideImg}>
                    <Img
                      className={classes.slider}
                      alt="banner"
                      src={require("../../A&F/Images/slider1.jpg")}
                    />
                  </div>
                  <div>
                    <Img
                      className={classes.slider}
                      alt="banner"
                      src={require("../../A&F/Images/slider2.jpg")}
                    />
                  </div>
                  <div>
                    <Img
                      className={classes.slider}
                      alt="banner"
                      src={require("../../A&F/Images/slider3.jpg")}
                    />
                  </div>
                </Slider>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(Styles)(Home);
