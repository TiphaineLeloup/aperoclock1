import React from 'react';
import { Card, List } from 'antd';
import PropTypes from 'prop-types';


import './listgroups.scss';

class ListGroups extends React.Component {
  render() {
    const { groups } = this.props.groups;
    return (
      <div id="listGroups">
        {
          /* PENSER À LA CLEF */
          groups && groups.length > 0
          && groups.map(group => (
            <Card
              actions={
                [<a href="#">Voir tous les événements du groupe</a>]
              }
              extra={<a href="#">Voir le groupe</a>}
              key={group.id}
              title={group.name}
            >
              <List
                dataSource={group.events.slice(0, 3)}
                renderItem={item => <List.Item>{item.name}</List.Item>}
                size="small"
              />
            </Card>
          ))
        }
      </div>
    );
  }
}

ListGroups.propTypes = {
  dispatchGetAll: PropTypes.func.isRequired,
  groups: PropTypes.object,
};

ListGroups.defaultProps = {
  groups: [],
};

export default ListGroups;
