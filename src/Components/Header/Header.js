import React from "react";
import HeaderImage from "./../../Images/HomeHeader.jpg";
import "./../../Styles/header.scss";
import Grid from "@material-ui/core/Grid";

function Header() {
    return(
        <React.Fragment>
            <div className="d-flex-justify-content-center w-100 header-container">
                <div className="position-absolute w-100 h-100" style={{left: 0}}>
                    <img src={HeaderImage} alt="home header" className="w-100 h-100"/>
                </div>
            </div>
            <Grid className="position-absolute">
                <div className="position-relative" style={{top: 50, left: 50}}>
                    <div className="font-weight-bold text-dark" style={{fontSize: 30}}>
                        Breakfast Special
                    </div>
                    <div className="text-dark" style={{fontSize: 18, letterSpacing: 0}}>
                        Get 15% off when you order 3 or more Blueberry Pancake Breakfast
                    </div>
                </div>
            </Grid>
        </React.Fragment>


    )
}

export default Header;
