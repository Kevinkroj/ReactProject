import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {withTheme} from 'styled-components';
import Background from './Background';
import Btn from './Btn';

const Home = props => {
  return (
    <Background>
      <View style={{marginHorizontal: 40, marginVertical: 100}}>
        <Text style={{color: 'black', fontSize: 36, marginBottom: 50}}>
          Welcome To my App
        </Text>
        <Btn
          bgColor="white"
          textColor="#023020"
          btnLabel="Log In"
          Press={() => props.navigation.navigate('Login')}
        />
        <Btn
          bgColor="#023020"
          textColor="white"
          btnLabel="Sign In"
          Press={() => props.navigation.navigate('Signup')}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default Home;
