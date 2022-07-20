import React from 'react';
import { connect } from 'react-redux';

import PartenerForm from './PartenerForm';
import { createPartner } from '../../actions/partners';

class PartnerCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createPartner(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create Partner</h3>
                <PartenerForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { createPartner })(PartnerCreate);