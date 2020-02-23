import React from 'react';


import CssBaseline from '@material-ui/core/CssBaseline';

import "./../../Styles/adminPanel.scss";

import Home from "../../Sections/Home";
import Sidbar from "../../Sections/Sidbar";
import Header from "../../Sections/Header";

class AdminPanel extends React.Component {

    render() {
        return (
            <div className="d-flex root">
                <CssBaseline />
                <Header />
                <Sidbar />
                <main className="content">
                    <Home />
                </main>
            </div>
        );
    }
}

export default AdminPanel;
