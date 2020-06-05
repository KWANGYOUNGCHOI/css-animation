import React from 'react';
import { Container } from './elements';
import NeonBtn from '../components/NeonBtn/NeonBtn'
import CircleWave from '../components/CircleWave/CircleWave';

function Layout() {
  return (
    <Container>
      <NeonBtn></NeonBtn>
      <CircleWave></CircleWave>
    </Container>
  );
}

export default Layout;
