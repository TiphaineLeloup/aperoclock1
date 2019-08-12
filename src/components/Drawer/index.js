import React from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button } from 'antd';

class DrawerMarker extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Event
        </Button>
        <Drawer
          title="Détail de l'event"
          placement="right"
          closable={false}
          onClose={this.onClose}
          // eslint-disable-next-line react/destructuring-assignment
          visible={this.state.visible}
        >
          <p>Anniversaire de jacky</p>
          <p>.....</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}

export default DrawerMarker;
