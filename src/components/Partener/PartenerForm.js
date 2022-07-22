import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PartenerForm extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <Field
                    name="name"
                    component={this.renderInput}
                    label="Enter Name"
                />
                <Field
                    name="ph_no"
                    component={this.renderInput}
                    label="Enter Phone Number"
                />
                <button className="ui button primary">
                    Submit
                </button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.name) {
        errors.name = 'You must enter a partner name'
    }
    if (!formValues.ph_no) {
        errors.ph_no = 'You must enter a phone number'
    }
    return errors;
};

export default reduxForm({
    form: 'PartenerForm',
    validate
})(PartenerForm);