import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {stylesMaster} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  action: ( actionBoton: string ) => void;
}

const BotonCalc = ({texto, color = '#2D2D2D', ancho = false, action}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => action(texto)}
    >
      <View
        style={{
          ...stylesMaster.botonContainer,
          backgroundColor: color,
          width: (ancho) ? 180 : 80
        }}>
        <Text
          style={{
            ...stylesMaster.botonTexto,
            color: color === '9B9B9B' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonCalc;
