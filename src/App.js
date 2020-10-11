import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu></Menu>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
