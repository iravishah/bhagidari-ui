import React from 'react';
import { connect } from 'react-redux';

import { fetchPartner } from '../../actions/partners';
import { fetchShares } from '../../actions/shares';
import NavLink from '../Helper/NavLink';

class PartnerView extends React.Component {

    componentDidMount() {
        this.props.fetchPartner(this.props.match.params.id);
        this.props.fetchShares();
    }

    renderPartners(partner) {
        const companyInvestors = this.props.shares.map((share) => {
            if (partner.uid === share.partner.uid) {
                return share;
            }
        }).filter(e => e);

        if (!companyInvestors || !companyInvestors.length) {
            return null;
        }

        return companyInvestors.map(companyInvestor => {
            return (
                <tr key={companyInvestor.uid}>
                    <td>
                        {companyInvestor.company.name}
                    </td>
                    <td>
                        {companyInvestor.percentage}
                    </td>
                </tr>
            )
        });
    }

    render() {
        const partner = this.props.partner;
        const shares = this.props.shares;
        if (!partner || !shares || !shares.length) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3>Partner Details</h3>
                <div>
                    <table className="ui single table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={partner.uid}>
                                <td>
                                    {partner.name}
                                </td>
                                <td>
                                    {partner.ph_no}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="ui hidden divider"></div>
                <div>
                    <h3>Partner Companies</h3>
                    <table className="ui single table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderPartners(partner)}
                        </tbody>
                    </table>
                    <div>
                        <NavLink
                            to={`/partners/list`}
                            buttonName="Back"
                            className="ui button primary"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        partner: state.partners[ownProps.match.params.id],
        shares: Object.values(state.shares)
    }
}

export default connect(mapStateToProps, { fetchPartner, fetchShares })(PartnerView);