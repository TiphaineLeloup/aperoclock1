import React from 'react';
import { Badge, List } from 'antd';
import PropTypes from 'prop-types';

import './listevents.scss';

class ListEvents extends React.Component {
  componentDidMount() {
    const { dispatchGetAll } = this.props;
    dispatchGetAll();
  }

  render() {
    const { events } = this.props;
    return (
      <div id="listEvents">
        {/* PENSER À LA CLEF */}
        <List
          dataSource={events.events}
          itemLayout="horizontal"
          renderItem={
          item => (
            <List.Item>
              <List.Item.Meta
                avatar={<div className="miniDate">{new Date(item.event.date).toLocaleDateString()}</div>}
                title={(
                  <>
                    <span className="event">{item.event.name}</span>
                    <Badge
                      className="participationTrue"
                      count={5}
                    />
                    <Badge
                      className="participationNull"
                      count={2}
                    />
                    <Badge
                      className="participationFalse"
                      count={1}
                    />
                  </>
                )}
                description={(
                  <>
                    <p>Groupe X</p>
                    <p>{ item.event.description }</p>
                  </>
                )}
              />
            </List.Item>
          )
        }
        />
      </div>
    );
  }
}

ListEvents.propTypes = {
  dispatchGetAll: PropTypes.func.isRequired,
  events: PropTypes.object,
};

ListEvents.defaultProps = {
  events: [],
};

export default ListEvents;
