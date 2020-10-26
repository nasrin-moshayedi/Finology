import React from "react";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


class ContactForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                email: ""
            }

        }
    }

    handleChange = (event) => {
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({
            fields
        })
    };

    render() {
        const {fields} = this.state;
        return(
            <ValidatorForm
                ref="form"
                // onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={fields.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={fields.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={fields.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={fields.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
            </ValidatorForm>
        )
    }
}

export default ContactForm;