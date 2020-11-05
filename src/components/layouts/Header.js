import React, { Component } from "react"
import { Link, NavLink } from 'react-router-dom';



export default class Header extends Component {

    render() {

        return (
            <div>
                {/* Header start */}
                <header id="header" class="navbar-fixed-top header" role="banner">

                    <div class="container">
                        <div class="row">
                            {/* Logo start */}
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <div class="navbar-brand navbar-bg">
                                    <Link to='/'>
                                        <img class="img-responsive" src="assets/images/logo.png" alt="" />
                                    </Link >
                                </div>
                            </div>{/*/ Logo end */}
                            <nav class="collapse navbar-collapse clearfix" role="navigation">
                                <ul class="nav navbar-nav navbar-right">
                                    <li>
                                        <NavLink exact to='/' activeStyle={{ color: "red" }} >Home</NavLink>
                                    </li>

                                    <li class="dropdown" >
                                        <NavLink state to='#' class="dropdown-toggle" data-toggle="dropdown">Company <i class="fa fa-angle-down"></i></NavLink>
                                        <div class="dropdown-menu">
                                            <ul>
                                                <li><Link to='/aboutus' activeStyle={{ color: "red" }} >About Us</Link></li>
                                                <li><Link to="/services" activeStyle={{ color: "red" }} >Services</Link></li>
                                                <li><Link to="/career" activeStyle={{ color: "red" }} >Career</Link></li>
                                                <li><Link to="/testimonials" activeStyle={{ color: "red" }} >Testimonials</Link></li>
                                                {/* <li><Link href="faq.html">Faq</Link></li> */}
                                            </ul>
                                        </div>
                                    </li>

                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Portfolio <i class="fa fa-angle-down"></i></a>
                                        <div class="dropdown-menu">
                                            <ul>
                                                <li><a href="portfolio-classic.html">Portfolio Classic</a></li>
                                                <li><a href="portfolio-static.html">Portfolio Static</a></li>
                                                <li><a href="portfolio-item.html">Portfolio Single</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages <i class="fa fa-angle-down"></i></a>
                                        <div class="dropdown-menu">
                                            <ul>
                                                <li><a href="team.html">Our Team</a></li>
                                                <li><a href="about2.html">About Us - 2</a></li>
                                                <li><a href="service2.html">Services - 2</a></li>
                                                <li><a href="service-single.html">Services Single</a></li>
                                                <li><a href="pricing.html">Pricing Table</a></li>
                                                <li><a href="404.html">404 Page</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Blog <i class="fa fa-angle-down"></i></a>
                                        <div class="dropdown-menu">
                                            <ul>
                                                <li><a href="blog-rightside.html">Blog with Sidebar</a></li>
                                                <li><a href="blog-item.html">Blog Single</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Features <i class="fa fa-angle-down"></i></a>
                                        <div class="dropdown-menu">
                                            <ul>
                                                <li><a href="typography.html">Typography</a></li>
                                                <li><a href="elements.html">Elements</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>{/*/ Navigation end */}
                        </div>{/*/ Row end */}
                    </div>{/*/ Container end */}
                </header>{/*/ Header end */}

            </div>
        )
    }
}

