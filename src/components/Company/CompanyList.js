import React from 'react';
import { connect } from 'react-redux';

import { fetchCompanies } from '../../actions/companies';
import NavLink from '../Helper/NavLink';
import history from '../../histoty';

class CompanyList extends React.Component {
    componentDidMount() {
        this.props.fetchCompanies();
    }

    handleCompanyClick(uid) {
        history.push(`/companies/edit/${uid}`);
    }

    renderList() {
        return this.props.companies.map(company => {
            return (
                <tr key={company.uid} onClick={() => { this.handleCompanyClick(company.uid) }}>
                    <td>{company.name}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table className="ui celled selectable table">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
                <div style={{ textAlign: 'right' }}>
                    <NavLink
                        to="/companies/create"
                        buttonName="Create Company"
                        className="ui button primary"
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        companies: Object.values(state.companies)
    }
}

export default connect(mapStateToProps, { fetchCompanies })(CompanyList);