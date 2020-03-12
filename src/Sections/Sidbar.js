import React, { Component } from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Typography from "@material-ui/core/Typography";
import FolderIcon from '@material-ui/icons/Folder';
import Home from "./Home";
import { Link, Route } from "react-router-dom";
import Chart2 from "../Components/Home/Chart2";
import LoginDashboard from "../Pages/Login/LoginDashboard";
import Charts from "../Components/Home/Charts";

const dashboardFields = [
    {
        title: "داشبورد",
        component: Home,
        path: "/dashboard"
    }
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
                            <Link to={text.path}>
                                <ListItem button key={index}>
                                    <ListItemIcon>
                                        <FolderIcon className="icon" />
                                    </ListItemIcon>
                                    <Typography variant="body1" component="p">
                                        {text.title}
                                    </Typography>
                                    {/*<ListItemText primary={text} className="icon"/>*/}
                                </ListItem>
                            </Link>
                        ))}




                        <ListItem className="dropdown-btn" onClick={this.state.openBtnClick ? this.closeBtn : this.openBtn}>
                            <ListItemIcon>
                                <InboxIcon className="icon" />
                            </ListItemIcon>
                            <div className="d-flex justify-content-between align-items-center"
                                style={{ width: "100%", fontSize: 13 }}>
                                <Typography variant="body1" component="p">
                                    صفحات
                                </Typography>
                                <i className="fa fa-caret-down"></i>
                            </div>
                        </ListItem>
                        <ListItem button className={["", this.state.openBtnClick ? "d-block" : "d-none"].join(" ")}>
                            <List>
                                {['ورود', 'ثبت نام', 'صفحه 404', 'صفحه 500', 'پروفایل کاربری','فراموشی رمز','نتایج جستجو','جدول قیمتها'].map((text, index) => (
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



                        <ListItem className="dropdown-btn" onClick={this.state.openBtnClick ? this.closeBtn : this.openBtn}>
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
                        <ListItem button className={["", this.state.openBtnClick ? "d-block" : "d-none"].join(" ")}>
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



                        <ListItem className="dropdown-btn" onClick={this.state.openBtnClick ? this.closeBtn : this.openBtn}>
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
                        <ListItem button className={["", this.state.openBtnClick ? "d-block" : "d-none"].join(" ")}>
                            <List>
                                {['دکمه ها', 'آیکونها','نوتیفیکیشن','مودالها','گریدبندی'].map((text, index) => (
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




                        <ListItem className="dropdown-btn" onClick={this.state.openBtnClick ? this.closeBtn : this.openBtn}>
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
                        <ListItem button className={["", this.state.openBtnClick ? "d-block" : "d-none"].join(" ")}>
                            <List>
                                {['اسلایدرها', 'آپلود', 'ترکرها','ادیتورhtml','تقویم فارسی','هشدارها'].map((text, index) => (
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


                        <ListItem className="dropdown-btn" onClick={this.state.openBtnClick ? this.closeBtn : this.openBtn}>
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
                        <ListItem button className={["", this.state.openBtnClick ? "d-block" : "d-none"].join(" ")}>
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
                        <Route path={text.path} component={text.component} />
                    ))}
                </main>
            </React.Fragment>
        );
    }
}

export default Sidbar;
