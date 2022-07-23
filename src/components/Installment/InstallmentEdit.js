import React from 'react';
import { connect } from 'react-redux';
import { pick, merge } from 'lodash';

import InstallmentForm from './InstallmentForm';
import { fetchCompanies } from '../../actions/companies';
import { fetchPartners } from '../../actions/partners';
import { fetchInstallment, editInstallment } from '../../actions/installments';

class InstallmentEdit extends React.Component {
    componentDidMount() {
        this.props.fetchInstallment(this.props.match.params.id);
        this.props.fetchCompanies();
        this.props.fetchPartners();
    }

    onSubmit = (formValues) => {
        this.props.editInstallment(this.props.match.params.id, formValues)
    }

    render() {
        if (!this.props.installment ||
            !this.props.companies ||
            !this.props.companies.length ||
            !this.props.partners ||
            !this.props.partners.length) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a Company</h3>
                <InstallmentForm
                    initialValues={merge(pick(this.props.installment, ['percentage', 'installment_at']), { company: this.props.installment.company._id }, { partner: this.props.installment.partner._id })}
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
        installment: state.installments[ownProps.match.params.id],
        companies: Object.values(state.companies),
        partners: Object.values(state.partners)
    }
}

export default connect(mapStateToProps, { fetchPartners, fetchCompanies, editInstallment, fetchInstallment })(InstallmentEdit);