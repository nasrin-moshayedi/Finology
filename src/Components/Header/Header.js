import React from "react";
import HeaderImage from "./../../Images/HomeHeader.jpg";
import "./../../Styles/header.scss";
import Grid from "@material-ui/core/Grid";
import Test from "../Public/Carousel/Carousel";
import {Button} from "@material-ui/core";

function Header() {
    return(
        <div style={{marginTop: 80}}>
            <div className=" header-container">
                <div className="h-100">
                    <Grid className="position-relative d-flex flex-row justify-content-between">
                        <div className="position-absolute " style={{top: 50, left: 50}}>
                            <div className="font-weight-bold text-dark" style={{fontSize: 30}}>
                                Breakfast Special
                            </div>
                            <div className="text-dark" style={{fontSize: 18, letterSpacing: 0}}>
                                Get 15% off when you order 3 or more Blueberry Pancake Breakfast
                            </div>
                        </div>
                        <div className="position-absolute" style={{top: 400, left: 50}}>
                            <Button className="btn">
                                USE Chief special
                            </Button>
                        </div>
                    </Grid>
                </div>
            </div>
        </div>


    )
}

export default Header;
