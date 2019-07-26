import React from 'react';
import { Badge, List } from 'antd';

import './listevents.scss';

const ListEvents = () => {
  const fakeEvents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div id="listEvents">
    {/* PENSER À LA CLEF */}
      <List
        dataSource={fakeEvents}
        itemLayout="horizontal"
        renderItem={
          item => (
            <List.Item>
              <List.Item.Meta
                avatar={<div className="miniDate">25/07/2019</div>}
                title={(
                  <>
                    <span className="event">Evénement {item}</span>
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
                    <p>Blablabla...</p>
                  </>
                )}
              />
            </List.Item>
          )
        }
      />
    </div>
  );
};

export default ListEvents;
