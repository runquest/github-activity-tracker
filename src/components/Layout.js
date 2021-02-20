import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';
import FeatherIcon from 'feather-icons-react';

const pullRight = {
  display: 'flex',
  justifyContent: 'flex-end'
};

const h1 = {
  marginTop: '10px !important',
  marginBottom: '20px !important'
};


const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" style={h1}>
          metalabs-prototype world
        </Header>
      </Link>
      {children}
      <Divider />
      <p style={pullRight}>
        Made with <FeatherIcon icon="heart" /> by Aiste
      </p>
    </Container>
  );
};

export default Layout;