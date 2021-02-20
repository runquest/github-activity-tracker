import React from 'react';
import { Container } from 'semantic-ui-react';

import Layout from './Layout';

const graphSection = {
  width: '50%',
  background: 'green',
  height: '100%'
}

const searchSection = {
  width: '50%',
  background: 'blue',
  height: '100%'
}

const container = {
  /* Empty initial */
  // position: 'relative',
  display: 'flex',
  flexDirection: 'row'
}


const Home = () => {
  return (
    <Layout>
      <Container style={container}>
        <Container style={graphSection}>
          <h1>Graph section</h1>
        </Container>
        <Container style={searchSection}>
          <h1>Search Section</h1>
        </Container>
      </Container>
    </Layout>
  );
};

export default Home;