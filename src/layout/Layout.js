import React from 'react';
import { Container } from './elements';
import NeonBtn from '../components/NeonBtn/NeonBtn'
import CircleWave from '../components/CircleWave/CircleWave';
import Waterwheel from '../components/Waterwheel/Waterwheel';
import EyeFollow from '../components/EyeFollow/EyeFollow';
import NeonLine from '../components/NeonLine/NeonLine';

function Layout() {
  return (
    <Container>
      <NeonBtn></NeonBtn>
      <CircleWave></CircleWave>
      <Waterwheel></Waterwheel>
      <EyeFollow></EyeFollow>
      <NeonLine></NeonLine>
    </Container>
  );
}

export default Layout;
