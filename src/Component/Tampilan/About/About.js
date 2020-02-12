import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';

class About extends Component {
    render() {
        return (
            <Container style={{marginTop:100}}>
                <Typography style={{fontSize:46,fontWeight:'bold'}}>I'm Nur Iman.</Typography>
                <Typography style={{fontSize:20,marginTop:50}}>I am a software engineer from Bogor, Indonesia. Love working on web technologies like React, Node Js.</Typography>
            </Container>
        );
    }
}

export default About;