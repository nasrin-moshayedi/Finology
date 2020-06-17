import React from "react";
import "./../../Styles/menu.scss";
import logo from "./../../Images/icon.png"
import {Link, Route, Switch} from "react-router-dom";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

class Menu extends React.Component{
    state ={className:"" };

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll=()=>{
        if (window.pageYOffset > 0) {
            if(!this.state.className){
                this.setState({ className: "grey" });
            }
        }else{
            if(this.state.className){
                this.setState({ className: "" });
            }
        }

    }

    render() {
        return (
            <div className={["menu-container", this.state.className].join(" ")}>
                <div className="menu-height container-fluid d-flex align-items-center justify-content-between p-re">
                    <div>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <Link to="/reservation" className="mx-2 links d-none d-md-block ">Reservation</Link>
                        <Link to="/orders" className="mx-2 links d-none d-md-block ">Orders</Link>
                        <Link to="/location" className="mx-2 links d-none d-md-block ">Location</Link>
                        <Link to="/login" className="btn mx-2 links" style={{fontSize: 12}}>Login</Link>
                        <Link to="/signup" className="d-none signup d-md-flex align-items-center mx-2">SignUp</Link>
                        <Link to="/cart" className="mx-2 cart"><ShoppingBasketIcon className="cart-icon"/></Link>
                        <Switch>
                            <Route path="/cart" render={() => console.log("cart")}/>
                            <Route path="/login" component={() => console.log("login")}/>
                            <Route path="/signup" component={() => console.log("signup")}/>
                            <Route path="/reservation" component={() => console.log("reservation")}/>
                            <Route path="/orders" component={() => console.log("orders")}/>
                            <Route path="/location" component={() => console.log("location")}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu
