import React from "react";
import Paper from "@material-ui/core/Paper";
import { Line } from 'react-chartjs-2';
import "./../../Styles/adminPanel.scss";

import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Col,
    Progress,
    Row,
} from 'reactstrap';
import GetAppIcon from '@material-ui/icons/GetApp';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import Typography from "@material-ui/core/Typography";
const brandSuccess = getStyle('--success');
const brandInfo = getStyle('--info');
const brandDanger = getStyle('--danger');
//Random Numbers
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
    data1.push(random(50, 200));
    data2.push(random(80, 100));
    data3.push(65);
}
const mainChart = {
    labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: hexToRgba(brandInfo, 10),
            borderColor: brandInfo,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: data1,
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'transparent',
            borderColor: brandSuccess,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: data2,
        },
        {
            label: 'My Third dataset',
            backgroundColor: 'transparent',
            borderColor: brandDanger,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 1,
            borderDash: [8, 5],
            data: data3,
        },
    ],
};

const mainChartOpts = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
            labelColor: function(tooltipItem, chart) {
                return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
            }
        }
    },
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
            {
                gridLines: {
                    drawOnChartArea: false,
                },
            }],
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                },
            }],
    },
    elements: {
        point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
        },
    },
};

class Chart2 extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            radioSelected: 1
        }
    }
    onRadioBtnClick(radioSelected) {
        this.setState({
            radioSelected: radioSelected,
        });
    }
    render() {
        return(
            <Paper elevation={3} className="row m-3 p-3">
                <Card className="w-100">
                    <CardBody>
                        <Row>
                            <Col sm="5">
                                <CardTitle className="mb-0"><Typography variant='h5'>Traffic</Typography></CardTitle>
                                <div className="small text-muted"><Typography variant='body1'>November 2015</Typography> </div>
                            </Col>
                            <Col sm="7" className="d-none d-sm-flex justify-content-end align-items-center">

                                <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                                    <ButtonGroup className="mr-3" aria-label="First group">
                                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                                <Button color="primary" className="float-right"><GetAppIcon/></Button>
                            </Col>
                        </Row>
                        <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                            <Line data={mainChart} options={mainChartOpts} height={300} />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <Row className="text-center">
                            <Col sm={12} md className="mb-sm-2 mb-0">
                                <div className="text-muted">Visits</div>
                                <strong>29.703 Users (40%)</strong>
                                <Progress className="progress-xs mt-2 bg-image-none" color="success" value="40" />
                            </Col>
                            <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                                <div className="text-muted">Unique</div>
                                <strong>24.093 Users (20%)</strong>
                                <Progress className="progress-xs mt-2 bg-image-none" color="info" value="20" />
                            </Col>
                            <Col sm={12} md className="mb-sm-2 mb-0">
                                <div className="text-muted">Page views</div>
                                <strong>78.706 Views (60%)</strong>
                                <Progress className="progress-xs mt-2 bg-image-none" color="warning" value="60" />
                            </Col>
                            <Col sm={12} md className="mb-sm-2 mb-0">
                                <div className="text-muted">New Users</div>
                                <strong>22.123 Users (80%)</strong>
                                <Progress className="progress-xs mt-2 bg-image-none" color="danger" value="80" />
                            </Col>
                            <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                                <div className="text-muted">Bounce Rate</div>
                                <strong>Average Rate (40.15%)</strong>
                                <Progress className="progress-xs mt-2 bg-image-none" color="primary" value="40" />
                            </Col>
                        </Row>
                    </CardFooter>
                </Card>
            </Paper>
        )
    }
}
export default Chart2;
