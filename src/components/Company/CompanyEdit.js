import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';

import CompanyForm from './CompanyForm';
import {
    fetchCompany,
    editCompany
} from '../../actions/companies';

class CompanyEdit extends React.Component {
    componentDidMount() {
        this.props.fetchCompany(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        formValues = { ...this.props.company, name: formValues.name }
        this.props.editCompany(this.props.match.params.id, formValues)
    }

    render() {
        if (!this.props.company) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a Company</h3>
                <CompanyForm
                    initialValues={pick(this.props.company, 'name')}
                    onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        company: state.companies[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchCompany, editCompany })(CompanyEdit);