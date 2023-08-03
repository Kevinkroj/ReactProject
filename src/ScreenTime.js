import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Alert, TouchableOpacity} from 'react-native';
import {Button, Menu, Provider} from 'react-native-paper';
import RadioButtonRN from 'radio-buttons-react-native';
//import CountDown from 'react-native-countdown-component';
import {useAppState} from '@react-native-community/hooks';

const ScreenTime = props => {
  const [selectedTime, setSelectedTime] = useState(0); // Default to 30 minutes
  const [showTimer, setShowTimer] = useState(false);

  const [handleThis, setHandleThis] = useState(false);

  const handleError = () => {
    setHandleThis(false);
  };

  const handleSetTimer = () => {
    setShowTimer(true);
  };

  ShowAlertWithDelay = () => {
    Alert.alert('Your Time starts now');
    setTimeout(function () {
      Alert.alert('Your Time is Up!');
    }, selectedTime);
  };

  const data = [
    {
      id: 1,
      label: '30 Minutes',
      time: 10000,
    },
    {
      id: 2,
      label: '60 Minutes',
      time: 60 * 1000 * 60,
    },
    {
      id: 3,
      label: '90 Minutes',
      time: 90,
    },
    {
      id: 4,
      label: '120 Minutes',
      time: 120,
    },
    {
      id: 5,
      label: '150 Minutes',
      time: 150,
    },
    {
      id: 6,
      label: '180 Minutes',
      time: 180,
    },
  ];

  return (
    <View>
      <View style={styles.vju}>
        <Text style={styles.teksti}>Screen Time</Text>
      </View>

      <View style={styles.vju}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            alignContent: 'center',
            color: 'black',
          }}>
          Select Your Screen Time.
        </Text>
      </View>

      <View style={{paddingHorizontal: 30}}>
        <RadioButtonRN data={data} selectedBtn={e => setSelectedTime(e.time)} />
        <View>
          <TouchableOpacity
            onPress={ShowAlertWithDelay}
            style={{
              backgroundColor: 'lightblue',
              borderRadius: 5,
              alignItems: 'center',
              paddingHorizontal: 30,
              paddingVertical: 5,
              marginVertical: 10,
            }}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Set Timer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teksti: {
    fontSize: 26,
    fontWeight: 'bold',
    alignContent: 'center',
    color: 'black',
  },
  vju: {
    alignSelf: 'center',
    marginVertical: 30,
  },
  container: {
    height: 50,
    paddingHorizontal: 30,
  },
});

export default ScreenTime;
