import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBar1 from "../src/Component/A&F/AppBar/AppBar1";
import Home from "../src/Component/Tampilan/Home/Home";
import Socials from "../src/Component/Tampilan/Socials/Socials";
import About from "../src/Component/Tampilan/About/About";
import Footer from "../src/Component/A&F/Footer/Footer";
import Rumus from "../src/Component/Tampilan/Rumus/Rumus";
import Crud from "../src/Component/Tampilan/Crud/Crud";

class App extends Component {
  render() {
    return (
      <Router>
        <AppBar1/>
      <div>
      <Route exact path="/" component={Home} />
      <Route path="/Socials" component={Socials} />
      <Route path="/About" component={About} />
      <Route path="/Rumus" component={Rumus} />
      <Route path="/Crud" component={Crud} />
      </div>
      <Footer />
      </Router>
    );
  }
}

export default App;