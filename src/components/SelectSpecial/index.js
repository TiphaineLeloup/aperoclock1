// == Import : npm
import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
// == Import : local


// == Composant
// eslint-disable-next-line react/prefer-stateless-function
class SelectSpecial extends React.Component {

  handleChange(value) {
    const { dispatchNewGroup } = this.props;
    dispatchNewGroup(value);
  }

  render() {
    const { Option } = Select;
    const { actualGroup, groups } = this.props;

    const children = groups.map(group => (
      <Option key={`${group.id}-${group.name}`} value={group.id}>{group.name}</Option>
    ));

    return (
      <>
        <Select
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) > 0}
          onChange={this.handleChange.bind(this)}
          placeholder="Sélectionnez un groupe"
          showSearch
          style={{ width: '200px' }}
          value={actualGroup !== null ? actualGroup : undefined}
        >
          {children}
        </Select>

      </>
    );
  }
}

SelectSpecial.propTypes = {
  actualGroup: PropTypes.number,
  dispatchNewGroup: PropTypes.func.isRequired,
  groups: PropTypes.array,
};

SelectSpecial.defaultProps = {
  actualGroup: null,
  groups: [],
};

// == Export
export default SelectSpecial;
