import React from 'react';
import { Badge, List } from 'antd';

import './listevents.scss';
import datas from 'src/data';

class ListEvents extends React.Component {
  render() {
    const fakeEvents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const dataevent = datas.map(elem => (
      elem.event
    ));

    return (
    <div id="listEvents">
      {/* PENSER À LA CLEF */}
      <List
        dataSource={dataevent}
        itemLayout="horizontal"
        renderItem={
          item => (
            <List.Item>
              <List.Item.Meta
                avatar={<div className="miniDate">{item.date}</div>}
                title={(
                  <>
                    <span className="event">{item.name}</span>
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
                    <p>{ item.description }</p>
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

export default ListEvents;
