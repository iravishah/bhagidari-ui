import React from 'react';
import { connect } from 'react-redux';
import { fetchCompanies } from '../../actions/companies';
import { fetchPartners } from '../../actions/partners';
import { createDebitInstallment } from '../../actions/debit_installments';
import InstallmentForm from './DebitInstallmentForm';

class DebitInstallmentCreate extends React.Component {

    componentDidMount() {
        this.props.fetchPartners();
        this.props.fetchCompanies();
    }

    onSubmit = (formValues) => {
        this.props.createDebitInstallment(formValues);
    }

    render() {
        if (!this.props.partners ||
            !this.props.companies ||
            !this.props.partners.length ||
            !this.props.companies.length) {
            return (
                <div className="ui yellow message">
                    Please create at least one company and one partner first
                </div>
            )
        }
        return (
            <div>
                <h3>Create a Debit Installment</h3>
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
    createDebitInstallment,
    fetchCompanies,
    fetchPartners
})(DebitInstallmentCreate)