import React from 'react';
import { connect } from 'react-redux';
import { pick, merge } from 'lodash';

import LandForm from './LandForm';
import {
    fetchCompanies
} from '../../actions/companies';
import { fetchLand, editLand } from '../../actions/lands';

class LandEdit extends React.Component {
    componentDidMount() {
        this.props.fetchLand(this.props.match.params.id);
        this.props.fetchCompanies();
    }

    onSubmit = (formValues) => {
        this.props.editLand(this.props.match.params.id, formValues)
    }

    render() {
        if (!this.props.land || !this.props.companies || !this.props.companies.length) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a Land</h3>
                <LandForm
                    initialValues={merge(pick(this.props.land, ['village.name', 'survey_no']), { company: this.props.land.company._id })}
                    onSubmit={this.onSubmit}
                    companies={this.props.companies} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        companies: Object.values(state.companies),
        land: state.lands[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { editLand, fetchLand, fetchCompanies })(LandEdit);