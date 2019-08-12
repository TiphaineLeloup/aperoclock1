// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

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
        <SelectSpecial />
        {
          actualGroup !== null && (
            <Card title={actualGroupFull.name}>
              <p>{actualGroupFull.description}</p>
            </Card>
          )
        }
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
