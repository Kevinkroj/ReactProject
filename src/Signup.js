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

const Signup = props => {
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
              />

              <TextInput
                style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
                placeholder="Enter E-mail"
                placeholderTextColor="black"
              />
              <TextInput
                secureTextEntry={true}
                style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
                placeholder="Enter Password"
                placeholderTextColor="black"
              />

              <Btn
                bgColor="black"
                textColor="white"
                btnLabel="Sign Up"
                Press={() => props.navigation.navigate('HomePage')}
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
