import React from "react";
import SimpleMap from "./map";
import ContactForm from "./ContactForm"

class ContactUs extends React.Component{
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6 h-75">
                        <ContactForm/>
                    </div>

                    <div className="col-6 h-75">
                        <SimpleMap/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;