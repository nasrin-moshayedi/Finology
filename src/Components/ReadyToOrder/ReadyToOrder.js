import React from "react";
import Typography from "@material-ui/core/Typography";
import "./../../Styles/readyToOrder.scss";
import {Button} from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

function ReadyToOrder() {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value)
    };
    return(
        <div className="col-12 p-re">
            <hr/>
            <div className="text-center" style={{padding: "30px 0"}}>
                <Typography variant="h5" className="text-dark">
                    Ready to order
                </Typography>
                <Typography variant="h6" className="sun-title">
                    Browse our menu for dine-in, delivery or pickup and catering
                </Typography>
                <div className="d-flex justify-content-center align-items-center mt-3">
                    <div style={{fontSize: 14}}>
                        <div style={{color: "#996515"}}>
                            ASAP Pickup
                        </div>
                        {value === 0 ?
                            <div className="no-address">
                                What is your address
                            </div>
                            :
                            <div >
                                Beverly Hills - 1008 Elden Way
                            </div>
                        }

                    </div>
                    <Button className="btn ml-2" style={{fontSize: 12}}>
                        Change
                    </Button>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                        className="d-flex align-items-center"
                    >
                        <Tab label="deliver" className={["tab-btn", value === 0 && "text-dark border-0"].join(" ")} />
                        <Tab label="Pickup" className={["tab-btn", value === 1 && "text-dark border-0"].join(" ")}/>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default ReadyToOrder;
