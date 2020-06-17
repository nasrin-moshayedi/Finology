import React from "react";
import "./../../Styles/menu.scss";
import logo from "./../../Images/icon.png"
import {Link, NavLink, Route, Switch} from "react-router-dom";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Menu() {
    return (
        <div className="menu-container">
            <div className="menu-height container d-flex align-items-center justify-content-between">
                <div>
                    <img src={logo} />
                </div>
                <div className="d-flex align-items-center">
                    <Link to="/reservation" className="mx-2 links">Reservation</Link>
                    <Link to="/orders"  className="mx-2 links">Orders</Link>
                    <Link to="/location"  className="mx-2 links">Location</Link>
                    <Link to="/login" className="mx-2 links">Login</Link>
                    <Link to="/signup" className="mx-2 links">SignUp</Link>
                    <Link to="/cart" className="mx-2 cart" ><ShoppingBasketIcon className="cart-icon"/></Link>
                    <Switch>
                        <Route path="/cart" render={() => console.log("cart")}/>
                        <Route path="/login" component={() => console.log("login")}></Route>
                        <Route path="/signup" component={() => console.log("signup")}></Route>
                        <Route path="/reservation" component={() => console.log("reservation")}></Route>
                        <Route path="/orders" component={() => console.log("orders")}></Route>
                        <Route path="/location" component={() => console.log("location")}></Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Menu
