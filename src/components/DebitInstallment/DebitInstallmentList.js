import React from 'react';
import { connect } from 'react-redux';

import { fetchDebitInstallments, deleteDebitInstallment } from '../../actions/debit_installments';
import NavLink from '../Helper/NavLink';

class InstallmentList extends React.Component {
    componentDidMount() {
        this.props.fetchDebitInstallments();
    }

    handleDelete(id) {
        this.props.deleteDebitInstallment(id);
    }

    renderList() {
        return this.props.debit_installments.map(installment => {
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
                        {installment.settled_at}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                        <NavLink
                            to={`/debit_installments/list`}
                            buttonName="View"
                            className="ui button standard"
                        />
                        <NavLink
                            to={`/debit_installments/${installment.uid}/edit`}
                            buttonName="Edit"
                            className="ui button green"
                        />
                        <div className="ui button negative" onClick={() => { this.handleDelete(installment.uid) }}>
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
                            <th>Company Name</th>
                            <th>Partner Name</th>
                            <th>Percentage</th>
                            <th>Settelment Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
                <div style={{ textAlign: 'right' }}>
                    <NavLink
                        to="/debit_installments/create"
                        buttonName="Create Debit Installment"
                        className="ui button primary"
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        debit_installments: Object.values(state.debit_installments)
    }
}

export default connect(mapStateToProps, { fetchDebitInstallments, deleteDebitInstallment })(InstallmentList);