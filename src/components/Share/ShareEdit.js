import React from 'react';
import { connect } from 'react-redux';
import { pick, merge } from 'lodash';

import ShareForm from './ShareForm';
import { fetchCompanies } from '../../actions/companies';
import { fetchPartners } from '../../actions/partners';
import { editShare, fetchShare } from '../../actions/shares';

class ShareEdit extends React.Component {
    componentDidMount() {
        this.props.fetchShare(this.props.match.params.id);
        this.props.fetchCompanies();
        this.props.fetchPartners();
    }

    onSubmit = (formValues) => {
        this.props.editShare(this.props.match.params.id, formValues)
    }

    render() {
        if (!this.props.share ||
            !this.props.companies ||
            !this.props.companies.length ||
            !this.props.partners ||
            !this.props.partners.length) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a Company</h3>
                <ShareForm
                    initialValues={merge(pick(this.props.share, ['percentage']), { company: this.props.share.company._id }, { partner: this.props.share.partner._id })}
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
        share: state.shares[ownProps.match.params.id],
        companies: Object.values(state.companies),
        partners: Object.values(state.partners)
    }
}

export default connect(mapStateToProps, { fetchPartners, fetchCompanies, editShare, fetchShare })(ShareEdit);