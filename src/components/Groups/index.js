// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import SelectSpecial from 'src/containers/SelectSpecial';


// == Composant
class Groups extends React.Component {
  componentDidMount() {
    const { dispatchNewTitle } = this.props;
    dispatchNewTitle('Mes Groupes');
  }

  render() {
    return (
      <div id="groups">
      Page des groupes
        <SelectSpecial groups events />
      </div>

    );
  }
}

Groups.propTypes = {
  dispatchNewTitle: PropTypes.func.isRequired,
};

// == Export
export default Groups;
