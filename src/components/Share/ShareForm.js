import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { find } from 'lodash';

class ShareForm extends React.Component {

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

    renderOptions = (name) => {
        const data = name === 'company' ? this.props.companies : this.props.partners;
        return data.map((e) => {
            return (
                <option value={e._id} key={e.uid}>{e.name}</option>
            )
        })
    }

    renderSelect = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        let data = '';
        if (this.props.initialValues) {
            data = input.name === 'company' ? find(this.props.companies, (company) => company._id === this.props.initialValues.company._id) : find(this.props.partners, (partner) => partner._id === this.props.initialValues.partner._id)
            data = data._id;
        }
        return (
            <div className={className}>
                <label>{label}</label>
                <select {...input} value={data}>
                    {this.renderOptions(input.name)}
                </select>
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
                    name="company"
                    component={this.renderSelect}
                    label="Select a Company"
                >
                </Field>
                <Field
                    name="partner"
                    component={this.renderSelect}
                    label="Select a Partner"
                >
                </Field>
                <Field
                    name="percentage"
                    component={this.renderInput}
                    label="Enter Percentage"
                />
                <button className="ui button primary">
                    Submit
                </button>
            </form >
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.name) {
        errors.name = 'You must enter a company name'
    }
    return errors;
};

export default reduxForm({
    form: 'shareForm',
    validate
})(ShareForm);