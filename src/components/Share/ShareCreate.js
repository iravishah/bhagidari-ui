import React from 'react';
import { connect } from 'react-redux';
import { createShare } from '../../actions/shares';
import { fetchCompanies } from '../../actions/companies';
import { fetchPartners } from '../../actions/partners';
import ShareForm from './ShareForm';

class ShareCreate extends React.Component {

    componentDidMount() {
        this.props.fetchPartners();
        this.props.fetchCompanies();
    }

    onSubmit = (formValues) => {
        this.props.createShare(formValues);
    }

    render() {
        if (!this.props.partners || !this.props.companies || !this.props.partners.length || !this.props.companies.length) {
            return <div>Loading...</div>
        }
        console.log({ company: this.props.companies[0]._id, partner: this.props.partners[0]._id });
        return (
            <div>
                <h3>Create a Share</h3>
                <ShareForm
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

export default connect(mapStateToProps, { createShare, fetchCompanies, fetchPartners })(ShareCreate)