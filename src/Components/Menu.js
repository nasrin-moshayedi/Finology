import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from '@material-ui/icons/Search';
import Logo from "./../Images/assets/1-header/logo.png";

const Menu = () => {
    return(
        <div className="d-flex blue-bg text-white pt-3 pb-1 position-fixed w-100 z-index">
            <div className="container">
                <div className="row justify-content-between align-items-center ">
                    <img src={Logo} alt="finology logo" width={85}/>
                    <div className="d-flex justify-content-around align-items-center">
                        <MenuItem onClick={() => console.log("menu")}>Home</MenuItem>
                        <MenuItem onClick={() => console.log("menu")}>About Us</MenuItem>
                        <MenuItem onClick={() => console.log("menu")}>Services</MenuItem>
                        <MenuItem onClick={() => console.log("menu")}>Pricing</MenuItem>
                        <MenuItem onClick={() => console.log("menu")}>Careers</MenuItem>
                    </div>
                    <SearchIcon/>
                </div>

            </div>

        </div>
    )
};

export default Menu;