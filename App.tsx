import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import CalculadoraScreen from './src/screens/CalculadoraScreen';
import {stylesMaster} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={stylesMaster.fondo}>
      <StatusBar backgroundColor="#eeeeee" barStyle="dark-content" />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;
