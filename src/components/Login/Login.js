import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { login } from '../../actions/auth';

class LoginForm extends React.Component {
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

    renderInput = ({ input, label, meta, type }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} type={type} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = ({ username, password }) => {
        this.props.login(username, password);
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <div className="ui error message">
                    {this.props.errorMsg}
                </div>
                <Field
                    name="username"
                    component={this.renderInput}
                    label="Username"
                />
                <Field
                    name="password"
                    component={this.renderInput}
                    label="Password"
                    type="password"
                />
                <button className="ui button primary">
                    Log in
                </button>
            </form>
        )
    }
}
const validate = (formValues) => {
    const errors = {};
    if (!formValues.username) {
        errors.username = 'You must enter a username'
    }
    if (!formValues.password) {
        errors.name = 'You must enter a password'
    }
    return errors;
};

const formWrapped = reduxForm({
    form: 'loginForm',
    validate
})(LoginForm);

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        errorMsg: state.auth.errorMsg
    }
}

export default connect(mapStateToProps, { login })(formWrapped);