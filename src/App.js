import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";

// import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Pages from './components/route/web.js';
import { render } from 'react-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Career from './components/pages/Career';
import Testimonials from './components/pages/Testimonials';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

// import {Link} from 'react-router-dom';

function App() {

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/aboutus" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/testimonials" component={Testimonials} />
      </Switch>

    </BrowserRouter>


  );





}

export default App;
