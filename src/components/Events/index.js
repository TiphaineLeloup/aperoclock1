// // == Import : npm
// import React from 'react';
// import { Menu, Dropdown, Icon, Button, Radio, Input } from 'antd';

// // == Import : local


// // == Composant
// // const Events = () => (
// //   <div id="events">
   
// class App extends React.Component {
//   state = {
//     value: 1,
//   };

//   onChange = e => {
//     console.log('radio checked', e.target.value);
//     this.setState({
//       value: e.target.value,
//     });
//   };

//   render() {
//     const radioStyle = {
//       display: 'block',
//       height: '30px',
//       lineHeight: '30px',
//     };
//     return (
//       <div id="events">
//       <Menu>
//       <Menu.Item>
//         <a target="_blank" rel="noopener noreferrer" href="#">
//         1st menu item
//         </a>
//       </Menu.Item>
//       <Menu.Item>
//         <a target="_blank" rel="noopener noreferrer" href="#">
//         2nd menu item
//         </a>
//       </Menu.Item>
//       <Menu.Item>
//         <a target="_blank" rel="noopener noreferrer" href="#">
//         3rd menu item
//         </a>
//       </Menu.Item>
//     </Menu>

//     <Dropdown overlay={Menu}>
//       <a className="ant-dropdown-link" href="#">
//       Hover me <Icon type="down" />
//       </a>
//     </Dropdown>
//     <Button className="add-event-button" exact activeClassName="add-event-button--active">Ajouter</Button>
//     Page des évènements
//       <Radio.Group onChange={this.onChange} value={this.state.value}>
//         <Radio style={radioStyle} value={1}>
//           Option A
//         </Radio>
//         <Radio style={radioStyle} value={2}>
//           Option B
//         </Radio>
//         <Radio style={radioStyle} value={3}>
//           Option C
//         </Radio>
//         <Radio style={radioStyle} value={4}>
//           More...
//           {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
//         </Radio>
//       </Radio.Group>
// </div>
// );
// }

// // == Export
// export default Events;
