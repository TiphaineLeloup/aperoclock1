import React from 'react';
import { Card, List } from 'antd';

import './listgroups.scss';

const ListGroups = () => {
  const fakeGroup = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div id="listGroups">
      {
        /* PENSER À LA CLEF */
        fakeGroup.map((elem) => {
          return (
            <Card
              extra={<a href="#">Voir le groupe</a>}
              title="Mon Groupe"
            >
              <List
                dataSource={[1, 2, 3]}
                footer={
                  <a href="#">Voir tous les événements du groupe</a>
                }
                renderItem={item => <List.Item>{item}</List.Item>}
                size="small"
              />
            </Card>
          );
        })
      }
    </div>
  );
};

export default ListGroups;
