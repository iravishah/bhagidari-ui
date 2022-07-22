import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { find } from 'lodash';

class LandForm extends React.Component {

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

    renderOptions = () => {
        return this.props.companies.map((e) => {
            return (
                <option value={e._id} key={e.uid}>{e.name}</option>
            )
        })
    }

    renderSelect = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <select {...input}>
                    {this.renderOptions()}
                </select>
                {this.renderError(meta)}
            </div>
        )
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
                    name="village.name"
                    component={this.renderInput}
                    label="Enter Village Name"
                />
                <Field
                    name="survey_no"
                    component={this.renderInput}
                    label="Enter Survey No"
                />
                <Field
                    name="company"
                    component={this.renderSelect}
                    label="Select a Company"
                >
                </Field>
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
        errors.name = 'You must enter a village name'
    }
    if (!formValues.survey_no) {
        errors.survey_no = 'You must enter a survey number'
    }
    return errors;
};

export default reduxForm({
    form: 'landForm',
    validate
})(LandForm);