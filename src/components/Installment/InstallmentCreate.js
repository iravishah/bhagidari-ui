import React from 'react';
import { connect } from 'react-redux';
import { fetchCompanies } from '../../actions/companies';
import { fetchPartners } from '../../actions/partners';
import { createInstallment } from '../../actions/installments';
import InstallmentForm from './InstallmentForm';

class InstallmentCreate extends React.Component {

    componentDidMount() {
        this.props.fetchPartners();
        this.props.fetchCompanies();
    }

    onSubmit = (formValues) => {
        this.props.createInstallment(formValues);
    }

    render() {
        if (!this.props.partners ||
            !this.props.companies ||
            !this.props.partners.length ||
            !this.props.companies.length) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Create a Share</h3>
                <InstallmentForm
                    initialValues={{ company: this.props.companies[0]._id, partner: this.props.partners[0]._id }}
                    onSubmit={this.onSubmit}
                    companies={this.props.companies}
                    partners={this.props.partners}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        companies: Object.values(state.companies),
        partners: Object.values(state.partners)
    }
}

export default connect(
    mapStateToProps, {
    createInstallment,
    fetchCompanies,
    fetchPartners
})(InstallmentCreate)