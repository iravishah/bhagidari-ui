import React from 'react';
import { connect } from 'react-redux';

import { fetchLands, deleteLand } from '../../actions/lands';
import NavLink from '../Helper/NavLink';

class LandList extends React.Component {
    componentDidMount() {
        this.props.fetchLands();
    }

    handleDelete(id) {
        this.props.deleteLand(id);
    }

    renderList() {
        return this.props.lands.map(land => {
            return (
                <tr key={land.uid}>
                    <td>{land.village.name}</td>
                    <td>{land.survey_no}</td>
                    <td>{land.company.name}</td>
                    <td style={{ textAlign: 'right' }}>
                        <NavLink
                            to={`/lands/list`}
                            buttonName="View"
                            className="ui button standard"
                        />
                        <NavLink
                            to={`/lands/${land.uid}/edit`}
                            buttonName="Edit"
                            className="ui button green"
                        />
                        <div
                            className="ui button negative"
                            onClick={() => { this.handleDelete(land.uid) }}
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
                <table className="ui single line table">
                    <thead>
                        <tr>
                            <th>Village Name</th>
                            <th>Survey No</th>
                            <th>Company Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
                <div style={{ textAlign: 'right' }}>
                    <NavLink
                        to="/lands/create"
                        buttonName="Create Land"
                        className="ui button primary"
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lands: Object.values(state.lands)
    }
}

export default connect(mapStateToProps, { fetchLands, deleteLand })(LandList);