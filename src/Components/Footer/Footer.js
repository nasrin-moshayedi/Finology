import React from "react";
import foods from "./../../Images/footerFoods.png";
import Typography from "@material-ui/core/Typography";
import Logo from "./../../Images/footerLogo.png";
import "./../../Styles/footer.scss";
import appStore from "./../../Images/1_V9-OPWpauGEi-JMp05RC_A.png";
import playStore from "./../../Images/google-play-button.png";
import {Link} from "react-router-dom";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 d-flex justify-content-center px-md-2 px-0 footer-image">
                        <div className="img-sub align-items-center justify-content-center">
                            <img src={foods} alt="logos" className="d-block w-100" />

                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black" >

                <div className="container footer-container">
                    <div className="row">
                        <div className="container">
                            <div className="row p-sm-0 footer-menu">
                                <div className="col-7 col-sm-5 col-md-3 col-lg-2">
                                    <img src={appStore} className="img-fluid d-block" alt="appstore"/>
                                </div>
                                <div className="col-7 col-sm-5 col-md-3 col-lg-2">
                                    <img src={playStore} className="img-fluid d-block" alt="appstore"/>
                                </div>
                                <div className="col-lg-8 col-md-12  justify-content-start row justify-content-md-end align-items-center">
                                    <Link to="/" className="footer-link">
                                        About
                                    </Link>
                                    <Link to="/" className="footer-link">
                                        Services
                                    </Link>
                                    <Link to="/" className="footer-link">
                                        Support
                                    </Link>
                                    <Link to="/" className="footer-link">
                                        Gallery
                                    </Link>
                                    <Link to="/" className="footer-link">
                                        Terms
                                    </Link>
                                    <Link to="/" className="footer-link">
                                        Locations
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-3 footer-content">
                            <div className="logo-title" style={{fontSize: 11}}>
                                powered by
                            </div>
                            <img src={Logo}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 footer-content">
                            <div className="header">
                                Main Menu
                            </div>
                            <Link to="/" className="link">
                                Pickup
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 footer-content">
                            <div className="header">
                                Main Menu
                            </div>
                            <Link to="/" className="link">
                                Pickup
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 footer-content">
                            <div className="header">
                                Main Menu
                            </div>
                            <Link to="/" className="link">
                                Pickup
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 footer-content">
                            <div className="header">
                                Main Menu
                            </div>
                            <Link to="/" className="link">
                                Pickup
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 footer-content">
                            <div className="header">
                                Main Menu
                            </div>
                            <Link to="/" className="link">
                                Pickup
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 footer-content">
                            <div className="header">
                                Main Menu
                            </div>
                            <Link to="/" className="link">
                                Pickup
                            </Link>
                        </div>
                        <div className="col-12">
                            <hr style={{borderTop: "1px solid rgba(255, 255, 255, 0.1)"}}/>
                        </div>
                        <div className="col-12">
                            <Typography variant="body2" className="title text">
                                Delight customers everywhere with a branded custom-built native iOS, native Android and Installable Website Application.
                            </Typography>
                            <Typography variant="body2" className="description text">
                                Opeqe is reliable, fast and commission free all-in-one ordering solutions for multi-location or single location restaurants.
                            </Typography>
                        </div>
                        <div className="col-12">
                            <div className="container social-net-container">
                                <div className="row justify-content-between align-items-center">
                                    <div className="">
                                        ©2019 OPEQE INC
                                        <span className="span-padding">
                                            |
                                        </span>
                                        <Link to="/" className="link">
                                            Terms & Conditions
                                        </Link>
                                        <span className="span-padding">
                                            |
                                        </span>
                                        <Link to="/" className="link">
                                            Privacy Policy
                                        </Link>

                                    </div>
                                    <div className="d-flex">
                                        <Link to="/" className="social-net">
                                            <InstagramIcon className="text-white link"/>
                                        </Link>
                                        <Link to="/" className="social-net">
                                            <TwitterIcon className="text-white link "/>
                                        </Link>
                                        <Link to="/" className="social-net">
                                            <FacebookIcon className="text-white link"/>
                                        </Link>
                                        <Link to="/" className="social-net">
                                            <YouTubeIcon className="text-white link"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;
