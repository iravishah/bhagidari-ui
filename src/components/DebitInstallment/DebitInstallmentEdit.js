import React from 'react';
import { connect } from 'react-redux';
import { pick, merge } from 'lodash';

import InstallmentForm from './DebitInstallmentForm';
import { fetchCompanies } from '../../actions/companies';
import { fetchPartners } from '../../actions/partners';
import { fetchDebitInstallment, editDebitInstallment } from '../../actions/debit_installments';

class InstallmentEdit extends React.Component {
    componentDidMount() {
        this.props.fetchDebitInstallment(this.props.match.params.id);
        this.props.fetchCompanies();
        this.props.fetchPartners();
    }

    onSubmit = (formValues) => {
        this.props.editDebitInstallment(this.props.match.params.id, formValues)
    }

    render() {
        if (!this.props.debit_installment ||
            !this.props.companies ||
            !this.props.companies.length ||
            !this.props.partners ||
            !this.props.partners.length) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a Debit Installation</h3>
                <InstallmentForm
                    initialValues={merge(pick(this.props.debit_installment, ['percentage', 'settled_at']), { company: this.props.debit_installment.company._id }, { partner: this.props.debit_installment.partner._id })}
                    onSubmit={this.onSubmit}
                    companies={this.props.companies}
                    partners={this.props.partners}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        debit_installment: state.debit_installments[ownProps.match.params.id],
        companies: Object.values(state.companies),
        partners: Object.values(state.partners)
    }
}

export default connect(mapStateToProps, { fetchPartners, fetchCompanies, editDebitInstallment, fetchDebitInstallment })(InstallmentEdit);