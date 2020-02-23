import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from "@material-ui/icons/AccountCircle";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <AppBar
                    position="fixed"
                    className={["appBar", "appBarShift"].join(" ")}
                >
                    <Toolbar
                        className="d-flex justify-content-between">
                        <h5 className="justify-content-center d-flex align-items-center">
                            <div className="text-center mr-3" style={{ width: 30, height: 30 }}>
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
                                <AccountCircle className={"icon"} />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

export default Header;