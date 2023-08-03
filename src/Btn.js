import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {withTheme} from 'styled-components';
import Background from './Background';

export default function Btn({bgColor, btnLabel, textColor, Press}) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,

        alignItems: 'center',
        width: 220,
        paddingVertical: 5,
        marginVertical: 10,
        alignContent: 'center',
        alignSelf: 'center',
      }}>
      <Text style={{color: textColor, fontSize: 18, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
