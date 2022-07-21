import React from 'react';
import { connect } from 'react-redux';

import { fetchCompany, fetchCompanyPartners } from '../../actions/companies';
import NavLink from '../Helper/NavLink';

class CompanyView extends React.Component {

    componentDidMount() {
        console.log('inside componet did mount');
        this.props.fetchCompany(this.props.match.params.id);
        this.props.fetchCompanyPartners(this.props.match.params.id);
    }

    renderPartners(company) {
        return this.props.companyPartners.map(companyPartner => {
            const currentCompany = companyPartner.share.find((cp) => cp.company === company._id);
            console.log(currentCompany);
            return (
                <tr key={companyPartner.uid}>
                    <td>
                        {companyPartner.name}
                    </td>
                    <td>
                        {currentCompany.percentage}
                    </td>
                </tr>
            )
        });
    }

    render() {
        const company = this.props.company;
        if (!this.props.company || !this.props.companyPartners) {
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
        companyPartners: Object.values(state.companyPartners)
    }
}

export default connect(mapStateToProps, { fetchCompany, fetchCompanyPartners })(CompanyView);