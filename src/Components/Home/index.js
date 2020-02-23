import React from 'react';
import Charts from "./Charts";
import Steps from "./Steps";
import Chart2 from "./Chart2";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            openBtnClick: false,
            open: true
        }
    }

    render() {
        return (
            <React.Fragment>
                <Charts/>
                <Steps/>
                <Chart2/>
            </React.Fragment>
        );
    }
}

export default Home;
