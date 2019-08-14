import React from 'react';
import 'antd/dist/antd.css';
import { Button, Drawer } from 'antd';
import PropTypes from 'prop-types';

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
    const { title } = this.props;
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          {title}
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

DrawerMarker.propTypes = {
  object: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  typeUserTrueEventFalse: PropTypes.bool,
};

DrawerMarker.defaultProps = {
  typeUserTrueEventFalse: false,
};

export default DrawerMarker;
