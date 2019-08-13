// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Card, Button } from 'antd';

// == Import : local
import SelectSpecial from 'src/containers/SelectSpecial';


// == Composant
class Events extends React.Component {
  componentDidMount() {
    const { dispatchNewTitle } = this.props;
    dispatchNewTitle('Mes Événements');
  }

  render() {
    const { actualEvent, events } = this.props;

    const actualEventFull = events.find(event => (event.id === actualEvent));

    return (
      <div id="events">
        <SelectSpecial showEvents />
        {
          actualEvent !== null && (
            <Card title={actualEventFull.name}>
              <p>{actualEventFull.description}</p>
            </Card>
          )
        }
        <Button type="primary">
          <NavLink to="/creation-evenement">
              Créer un événement
          </NavLink>
        </Button>
      </div>
    );
  }
}

Events.propTypes = {
  actualEvent: PropTypes.number,
  events: PropTypes.array,
  dispatchNewTitle: PropTypes.func.isRequired,
};

Events.defaultProps = {
  actualEvent: null,
  events: [],
};

// == Export
export default Events;
