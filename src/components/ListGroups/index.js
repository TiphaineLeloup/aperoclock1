import React from 'react';
import { Card, List } from 'antd';
import PropTypes from 'prop-types';


import './listgroups.scss';

class ListGroups extends React.Component {
  componentDidMount() {
    const { dispatchGetAll } = this.props;
    dispatchGetAll();
    const { groups } = this.props;
    console.log(groups);
  }

  render() {
    const { groups } = this.props;
    return (
      <div id="listGroups">
        {
          /* PENSER À LA CLEF */
          groups && groups.length > 0
          && groups.map(group => (
            <Card
              extra={<a href="#">Voir le groupe</a>}
              title={group.name}
            >
              <List
                dataSource={groups}
                footer={
                  <a href="#">Voir tous les événements du groupe</a>
                }
                renderItem={item => <List.Item>{item}</List.Item>}
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
