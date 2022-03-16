import React from 'react';
import Contact from "./components/Contact";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pricing from "./components/Pricing";
import Faqs from "./components/Faqs";
import PicTimeGalleries from './components/Gallery/PicTimeGalleries';
import Testimonials from './components/Testimonials';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/investment" component={Pricing} />
        <Route path="/faq" component={Faqs} />
        <Route path="/clientgallery" component={PicTimeGalleries} />
        <Route path="/testimonials" component={Testimonials} />
      </Switch>
    </Router>
  )
}

export default Routes;