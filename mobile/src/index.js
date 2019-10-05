import React from 'react';
import Routes from "./routes"
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([ 'Unrecognized WebSocket' ])

const Index = () => {
  return (
        <Routes />
  );
};

export default Index;
