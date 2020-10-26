import React from "react";
import Banner from "./../Images/assets/2-banner/banner.png"
import subBanner1 from "./../Images/assets/2-banner/banner-rounded-001.svg";
import subBanner2 from "./../Images/assets/2-banner/banner-rounded-002.svg";
function Header() {
    return(
        <div className="overflow-y-hidden">
            <div className="position-relative overflow-x-hidden">
                <div className="blue-bg header-position z-index">
                    <img src={subBanner1} alt="" className="position-absolute sub-banner-1"/>
                    <img src={subBanner2} alt="" className="position-absolute sub-banner-2"/>
                    <div className="container ">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-md-5 col-12 text-white">
                                <h1>
                                    Make development easy with us
                                </h1>
                                <p>
                                    Doing development can never be easy, and it takes time and resources.
                                    We at EasyWork has the solution.
                                </p>
                            </div>
                            <div className="col-md-6 col-12">
                                <img src={Banner} className="banner img-fluid" alt="banner"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;