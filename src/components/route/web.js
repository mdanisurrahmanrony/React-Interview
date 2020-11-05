import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Career from '../pages/Career'
import Testimonials from '../pages/Testimonials'



const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/aboutus" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/career" component={Career} />
        <Route path="/testimonials" component={Testimonials} />
    </Switch>

)
export default Main;