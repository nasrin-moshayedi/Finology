import React from 'react';
import Charts from "../../Components/Home/Charts";
import Steps from "../../Components/Home/Steps";
import Chart2 from "../../Components/Home/Chart2";

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
