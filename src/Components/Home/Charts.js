import React from 'react';
import Paper from '@material-ui/core/Paper';
import "./../../Styles/adminPanel.scss";
import {  Line } from 'react-chartjs-2';
import SettingsIcon from '@material-ui/icons/Settings';
import {
    ButtonDropdown,
    ButtonGroup,
    CardBody,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from 'reactstrap';
import Card from "reactstrap/es/Card";
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities'

const brandSuccess = getStyle('--success');
const brandInfo = getStyle('--info');
const brandWarning = getStyle('--warning');
const brandDanger = getStyle('--danger');
// Card Chart 2
const cardChartData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: brandInfo,
            borderColor: 'rgba(255,255,255,.55)',
            data: [1, 18, 9, 17, 34, 22, 11],
        },
    ],
};
const cardChartData2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: brandDanger,
            borderColor: 'rgba(255,255,255,.55)',
            data: [1, 18, 9, 17, 34, 22, 11],
        },
    ],
};
const cardChartData3 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: brandSuccess,
            borderColor: 'rgba(255,255,255,.55)',
            data: [1, 18, 9, 17, 34, 22, 11],
        },
    ],
};
const cardChartData4 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: brandWarning,
            borderColor: 'rgba(255,255,255,.55)',
            data: [1, 18, 9, 17, 34, 22, 11],
        },
    ],
};

const cardChartOpts2 = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips
    },
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
            {
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent',
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                },

            }],
        yAxes: [
            {
                display: false,
                ticks: {
                    display: false,
                    min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
                    max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
                },
            }],
    },
    elements: {
        line: {
            tension: 0.00001,
            borderWidth: 1,
        },
        point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4,
        },
    },
};
class Charts extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            openBtnClick: false,
            open: true
        }
    }

    render() {
        return (
            <Paper elevation={3} className="row m-3 p-3">
                {[{class:'bg-info', opt: cardChartData1},{class:'bg-danger', opt: cardChartData2}, {class:'bg-success', opt: cardChartData3}, {class:'bg-warning', opt: cardChartData4}].map((item, index) => {
                    return(
                        <div key={index} className="col-3">
                            <Card className={["m-0", item.class].join(" ")}>
                                <CardBody className="pb-0">
                                    <ButtonGroup className="float-right">
                                        <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                                            <DropdownToggle caret className="p-0" color="transparent">
                                                <SettingsIcon className="text-light"/>
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another action</DropdownItem>
                                                <DropdownItem disabled>Disabled action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </ButtonGroup>
                                    <div className="text-value px-3">9.823</div>
                                    <div className="p-3">Members online</div>
                                </CardBody>
                                <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                                    <Line data={item.opt} options={cardChartOpts2} height={70} />
                                </div>
                            </Card>
                        </div>
                    )
                })}

            </Paper>
        );
    }
}

export default Charts
