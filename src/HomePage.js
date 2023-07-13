import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {withTheme} from 'styled-components';
import Background from './Background';
import Btn from './Btn';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './Tabs';

const HomePage = props => {
  return (
    <Background>
      <View>
        <Text style={{color: 'black', fontSize: 36, marginVertical: 100}}>
          Welcome To my App
        </Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default HomePage;
