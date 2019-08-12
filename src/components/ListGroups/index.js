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
          groups.map(group => (
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

// const ListGroups = () => {
//   const fakeGroup = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   return (
//     <div id="listGroups">
//       {
//         /* PENSER À LA CLEF */
//         fakeGroup.map((elem) => {
//           return (
//             <Card
//               extra={<a href="#">Voir le groupe</a>}
//               title="Mon Groupe"
//             >
//               <List
//                 dataSource={[1, 2, 3]}
//                 footer={
//                   <a href="#">Voir tous les événements du groupe</a>
//                 }
//                 renderItem={item => <List.Item>{item}</List.Item>}
//                 size="small"
//               />
//             </Card>
//           );
//         })
//       }
//     </div>
//   );
// };

export default ListGroups;
