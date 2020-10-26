import React from "react";
import Paper from "@material-ui/core/Paper";
import Img from "./../Images/assets/4-people/david-campion.jpg";

class PeopleCard extends React.Component{
    render() {
        return(
            <Paper elevation={1} className="">
                <img src={Img} className="img-fluid"/>
                <h6 className="dark-grey-text text-center mt-3">nasrin {this.props.item}</h6>
                <p className="light-grey-text text-center pb-3">moshayedi</p>
            </Paper>
        )
    }
}

export default PeopleCard;