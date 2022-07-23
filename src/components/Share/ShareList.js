import React from 'react';
import { connect } from 'react-redux';

import { fetchShares } from '../../actions/shares';
import NavLink from '../Helper/NavLink';

class ShareList extends React.Component {
    componentDidMount() {
        this.props.fetchShares();
    }

    renderList() {
        return this.props.shares.map(share => {
            return (
                <tr key={share.uid}>
                    <td>
                        {share.company.name}
                    </td>
                    <td>
                        {share.partner.name}
                    </td>
                    <td>
                        {share.percentage}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                        <NavLink
                            to={`/shares/list`}
                            buttonName="View"
                            className="ui button standard"
                        />
                        <NavLink
                            to={`/shares/${share.uid}/edit`}
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
                <div style={{ textAlign: 'right' }}>
                    <NavLink
                        to="/shares/create"
                        buttonName="Create Share"
                        className="ui button primary"
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shares: Object.values(state.shares)
    }
}

export default connect(mapStateToProps, { fetchShares })(ShareList);