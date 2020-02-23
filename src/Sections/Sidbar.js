import React, { Component } from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Typography from "@material-ui/core/Typography";
import FolderIcon from '@material-ui/icons/Folder';


class Sidbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openBtnClick: false,
            open: true
        }
    }

    openBtn = () => {
        this.setState({ openBtnClick: true })
    };
    closeBtn = () => {
        this.setState({ openBtnClick: false })
    };
    render() {
        return (
          <React.Fragment>
                        <Drawer
                    variant="permanent"
                    className={["drawer", this.state.open ? "drawerOpen" : "drawerClose"].join(" ")}
                    classes={{ paper: [this.state.open ? "drawerOpen" : "drawerClose"].join(" ") }}
                >
                    <List>
                        {['داشبورد', 'مدیریت خدمات', 'مدیریت پروفایل', 'Drafts'].map((text, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon>
                                    <FolderIcon className="icon" />
                                </ListItemIcon>
                                <Typography variant="body1" component="p">
                                    {text}
                                </Typography>
                                {/*<ListItemText primary={text} className="icon"/>*/}
                            </ListItem>
                        ))}
                        <ListItem className="dropdown-btn" onClick={this.state.openBtnClick ? this.closeBtn : this.openBtn}>
                            <ListItemIcon>
                                <InboxIcon className="icon" />
                            </ListItemIcon>
                            <div className="d-flex justify-content-between align-items-center"
                                style={{ width: "100%", fontSize: 13 }}>
                                <Typography variant="body1" component="p">
                                    Dropdown
                                </Typography>
                                <i className="fa fa-caret-down"></i>
                            </div>

                        </ListItem>
                        <ListItem button className={["", this.state.openBtnClick ? "d-block" : "d-none"].join(" ")}>
                            <List>
                                {['Dashboard', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                    <ListItem button key={index}>
                                        <ListItemIcon>
                                            <FolderIcon className="icon" />
                                        </ListItemIcon>
                                        <Typography variant="body1" component="p">
                                            {text}
                                        </Typography>
                                        {/*<ListItemText primary={text} className="icon"/>*/}
                                    </ListItem>
                                ))}
                            </List>
                        </ListItem>
                    </List>
                    <List>
                        {['Dashboard', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon>
                                    <FolderIcon className="icon" />
                                </ListItemIcon>
                                <Typography variant="body1" component="p">
                                    {text}
                                </Typography>
                                {/*<ListItemText primary={text} className="icon"/>*/}
                            </ListItem>
                        ))}

                    </List>
                </Drawer>
          </React.Fragment>
        );
    }
}

export default Sidbar;