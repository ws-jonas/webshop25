import React, {Component, useContext, useState} from "react";
import '../../index.css';
import './navBar.css';
import {Link, useLocation} from "react-router-dom";
import {UserContext} from "../../index";
import 'bootstrap/dist/css/bootstrap.css';


export function NavBar(){

        const {user, setUser} = useContext(UserContext);

        function logout(){

            setUser({userID: "0",firstname: "", lastname: "" , password: "", mail: "", admin: "0"});

            return
        }

        function LoggedIn(){
            if(user.userID === "0"){
                return(
                    <div>
                        <Link to={"/login"}><button className="loginButton myBtn">Login</button></Link>
                        <Link to={"/register"}><button className="registerButton myBtn">Register</button></Link>
                    </div>
                );

            } else if (user.admin !== "0"){
                return (
                    <div>
                        <label>Hallo {user.firstname}</label>
                        <button className="logout-button btn btn button-danger" onClick={logout}>logout</button>
                        <Link to={"/shoppingCart"}><button className="cartButton myBtn">Cart</button></Link>
                        <Link to={"/dashboard"}><button className="dashboardButton myBtn">Dashboard</button></Link>
                    </div>
                );
            } else{
                return (
                    <div>
                        <label>Hallo {user.firstname}</label>
                        <button className="logout-button btn btn-danger">logout</button>
                        <Link to={"/shoppingCart"}><button className="cartButton myBtn">Cart</button></Link>
                    </div>
            );
            }
        }

        return <React.Fragment>


                <nav className="navbar">
                    <Link to={"/"}><button className="logoButton">TRIKOT25</button></Link>
                    <div className="menuButtons">
                        <LoggedIn />
                    </div>
                </nav>
        </React.Fragment>

}