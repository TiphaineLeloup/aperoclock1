// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';

// == Import : local
import ListGroups from 'src/containers/ListGroups';
import ListEvents from 'src/containers/ListEvents';
import './dashboard.scss';

// == Composant
const VIEW_GROUPS = true;
const VIEW_EVENTS = false;

class Dashboard extends React.Component {
  state = {
    view: VIEW_GROUPS,
  }

  componentDidMount() {
    const { dispatchNewTitle } = this.props;
    dispatchNewTitle('Tableau de bord');
  }

  render() {
    const { view } = this.state;
    return (
      <div id="dashboard">
        <Switch
          checked={view}
          checkedChildren="Vue par Groupes"
          onChange={() => this.setState({
            view: !view,
          })}
          unCheckedChildren="Vue par événements"
        />
        { view === VIEW_GROUPS ? <ListGroups /> : <ListEvents /> }
      </div>
    );
  }
}

Dashboard.propTypes = {
  dispatchNewTitle: PropTypes.func.isRequired,
};

// == Export
export default Dashboard;
