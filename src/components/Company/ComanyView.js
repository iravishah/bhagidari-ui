import React from 'react';
import { connect } from 'react-redux';

import { fetchCompany } from '../../actions/companies';
import { fetchPartners } from '../../actions/partners';
import NavLink from '../Helper/NavLink';

class CompanyView extends React.Component {

    componentDidMount() {
        this.props.fetchCompany(this.props.match.params.id);
        this.props.fetchPartners();
    }

    renderPartners(company) {
        const partners = this.props.partners.map((partner) => {
            const partnerCompanyObject = partner.share.find((p) => p.company === company._id);
            if (partnerCompanyObject) {
                partner.partnerCompanyObject = partnerCompanyObject;
                return partner;
            }
        }).filter(e => e);

        return partners.map(partner => {
            return (
                <tr key={partner.uid}>
                    <td>
                        {partner.name}
                    </td>
                    <td>
                        {partner.partnerCompanyObject.percentage}
                    </td>
                </tr>
            )
        });
    }

    render() {
        const company = this.props.company;
        if (!company || !this.props.partners.length) {
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
        partners: Object.values(state.partners)
    }
}

export default connect(mapStateToProps, { fetchCompany, fetchPartners })(CompanyView);