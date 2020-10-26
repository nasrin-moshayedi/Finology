import React from "react";
import Paper from "@material-ui/core/Paper";
import people from "./../Images/assets/4-people/david-campion.jpg";
import Avatar from '@material-ui/core/Avatar';


class Card extends React.Component{
    render() {
        return(
            <Paper elevation={1} className="px-3 py-4">
                <div className="d-flex justify-content-start align-items-center mb-3">
                    <Avatar alt="Remy Sharp" src={people}  style={{width: 50}} />
                    <div className="ml-3">
                        <h6 className="mb-1">David Champion {this.props.item}</h6>
                        <p className="light-text small mb-0">CEO of iCloud</p>
                    </div>

                </div>

                <p className="medium-text mb-0">
                    "System is excellent. It has made my system user experience to become one of the easiest!"
                </p>
            </Paper>
        )
    }
}

export default Card;