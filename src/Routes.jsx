import React from 'react';
import Contact from "./components/Contact";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pricing from "./components/Pricing";
import Family from "./components/Gallery/Family";
import Pregnancy from "./components/Gallery/Pregnancy";
import Events from "./components/Gallery/Events";
import Faqs from "./components/Faqs";
import PrintPackages from './components/PrintPackages';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/family" component={Family} />
        <Route path="/maternity" component={Pregnancy} />
        <Route path="/event" component={Events} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/faq" component={Faqs} />
        <Route path="/prints" component={PrintPackages} />
      </Switch>
    </Router>
  )
}

export default Routes;