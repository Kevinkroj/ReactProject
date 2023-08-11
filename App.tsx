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
import Icon from 'react-native-vector-icons/FontAwesome';

import News from './src/News';
import Account from './src/Account';
import AccountInfo from './src/AccountInfo';
import ScreenTime from './src/ScreenTime';
import DescriptionPage from './src/DescriptionPage';
import VideoMovies from './src/VideoMovies';
import Trailer from './src/Trailer';
import RotatingCarousel from './src/RotatingCarousel';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        style: {borderTopWidth: 0},
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'black',

        tabBarIcon: ({color, size}) => {
          let iconName;

          // Set the appropriate icon name based on the route name
          if (route.name === 'HomePage') {
            iconName = 'home';
          } else if (route.name === 'News') {
            iconName = 'newspaper-o';
          } else if (route.name === 'Account') {
            iconName = 'user';
          }

          // Return the Icon component with the appropriate icon name
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={({route}) => ({
          tabBarStyle: (route => {
            const routName = getFocusedRouteNameFromRoute(route) ?? '';
            console.log(routName);

            if (
              routName === 'Login' ||
              routName === 'AccountInfo' ||
              routName === 'Signup' ||
              routName === 'Home'
            ) {
              return {display: 'none'};
            }
            return;
          })(route),
        })}
      />

      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={HomeStack} />

        <Stack.Screen name="AccountInfo" component={AccountInfo} />
        <Stack.Screen name="ScreenTime" component={ScreenTime} />
        <Stack.Screen name="DescriptionPage" component={DescriptionPage} />
        <Stack.Screen name="VideoMovies" component={VideoMovies} />
        <Stack.Screen name="Trailer" component={Trailer} />
        <Stack.Screen name="RotatingCarousel" component={RotatingCarousel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//================================================
// const HomeStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//       initialRouteName="Home">
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Signup" component={Signup} />
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="HomePage" component={HomePage} />

//       <Stack.Screen name="AccountInfo" component={AccountInfo} />
//       <Stack.Screen name="ScreenTime" component={ScreenTime} />
//       <Stack.Screen name="DescriptionPage" component={DescriptionPage} />
//     </Stack.Navigator>
//   );
// };

// function App() {
//   return (
//     <NavigationContainer independent={true}>
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           headerShown: false,
//           tabBarHideOnKeyboard: true,
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//           tabBarActiveBackgroundColor: 'black',
//           tabBarInactiveBackgroundColor: 'black',

//           tabBarIcon: ({color, size}) => {
//             let iconName;

//             // Set the appropriate icon name based on the route name
//             if (route.name === 'HomePage') {
//               iconName = 'home';
//             } else if (route.name === 'News') {
//               iconName = 'newspaper-o';
//             } else if (route.name === 'Account') {
//               iconName = 'user';
//             }

//             // Return the Icon component with the appropriate icon name
//             return <Icon name={iconName} size={size} color={color} />;
//           },
//         })}>
//         <Tab.Screen
//           name="HomePage"
//           component={HomePage}
//           options={({route}) => ({
//             tabBarStyle: (route => {
//               const routName = getFocusedRouteNameFromRoute(route) ?? '';
//               console.log(routName);

//               if (
//                 routName === 'Login' ||
//                 routName === 'AccountInfo' ||
//                 routName === 'Signup' ||
//                 routName === 'Home'
//               ) {
//                 return {display: 'none'};
//               }
//               return;
//             })(route),
//           })}
//         />

//         <Tab.Screen name="News" component={News} />
//         <Tab.Screen name="Account" component={Account} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
//=========================================================================================

export default App;
