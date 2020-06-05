import React from 'react';
import { Container } from './elements';
import NeonBtn from '../components/NeonBtn/NeonBtn'
import CircleWave from '../components/CircleWave/CircleWave';
import Waterwheel from '../components/Waterwheel/Waterwheel';

function Layout() {
  return (
    <Container>
      <NeonBtn></NeonBtn>
      <CircleWave></CircleWave>
      <Waterwheel></Waterwheel>
    </Container>
  );
}

export default Layout;
