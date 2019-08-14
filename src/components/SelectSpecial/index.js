// == Import : npm
import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
// == Import : local


// == Composant
// eslint-disable-next-line react/prefer-stateless-function
class SelectSpecial extends React.Component {
  handleChangeEvent(value) {
    const { dispatchNewEvent } = this.props;
    dispatchNewEvent(value);
  }

  handleChangeGroup(value) {
    const { dispatchNewGroup } = this.props;
    dispatchNewGroup(value);
  }

  render() {
    const { Option } = Select;
    const {
      actualEvent,
      actualGroup,
      events,
      groups,
      showEvents,
      showGroups,
    } = this.props;

    const childrenEvent = events.map(event => (
      <Option key={`${event.event.id}-${event.event.name}`} value={event.event.id}>{event.event.name}</Option>
    ));

    const childrenGroup = groups.map(group => (
      <Option key={`${group.id}-${group.name}`} value={group.id}>{group.name}</Option>
    ));

    return (
      <>
        { showEvents && (
          <Select
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) > 0}
            onChange={this.handleChangeEvent.bind(this)}
            placeholder="Sélectionnez un événement"
            showSearch
            style={{ width: '200px' }}
            defaultValue={actualEvent !== null ? actualEvent : undefined}
          >
            {childrenEvent}
          </Select>

        )}

        { showGroups && (
          <Select
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) > 0}
            onChange={this.handleChangeGroup.bind(this)}
            placeholder="Sélectionnez un groupe"
            showSearch
            style={{ width: '200px' }}
            defaultValue={actualGroup !== null ? actualGroup : undefined}
          >
            {childrenGroup}
          </Select>

        )}

      </>
    );
  }
}

SelectSpecial.propTypes = {
  actualEvent: PropTypes.number,
  actualGroup: PropTypes.number,
  dispatchNewEvent: PropTypes.func.isRequired,
  dispatchNewGroup: PropTypes.func.isRequired,
  events: PropTypes.array,
  groups: PropTypes.array,
  showEvents: PropTypes.bool,
  showGroups: PropTypes.bool,
};

SelectSpecial.defaultProps = {
  actualEvent: null,
  actualGroup: null,
  events: [],
  groups: [],
  showEvents: false,
  showGroups: false,
};

// == Export
export default SelectSpecial;
