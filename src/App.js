import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    // function App() {
    return (
      <Router>
        <div className="app">
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <div className="main-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
