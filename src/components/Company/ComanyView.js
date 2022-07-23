import React from 'react';
import { connect } from 'react-redux';

import { fetchCompany } from '../../actions/companies';
import { fetchShares } from '../../actions/shares';
import NavLink from '../Helper/NavLink';

class CompanyView extends React.Component {

    componentDidMount() {
        this.props.fetchCompany(this.props.match.params.id);
        this.props.fetchShares();
    }

    renderPartners(company) {
        const companyInvestors = this.props.shares.map((share) => {
            if (company.uid === share.company.uid) {
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
                        {companyInvestor.partner.name}
                    </td>
                    <td>
                        {companyInvestor.percentage}
                    </td>
                </tr>
            )
        });
    }

    render() {
        const company = this.props.company;
        const shares = this.props.shares;
        if (!company || !shares || !shares.length) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3>Company Details</h3>
                <div>
                    <table className="ui single table">
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={company.uid}>
                                <td>
                                    {company.name}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="ui hidden divider"></div>
                <div>
                    <h3>Company Partners</h3>
                    <table className="ui single table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderPartners(company)}
                        </tbody>
                    </table>
                    <div>
                        <NavLink
                            to={`/companies/list`}
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
        company: state.companies[ownProps.match.params.id],
        shares: Object.values(state.shares)
    }
}

export default connect(mapStateToProps, { fetchCompany, fetchShares })(CompanyView);