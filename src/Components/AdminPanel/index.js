import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./../../Styles/adminPanel.scss";
import Typography from "@material-ui/core/Typography";
import FolderIcon from '@material-ui/icons/Folder';
import Home from "../Home";

class AdminPanel extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            openBtnClick: false,
            open: true
        }
    }

    openBtn = () => {
        this.setState({openBtnClick: true})
    };
    closeBtn = () => {
        this.setState({openBtnClick: false})
    };
    render() {
        return (
            <div className="d-flex root">
                <CssBaseline/>
                <AppBar
                    position="fixed"
                    className={["appBar", "appBarShift"].join(" ")}
                >
                    <Toolbar
                        className="d-flex justify-content-between">
                        <h5 className="justify-content-center d-flex align-items-center">
                            <div className="text-center mr-3" style={{width: 30, height: 30}}>
                                {/*<img src={BotLogo} className="img-responsive"/>*/}
                            </div>
                            Logo
                        </h5>
                        <div className="searchPanel col-xs-8 no-horizontal">
                            {/*<Search vm={this.vm} />*/}
                        </div>
                        <div>
                            <IconButton>
                                {/*<Notify no/tifications={["hello", "how r u?"]}/>*/}
                            </IconButton>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                // onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle className={"icon"}/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={["drawer", this.state.open ? "drawerOpen":"drawerClose"].join(" ")}
                    classes={{paper: [this.state.open ? "drawerOpen":"drawerClose"].join(" ")}}
                >
                    <List>
                        {['Dashboard', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon>
                                    <FolderIcon className="icon"/>
                                </ListItemIcon>
                                <Typography variant="body1" component="p">
                                    {text}
                                </Typography>
                                {/*<ListItemText primary={text} className="icon"/>*/}
                            </ListItem>
                        ))}
                        <ListItem className="dropdown-btn" onClick={this.state.openBtnClick ? this.closeBtn : this.openBtn}>
                            <ListItemIcon>
                                <InboxIcon className="icon"/>
                            </ListItemIcon>
                            <div className="d-flex justify-content-between align-items-center"
                                 style={{width: "100%", fontSize: 13}}>
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
                                            <FolderIcon className="icon"/>
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
                                    <FolderIcon className="icon"/>
                                </ListItemIcon>
                                <Typography variant="body1" component="p">
                                    {text}
                                </Typography>
                                {/*<ListItemText primary={text} className="icon"/>*/}
                            </ListItem>
                        ))}

                    </List>
                </Drawer>
                <main className="content">
                    <Home/>
                </main>
            </div>
        );
    }
}

export default AdminPanel;
