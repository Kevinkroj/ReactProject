// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';
import Login from './src/Login';
import HomePage from './src/HomePage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabs from './src/Tabs';

import News from './src/News';
import Account from './src/Account';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={({route}) => ({
            tabBarStyle: (route => {
              const routName = getFocusedRouteNameFromRoute(route) ?? '';
              console.log(routName);

              if (routName === 'Login' || routName === 'Signup') {
                return {display: 'none'};
              }
              return;
            })(route),
          })}
        />

        {/* <Tab.Screen name="HomePage" component={HomePage} /> */}
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
