import {Link} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {withTheme} from 'styled-components';
import Background from './Background';
import Btn from './Btn';

//const [number, onChangeNumber] = React.useState('');

const Login = props => {
  return (
    <Background>
      <View style={{marginVertical: 50, marginHorizontal: 50}}>
        <Text style={{color: 'black', fontSize: 36, marginBottom: 50}}>
          Welcome Back
        </Text>
      </View>
      <View style={{marginVertical: 50, marginHorizontal: 50}}>
        <Text style={{color: 'black', fontSize: 20, marginHorizontal: 10}}>
          Log In
        </Text>

        <TextInput
          style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
          placeholder="Enter E-mail"
        />
        <TextInput
          secureTextEntry={true}
          style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
          placeholder="Enter Password"
        />

        <Btn
          bgColor="#023020"
          textColor="white"
          btnLabel="Continue"
          Press={() => props.navigation.navigate('HomePage')}
        />

        <TouchableOpacity>
          <Text
            style={{color: 'purple', marginHorizontal: 35}}
            onPress={() => props.navigation.navigate('Signup')}>
            Don't have an account? Sign Up.
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default Login;
