import {Link} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {withTheme} from 'styled-components';
import Background from './Background';
import Btn from './Btn';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const enter = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      // Retrieve stored password for the provided username
      const storedPassword = await AsyncStorage.getItem(email);

      if (storedPassword === password) {
        // Successful login
        Alert.alert('Success', 'Login successful.');
        // Navigate to the main app screen
        props.navigation.navigate('HomePage');
      } else {
        Alert.alert('Error', 'Invalid email or password.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'An error occurred while logging in.');
    }
  };

  return (
    <Background>
      <View style={{flex: 1, marginTop: 150}}>
        <View style={{marginVertical: 25, marginHorizontal: 50}}>
          <Text style={{color: 'white', fontSize: 25, fontWeight: '200'}}>
            Welcome Back
          </Text>
        </View>
        <View style={{marginHorizontal: 50}}>
          <View style={styles.MainContainer}>
            <View style={styles.childView}>
              <Text
                style={{color: 'black', fontSize: 20, marginHorizontal: 10}}>
                Log In
              </Text>

              <TextInput
                style={{
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  color: 'black',
                }}
                placeholder="Enter E-mail"
                placeholderTextColor="black"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                secureTextEntry={true}
                style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
                placeholder="Enter Password"
                placeholderTextColor="black"
                value={password}
                onChangeText={setPassword}
              />

              <Btn
                bgColor="black"
                textColor="white"
                btnLabel="Continue"
                Press={enter}
              />

              <TouchableOpacity>
                <Text
                  style={{color: 'black', marginHorizontal: 35}}
                  onPress={() => props.navigation.navigate('Signup')}>
                  Don't have an account? Sign Up.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 5,
    opacity: 0.75,
  },

  childView: {
    justifyContent: 'center',
    backgroundColor: '#E5E4E2',

    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: 'black',
    padding: 25,
    borderRadius: 5,
  },
});

export default Login;
