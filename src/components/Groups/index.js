// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Card, Button } from 'antd';

// == Import : local
import SelectSpecial from 'src/containers/SelectSpecial';


// == Composant
class Groups extends React.Component {
  componentDidMount() {
    const { dispatchNewTitle } = this.props;
    dispatchNewTitle('Mes Groupes');
  }

  render() {
    const { actualGroup, groups } = this.props;

    const actualGroupFull = groups.find(group => (group.id === actualGroup));

    return (
      <div id="groups">
        <SelectSpecial showGroups />
        {
          actualGroup !== null && (
            <Card title={actualGroupFull.name}>
              <p>{actualGroupFull.description}</p>
            </Card>
          )
        }
        <Button type="primary">
          <NavLink to="/creation-groupe">
              Créer un groupe
          </NavLink>
        </Button>
      </div>
    );
  }
}

Groups.propTypes = {
  actualGroup: PropTypes.number,
  groups: PropTypes.array,
  dispatchNewTitle: PropTypes.func.isRequired,
};

Groups.defaultProps = {
  actualGroup: null,
  groups: [],
};

// == Export
export default Groups;
