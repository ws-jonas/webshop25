import React, { Component } from "react";
import '../../index.css';
import './navBar.css';
import {Link} from "react-router-dom";

export class NavBar extends Component {
    render() {
        return <React.Fragment>
            <nav className="navbar">
                <Link to={"/"}><button className="logoButton">TRIKOT25</button></Link>
                <div className="menuButtons">
                    <Link to={"/login"}><button className="loginButton">Login</button></Link>
                    <Link to={"/register"}><button className="registerButton">Register</button></Link>
                    <Link to={"/shoppingCart"}><button className="cartButton">Cart</button></Link>

                    <Link to={"/dashboard"}><button className="dashboardButton">Dashboard</button></Link>
                </div>
            </nav>
        </React.Fragment>
    }
}