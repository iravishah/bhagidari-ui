import React from 'react';
import { connect } from 'react-redux';

import NavLink from '../Helper/NavLink';
import { fetchPartners } from '../../actions/partners';

class PartnerList extends React.Component {
    componentDidMount() {
        this.props.fetchPartners();
    }

    renderList() {
        return this.props.partners.map(partner => {
            return (
                <tr key={partner.uid}>
                    <td>{partner.name}</td>
                    <td>{partner.ph_no}</td>
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

export default connect(mapStateToProps, { fetchPartners })(PartnerList);