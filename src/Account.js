import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {withTheme} from 'styled-components';
import Background from './Background';
import Btn from './Btn';

const Account = props => {
  return (
    <Background>
      <View style={{marginHorizontal: 40, marginVertical: 100}}>
        <Text style={{color: 'black', fontSize: 36, marginBottom: 50}}>
          Welcome To Your Account
        </Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default Account;
