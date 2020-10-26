import React from 'react';

import InfiniteCarousel from 'react-leaf-carousel';
import heart from "./../Images/assets/7-icons/heart.svg";
import Card from "./Card";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Button} from "@material-ui/core";
import PeopleCard from "./PeopleCard";
function Peoples() {
    return(
        <div className="container overflow-hidden mb-4">
            <div className="row mb-4">
                <div className="col-5 d-flex align-items-center">
                    <i className="far fa-smile smile-face" style={{fontSize: 24}}></i>
                    <h3 className="ml-3 blue-text font-weight-bolder">
                        Our important people is listed here
                    </h3>
                </div>
                <div className="col-7 d-flex align-items-center justify-content-end">
                    <span className="d-flex align-items-center justify-content-center yellow-btn">
                        <Button variant="contained next-icon">Edit</Button>
                    </span>
                    <span className="d-flex align-items-center justify-content-center next-icon ml-3">
                        <Button variant="contained next-icon">Add</Button>
                    </span>

                </div>
            </div>

            <div className="row justify-content-center">
                {[0, 1,2, 3, 4,5,6,7].map((item, i) => {
                    return(
                        <div className="mr-sm-4 p-0 new-column" key={i}>
                            <PeopleCard item={item}/>
                        </div>
                    )
                })}
            </div>
        </div>

    )}

    export default Peoples
