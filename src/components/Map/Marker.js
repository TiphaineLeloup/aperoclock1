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

const Marker = props => (
  <div id="markerandDrawer">
    <Wrapper
      alt={props.text}    
      {...props.onClick ? { onClick: props.onClick } : {}}
    />
    <DrawerMarker />
  </div>
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
