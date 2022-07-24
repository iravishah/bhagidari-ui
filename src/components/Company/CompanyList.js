import React from 'react';
import { connect } from 'react-redux';

import { fetchCompanies, deleteCompany } from '../../actions/companies';
import NavLink from '../Helper/NavLink';

class CompanyList extends React.Component {
    componentDidMount() {
        this.props.fetchCompanies();
    }

    handleDelete(id) {
        this.props.deleteCompany(id);
    }

    renderList() {
        return this.props.companies.map(company => {
            return (
                <tr key={company.uid}>
                    <td>
                        {company.name}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                        <NavLink
                            to={`/companies/${company.uid}/view`}
                            buttonName="View"
                            className="ui button standard"
                        />
                        <NavLink
                            to={`/companies/${company.uid}/edit`}
                            buttonName="Edit"
                            className="ui button green"
                        />
                        <div
                            className="ui button negative"
                            onClick={() => { this.handleDelete(company.uid) }}
                        >
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
                <table className="ui single table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th></th>
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

export default connect(mapStateToProps, { fetchCompanies, deleteCompany })(CompanyList);