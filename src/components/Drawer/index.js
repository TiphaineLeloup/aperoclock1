
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
          plus d'info
        </Button>
        <Drawer
          title="Titre évènement"
          Event
        </Button>
        <Drawer
          title="Détail de l'event"
          placement="right"
          closable={false}
          onClose={this.onClose}
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
