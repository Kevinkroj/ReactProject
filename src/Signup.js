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

const Signup = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const register = async () => {
    if (!username || !password || !email) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      // Check if username already exists
      const userExists = await AsyncStorage.getItem(username);
      if (userExists) {
        Alert.alert('Error', 'Username already exists.');
        return;
      }

      const emailExist = await AsyncStorage.getItem(email);
      if (emailExist) {
        Alert.alert('Error', 'email already exists.');
        return;
      }

      // Store user data in AsyncStorage
      await AsyncStorage.setItem(email, password);

      Alert.alert('Success', 'Signup successful.');
      // Navigate to the login screen or perform automatic login
      props.navigation.navigate('HomePage');
    } catch (error) {
      console.error('Error signing up:', error);
      Alert.alert('Error', 'An error occurred while signing up.');
    }
  };

  return (
    <Background>
      <View style={{flex: 1, marginTop: 140}}>
        <View style={{marginVertical: 10, marginHorizontal: 50}}>
          <Text style={{color: 'white', fontSize: 25, fontWeight: '200'}}>
            Welcome
          </Text>
        </View>
        <View style={{marginHorizontal: 50}}>
          <View style={styles.MainContainer}>
            <View style={styles.childView}>
              <Text
                style={{color: 'black', fontSize: 20, marginHorizontal: 10}}>
                Sign Up
              </Text>

              <TextInput
                style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
                placeholder="Enter Name"
                placeholderTextColor="black"
                value={username}
                onChangeText={setUsername}
              />

              <TextInput
                style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
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
                btnLabel="Sign Up"
                Press={register}
              />

              <TouchableOpacity>
                <Text
                  style={{color: 'black', marginHorizontal: 35}}
                  onPress={() => props.navigation.navigate('Login')}>
                  Already have an account? Log In.
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
    height: 350,
    borderWidth: 2,
    borderColor: 'black',
    padding: 25,
    borderRadius: 5,
  },
});

export default Signup;
