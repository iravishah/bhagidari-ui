import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';

import PartenerForm from './PartenerForm';
import { editPartner, fetchPartner } from '../../actions/partners';

class PartnerEdit extends React.Component {

    componentDidMount() {
        this.props.fetchPartner(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        formValues = { ...this.props.partner, ...formValues }
        this.props.editPartner(this.props.match.params.id, formValues)
    }

    render() {
        return (
            <div>
                <h3>Edit Partner</h3>
                <PartenerForm
                    initialValues={pick(this.props.partner, ['name', 'ph_no'])}
                    onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        partner: state.partners[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { editPartner, fetchPartner })(PartnerEdit);