import React from 'react';
import { Container } from './elements';
import NeonBtn from '../components/NeonBtn/NeonBtn'
import CircleWave from '../components/CircleWave/CircleWave';
import Waterwheel from '../components/Waterwheel/Waterwheel';
import EyeFollow from '../components/EyeFollow/EyeFollow';
import NeonLine from '../components/NeonLine/NeonLine';
import RoadRail from '../components/RoadRail/RoadRail';
import MouseScroll from '../components/MouseScroll/MouseScroll';
import SquareLoader from '../components/SquareLoader/SquareLoader';
import PhonePulse from '../components/PhonePulse/PhonePulse';
import HeartTrans from '../components/HeartTrans/HeartTrans';

function Layout() {
  return (
    <Container>
      <NeonBtn></NeonBtn>
      <CircleWave></CircleWave>
      <Waterwheel></Waterwheel>
      <EyeFollow></EyeFollow>
      <NeonLine></NeonLine>
      <RoadRail></RoadRail>
      <MouseScroll></MouseScroll>
      <SquareLoader></SquareLoader>
      <PhonePulse></PhonePulse>
      <HeartTrans></HeartTrans>
    </Container>
  );
}

export default Layout;
