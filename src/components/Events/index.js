// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

// == Import : local
import SelectSpecialEvent from 'src/containers/SelectSpecialEvent';


// == Composant
class Events extends React.Component {
  componentDidMount() {
    const { dispatchNewTitle } = this.props;
    dispatchNewTitle('Mes Evénements');
  }

  render() {
    const { actualEvent, events } = this.props;

    const actualEventFull = events.find(event => (event.id === actualEvent));

    return (
      <div id="events">
        <SelectSpecialEvent />
        {
          actualEvent !== null && (
            <Card title={actualEventFull.name}>
              <p>{actualEventFull.description}</p>
            </Card>
          )
        }
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
