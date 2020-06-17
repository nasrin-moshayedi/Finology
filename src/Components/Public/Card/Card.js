import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TimerIcon from '@material-ui/icons/Timer';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        boxShadow: "none",
        paddingRight: 20
    },
    media: {
        height: 220,
        borderRadius: 5
    },
});

export default function MediaCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={props.title.img}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                    {props.title.title }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                   <a href="#" >
                       {props.title.location}
                   </a>
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                    <TimerIcon style={{fontSize: 14}}/>{props.title.time} ${props.title.cost}
                </Typography>
            </CardContent>
        </Card>
    );
}
MediaCard.propTypes = {
    title: PropTypes.object.isRequired
};
