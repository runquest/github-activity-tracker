import React from 'react';
import { Container } from 'semantic-ui-react';
import Graph from './Graph'
import SideBar from './SideBar'
import Layout from './Layout';

const container = {
  width: '1440px',
  height: '900px',
  display: 'flex',
  flexDirection: 'row'
}

const Home = () => {
  return (
    <Layout>
      <Container style={container}>
        <Graph />
        <SideBar />
      </Container>
    </Layout>
  );
};

export default Home;