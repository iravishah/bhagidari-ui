import React from 'react';
import { connect } from 'react-redux';

import { createLand } from '../../actions/lands';
import { fetchCompanies } from '../../actions/companies';
import LandForm from './LandForm';


class LandCreate extends React.Component {

    componentDidMount() {
        this.props.fetchCompanies();
    }

    onSubmit = (formValues) => {
        this.props.createLand(formValues);
    }

    render() {
        if (!this.props.companies || !this.props.companies.length) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Create a Land</h3>
                <LandForm
                    onSubmit={this.onSubmit}
                    companies={this.props.companies}
                    initialValues={{ company: this.props.companies[0]._id }}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        companies: Object.values(state.companies)
    }
}

export default connect(mapStateToProps, { createLand, fetchCompanies })(LandCreate)