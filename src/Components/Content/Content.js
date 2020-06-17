import React from "react";
import Test from "../Public/Carousel/Carousel";
import PropTypes from "prop-types";

function Content(props) {
    return(
        <div className=" container-fluid p-re" style={{marginTop: 30}}>
            <h3>{props.title}</h3>
            <div className="line"/>
            <hr/>
            <Test data={props.data}/>
        </div>
    )
}

Content.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};

export default Content;
