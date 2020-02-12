import React, { Component } from "react";
import {
  Grid,
  Container,
  withStyles,
  Typography,
  Card
} from "@material-ui/core";
import { Styles } from "./Style";

class Socials extends Component {
  constructor(props) {
    super(props);
    const { classes } = this.props;
    this.state = {
      items: [  
        <Grid item key={1} xs={4} sm={4} md={4} lg={4}>
          {/* GitLab */}
          <Card className={classes.root} style={{backgroundColor:"#FA6D34"}} >  
          <a  style={{textDecoration:'none'}}
              href="https://gitlab.playcourt.id/dilo-nuriman8171/"
            >
            <center>
            <img style={{width: "30%",marginTop:30}} alt="Gitlab" src={require("../../A&F/Images/gitlab1.png")} />
            <Typography style={{fontWeight:'bold',color:'white'}}>GitLab</Typography>
            </center>
          </a>
          </Card>
        </Grid>,

        <Grid item key={2} xs={4} sm={4} md={4} lg={4}>
          {/* GitHub */}
          <Card className={classes.root} style={{backgroundColor:"#25292E"}} >
          <a  style={{textDecoration:'none'}}
              href="https://github.com/Nuriman90/"
            >
            <center>
            <img style={{width: "20%",marginTop:50}} alt="Github" src={require("../../A&F/Images/github1.png")} />
            <Typography style={{fontWeight:'bold',color:'white',marginTop:18}}>GitHub</Typography>
            </center>
            </a>
          </Card>
        </Grid>,

        <Grid item key={3} xs={4} sm={4} md={4} lg={4}>
          {/* Facebook */}
          <Card className={classes.root} style={{backgroundColor:"#3B5998"}} >
          <a  style={{textDecoration:'none'}} 
              href="https://web.facebook.com/sikay.iman/"
            >
            <center>
            <img style={{width: "20%",marginTop:50}} alt="Facebook" src={require("../../A&F/Images/facebook1.png")} />
            <Typography style={{fontWeight:'bold',color:'white',marginTop:23}}>Facebook</Typography>
            </center>
            </a>          
          </Card>
        </Grid>,

        <Grid item key={4} xs={4} sm={4} md={4} lg={4}>
          {/* Linkedin2 */}
          <Card className={classes.root} style={{backgroundColor:"#0E76A8"}} >
          <a style={{textDecoration:'none'}}
              href="https://www.linkedin.com/in/nur-iman-51a4a517a/"
            >
          <center>
          <img style={{width: "20%",marginTop:50}} alt="Linkedin2" src={require("../../A&F/Images/linkedin2.png")} />
          <Typography style={{fontWeight:'bold',color:'white',marginTop:20}}>Linkedin</Typography>
          </center>
          </a>
          </Card>
        </Grid>,

        <Grid item key={5} xs={4} sm={4} md={4} lg={4}>
          {/* Instagram */}
          <Card className={classes.root} style={{backgroundColor:"#E1306C"}} >
          <a  style={{textDecoration:'none'}}
              href="https://www.instagram.com/imanmen_875/"
            >
          <center>
          <img style={{width: "20%",marginTop:50}} alt="Instagram" src={require("../../A&F/Images/instagram1.png")} />
          <Typography style={{fontWeight:'bold',color:'white',marginTop:20}}>Instagram</Typography>
          </center>
          </a>
          </Card>
        </Grid>,

        <Grid item key={6} xs={4} sm={4} md={4} lg={4}>
          {/* Youtube */}
          <Card className={classes.root} style={{backgroundColor:"#C4302B"}} >
          <a  style={{textDecoration:'none'}}
              href="https://www.instagram.com/imanmen_875/"
            >
          <center>
          <img style={{width: "20%",marginTop:50}} alt="Youtube" src={require("../../A&F/Images/youtube1.png")} />
          <Typography style={{fontWeight:'bold',color:'white',marginTop:20}}>Youtube</Typography>
          </center>
          </a>
          </Card>
        </Grid>
      ]
    };
  }
  render() {
    return (
      <div>
        <Container>
          <Grid container style={{ marginTop: 100 }}>

                <Container style={{fontSize:50,color:"black",fontWeight:'bold'}} align="center">
                    Socials
                </Container>
                
                <Container style={{fontSize:32,color:"black",fontWeight:'bold'}} align="center" >
                    I am available (virtually) anywhere on the interwebs.
                </Container>

            <Grid container spacing={2} style={{marginTop:50}}>
              {this.state.items}
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(Styles)(Socials);
