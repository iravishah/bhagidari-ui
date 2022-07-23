import React from 'react';
import { connect } from 'react-redux';

import { fetchInstallments } from '../../actions/installments';
import NavLink from '../Helper/NavLink';

class InstallmentList extends React.Component {
    componentDidMount() {
        this.props.fetchInstallments();
    }

    renderList() {
        return this.props.installments.map(installment => {
            return (
                <tr key={installment.uid}>
                    <td>
                        {installment.company.name}
                    </td>
                    <td>
                        {installment.partner.name}
                    </td>
                    <td>
                        {installment.percentage}
                    </td>
                    <td>
                        {installment.installment_at}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                        <NavLink
                            to={`/installments/list`}
                            buttonName="View"
                            className="ui button standard"
                        />
                        <NavLink
                            to={`/installments/${installment.uid}/edit`}
                            buttonName="Edit"
                            className="ui button green"
                        />
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
                            <th>Company Name</th>
                            <th>Partner Name</th>
                            <th>Percentage</th>
                            <th>Installment Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
                <div style={{ textAlign: 'right' }}>
                    <NavLink
                        to="/installments/create"
                        buttonName="Create Installment"
                        className="ui button primary"
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        installments: Object.values(state.installments)
    }
}

export default connect(mapStateToProps, { fetchInstallments })(InstallmentList);