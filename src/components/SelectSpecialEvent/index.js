// == Import : npm
import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
// == Import : local


// == Composant
// eslint-disable-next-line react/prefer-stateless-function
class SelectSpecialEvent extends React.Component {
  handleChange(value) {
    const { dispatchNewEvent } = this.props;
    dispatchNewEvent(value);
  }

  render() {
    const { Option } = Select;
    const { actualEvent, events } = this.props;

    const children = events.map(event => (
      <Option key={`${event.id}-${event.name}`} value={event.id}>{event.name}</Option>
    ));

    return (
      <>
        <Select
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) > 0}
          onChange={this.handleChange.bind(this)}
          placeholder="Sélectionnez un événement"
          showSearch
          style={{ width: '200px' }}
          value={actualEvent !== null ? actualEvent : undefined}
        >
          {children}
        </Select>

      </>
    );
  }
}

SelectSpecialEvent.propTypes = {
  actualEvent: PropTypes.number,
  dispatchNewEvent: PropTypes.func.isRequired,
  events: PropTypes.array,
};

SelectSpecialEvent.defaultProps = {
  actualEvent: null,
  events: [],
};

// == Export
export default SelectSpecialEvent;
