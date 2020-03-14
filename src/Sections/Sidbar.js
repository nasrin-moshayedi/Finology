import React, { Component } from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Typography from "@material-ui/core/Typography";
import FolderIcon from '@material-ui/icons/Folder';
import Home from "./Home";
import Demo1 from '../Pages/Demos/Demo1';
import Notfound from "./../Pages/404/Notfound";

import { Link, Route } from "react-router-dom";
import Chart1 from "../Pages/Charts/Chart1";
import Chart3 from "../Pages/Charts/Chart3";
import Chart2 from "../Pages/Charts/Chart2";

const dashboardFields = [
    {
        title: "داشبورد",
        component: Home,
        path: "/dashboard",
        subMenu: false
    },
    {
        title: "دمو1",
        component: Demo1,
        path: "/Demos/Demo1",
        subMenu: false
    },
    {
        title: "صفحات",
        component: null,
        path: "/Demos/Demo1",
        subMenu: true,
        subMenuList:[
            {
                title: "Login",
                component: Notfound,
                path: "/Demos/NotFound1",
                subMenu: false,
            },
            {
                title: "SignUp",
                component: Demo1,
                path: "/Demos/Demo2",
                subMenu: false,
            },
            {
                title: "Page 404",
                component: Notfound,
                path: "/Demos/NotFound2",
                subMenu: false,
            },
            {
                title: "Page 500",
                component: Demo1,
                path: "/Demos/Demo3",
                subMenu: false,
            },
            {
                title: "Profile",
                component: Notfound,
                path: "/Demos/NotFound3",
                subMenu: false,
            },
            {
                title: "Forget Password",
                component: Demo1,
                path: "/Demos/Demo4",
                subMenu: false,
            },
            {
                title: "Search",
                component: Notfound,
                path: "/Demos/NotFound4",
                subMenu: false,
            },
            {
                title: "Products Table",
                component: Demo1,
                path: "/Demos/Demo5",
                subMenu: false,
            },
        ]
    },
    {
        title: "Charts",
        component: null,
        path: "/Charts/Chart1",
        subMenu: true,
        subMenuList:[
            {
                title: "Chart1",
                component: Chart1,
                path: "/Charts/Chart1",
                subMenu: false,
            },
            {
                title: "Chart2",
                component: Chart2,
                path: "/Charts/Chart2",
                subMenu: false,
            },
            {
                title: "Chart3",
                component: Chart3,
                path: "/Charts/Chart3",
                subMenu: false,
            }
        ]
    },

];


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
                        {dashboardFields.map((text, index) => (
                            <React.Fragment>
                            <Link to={text.path} onClick={() => this.setState({openBtnClick: text.title})}>
                                <ListItem className={text.subMenu && "dropdown-btn"} onClick={this.state.openBtnClick === text.title ? this.closeBtn : this.openBtn}>
                                    <ListItemIcon>
                                        <InboxIcon className="icon" />
                                    </ListItemIcon>
                                    <Typography variant="body1" component="p" className="d-flex justify-content-between align-items-center"
                                                style={{ width: "100%", fontSize: 13 }}>
                                            <Typography variant="body1" component="p">
                                                {text.title}

                                            </Typography>
                                            <i className={["fa fa-caret-down", text.subMenu ? "d-block" : "d-none"].join(" ")}></i>
                                    </Typography>
                                </ListItem>
                            </Link>
                                {text.subMenu &&

                                <ListItem
                                          className={["", this.state.openBtnClick === text.title ? "d-block" : "d-none"].join(" ")}>
                                    <List>
                                        {text.subMenuList.map((item, index) => (
                                            <Link to={item.path}>
                                                <ListItem button key={index}>
                                                    <ListItemIcon>
                                                        <FolderIcon className="icon"/>
                                                    </ListItemIcon>
                                                    <Typography variant="body1" component="p">
                                                        {item.title}
                                                    </Typography>
                                                </ListItem>
                                            </Link>

                                        ))}
                                    </List>
                                </ListItem>
                                }
                            </React.Fragment>
                        ))}
                        <ListItem className="dropdown-btn" onClick={this.state.openBtnClick2 ? this.closeBtn2 : this.openBtn2}>
                            <ListItemIcon>
                                <InboxIcon className="icon" />
                            </ListItemIcon>
                            <div className="d-flex justify-content-between align-items-center"
                                style={{ width: "100%", fontSize: 13 }}>
                                <Typography variant="body1" component="p">
                                    نمودارها
                                </Typography>
                                <i className="fa fa-caret-down"></i>
                            </div>
                        </ListItem>
                        <ListItem button className={["", this.state.openBtnClick2 ? "d-block" : "d-none"].join(" ")}>
                            <List>
                                {['نمودار1', ' نمودار2', 'نمودار3'].map((text, index) => (
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



                        <ListItem className="dropdown-btn" onClick={this.state.openBtnClick3 ? this.closeBtn3 : this.openBtn3}>
                            <ListItemIcon>
                                <InboxIcon className="icon" />
                            </ListItemIcon>
                            <div className="d-flex justify-content-between align-items-center"
                                style={{ width: "100%", fontSize: 13 }}>
                                <Typography variant="body1" component="p">
                                    ویژگیهای رابط کاربری
                                </Typography>
                                <i className="fa fa-caret-down"></i>
                            </div>
                        </ListItem>
                        <ListItem button className={["", this.state.openBtnClick3 ? "d-block" : "d-none"].join(" ")}>
                            <List>
                                {['دکمه ها', 'آیکونها', 'نوتیفیکیشن', 'مودالها', 'گریدبندی'].map((text, index) => (
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




                        <ListItem className="dropdown-btn" onClick={this.state.openBtnClick4 ? this.closeBtn4 : this.openBtn4}>
                            <ListItemIcon>
                                <InboxIcon className="icon" />
                            </ListItemIcon>
                            <div className="d-flex justify-content-between align-items-center"
                                style={{ width: "100%", fontSize: 13 }}>
                                <Typography variant="body1" component="p">
                                    عناصر هوشمند
                                </Typography>
                                <i className="fa fa-caret-down"></i>
                            </div>
                        </ListItem>
                        <ListItem button className={["", this.state.openBtnClick4 ? "d-block" : "d-none"].join(" ")}>
                            <List>
                                {['اسلایدرها', 'آپلود', 'ترکرها', 'ادیتورhtml', 'تقویم فارسی', 'هشدارها'].map((text, index) => (
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


                        <ListItem className="dropdown-btn" onClick={this.state.openBtnClick5 ? this.closeBtn5 : this.openBtn5}>
                            <ListItemIcon>
                                <InboxIcon className="icon" />
                            </ListItemIcon>
                            <div className="d-flex justify-content-between align-items-center"
                                style={{ width: "100%", fontSize: 13 }}>
                                <Typography variant="body1" component="p">
                                    نمونه ها
                                </Typography>
                                <i className="fa fa-caret-down"></i>
                            </div>
                        </ListItem>
                        <ListItem button className={["", this.state.openBtnClick5 ? "d-block" : "d-none"].join(" ")}>
                            <List>
                                {['دمو1', 'دمو2', 'دمو3'].map((text, index) => (
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
                </Drawer>
                <main className="content">
                    {dashboardFields.map((text, index) => (
                        <span>
                             <Route path={text.path} component={text.component} />
                           {text.subMenu &&
                               text.subMenuList.map((item, index) => {
                                   return (
                                           <Route path={item.path} component={item.component} />
                                       )
                               })
                           }
                        </span>
                    ))}
                </main>
            </React.Fragment>
        );
    }
}

export default Sidbar;
