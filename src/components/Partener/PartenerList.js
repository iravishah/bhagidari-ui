import React from 'react';
import { connect } from 'react-redux';

import NavLink from '../Helper/NavLink';
import { fetchPartners, deletePartner } from '../../actions/partners';

class PartnerList extends React.Component {
    componentDidMount() {
        this.props.fetchPartners();
    }

    handleDelete(id) {
        this.props.deletePartner(id);
    }

    renderList() {
        return this.props.partners.map(partner => {
            return (
                <tr key={partner.uid}>
                    <td>{partner.name}</td>
                    <td>{partner.ph_no}</td>
                    <td style={{ textAlign: 'right' }}>
                        <NavLink
                            to={`/partners/${partner.uid}/view`}
                            buttonName="View"
                            className="ui button standard"
                        />
                        <NavLink
                            to={`/partners/${partner.uid}/edit`}
                            buttonName="Edit"
                            className="ui button green"
                        />
                        <div className="ui button negative"
                            onClick={() => { this.handleDelete(partner.uid) }}>
                            Delete
                        </div>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table className="ui single line table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone No</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
                <div style={{ textAlign: 'right' }}>
                    <NavLink
                        to="/partners/create"
                        buttonName="Create Partner"
                        className="ui button primary"
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        partners: Object.values(state.partners)
    }
}

export default connect(mapStateToProps, { fetchPartners, deletePartner })(PartnerList);