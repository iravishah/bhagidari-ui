import React from 'react';
import { connect } from 'react-redux';

import { fetchLands } from '../../actions/lands';

class LandList extends React.Component {
    componentDidMount() {
        this.props.fetchLands();
    }

    renderList() {
        return this.props.lands.map(land => {
            return (
                <tr key={land.uid}>
                    <td>{land.village.name}</td>
                    <td>{land.survey_no}</td>
                    <td>{land.company.name}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table className="ui single line table">
                <thead>
                    <tr>
                        <th>Village Name</th>
                        <th>Survey No</th>
                        <th>Company Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderList()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lands: Object.values(state.lands)
    }
}

export default connect(mapStateToProps, { fetchLands })(LandList);