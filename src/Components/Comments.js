import React from 'react';

import InfiniteCarousel from 'react-leaf-carousel';
import heart from "./../Images/assets/7-icons/heart.svg";
import Card from "./Card";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import FavoriteIcon from '@material-ui/icons/Favorite';
function Comments() {
    return(
        <div className="container overflow-hidden mb-4">
            <div className="row mb-4">
                <div className="col-5 d-flex align-items-center">
                    <FavoriteIcon className="heart-icon"/>
                    <h3 className="ml-3 blue-text font-weight-bolder">
                        What other people say about our service
                    </h3>
                </div>
                <div className="col-7 d-flex align-items-center justify-content-end">
                    <span className="d-flex align-items-center justify-content-center next-icon next-icon-size">
                        <NavigateNextIcon/>
                    </span>

                </div>
            </div>

            <div className="row justify-content-end">
                <div className="col-12" style={{marginRight:"2%", overflow: "hidden"}}>
                    <InfiniteCarousel
                        breakpoints={[
                            {
                                breakpoint: 1000,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                },
                            }
                        ]}
                        dots={true}
                        showSides={true}
                        sidesOpacity={.5}
                        sideSize={0.03}
                        slidesToScroll={2}
                        slidesToShow={2}
                        scrollOnDevice={true}
                    >
                        {[0, 1,2, 3, 4,5,6,7].map((item, i) => {
                            return(
                                <div key={i}>
                                    <Card item={item}/>
                                </div>
                            )
                        })}


                    </InfiniteCarousel>
                </div>
            </div>


        </div>

    )}

    export default Comments
