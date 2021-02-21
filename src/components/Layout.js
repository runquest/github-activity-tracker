import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';
import FeatherIcon from 'feather-icons-react';

import style from './layout.css'

const mainContainer = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  background: '#151530'
}

const Layout = ({ children }) => {
  return (
    <Container style={mainContainer}>
      {children}
    </Container>
  );
};

export default Layout;