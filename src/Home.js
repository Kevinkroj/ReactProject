import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import {withTheme} from 'styled-components';
import Background from './Background';
import Btn from './Btn';

const Home = props => {
  return (
    <Background>
      <View
        style={{
          alignSelf: 'center',
          marginTop: 250,
          alignContent: 'center',
          alignItems: 'center',
          marginHorizontal: 80,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            marginBottom: 10,
            fontWeight: '200',
          }}>
          Welcome
        </Text>

        <Btn
          bgColor="white"
          textColor="black"
          btnLabel="Log In"
          Press={() => props.navigation.navigate('Login')}
        />
        <Btn
          bgColor="black"
          textColor="white"
          btnLabel="Sign Up"
          Press={() => props.navigation.navigate('Signup')}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.3,
    backgroundColor: 'black',
    width: 300,
    height: 300,
    borderRadius: 20,
  },
});

export default Home;
