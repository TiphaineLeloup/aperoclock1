// == Import : npm
import React from 'react';
import { Select } from 'antd';

// == Import : local


// == Composant
// eslint-disable-next-line react/prefer-stateless-function
class SelectSpecial extends React.Component {

  render() {
    const { Option } = Select;
    const showGroups = true;
    const showEvents = true;
    return (
      <>
        {showEvents && (
          <Select
            showSearch
            placeHolder="Sélectionnez un événement"
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) > 0}
          >
            <Option key="bla">Bla</Option>
          </Select>
        )
        }
        {showGroups && (
          <Select
            showSearch
            placeHolder="Sélectionnez un groupe"
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) > 0}
          >
            <Option key="bla">Bla</Option>
          </Select>
        )
        }
      </>
    );
  }
}

// == Export
export default SelectSpecial;
