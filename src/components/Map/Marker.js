import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DrawerMarker from 'src/components/Drawer';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: #fa3e50ff;
  border: 2px solid #b50011ff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
class Marker extends React.Component {
  render() {
    const { object, title } = this.props;
    return (
      <div id="markerandDrawer">
        <Wrapper
          alt={title}
          {...this.props.onClick ? { onClick: this.props.onClick } : {}}
        />
        <DrawerMarker object={object} title={title} />
      </div>
    );

  }
}

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  object: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default Marker;
