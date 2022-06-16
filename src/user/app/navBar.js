import React, { Component } from "react";
import '../../index.css';
import {Link} from "react-router-dom";

export class NavBar extends Component {
    render() {
        return <React.Fragment>
            <nav className="navbar">
                <div>
                    <Link to={"/"}><button>TRIKOT25</button></Link>
                    <Link to={"/login"}><button>Login</button></Link>
                    <Link to={"/register"}><button>Register</button></Link>
                    <Link to={"/shoppingCart"}><button>Cart</button></Link>

                    <Link to={"/dashboard"}><button>Dashboard</button></Link>
                </div>
            </nav>
        </React.Fragment>
    }
}