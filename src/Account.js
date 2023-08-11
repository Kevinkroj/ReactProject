import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {withTheme} from 'styled-components';
import Background from './Background';
import Btn from './Btn';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Account = props => {
  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <View style={{marginHorizontal: 40, marginVertical: 50}}>
        <Text
          style={{
            color: 'white',
            fontSize: 21,
            marginHorizontal: 30,
            fontWeight: 'bold',
            //marginBottom: 10,
          }}>
          Welcome To Your Account
        </Text>
      </View>
      {/* <TouchableOpacity onPress={() => props.navigation.goBack()}> */}
      <AntDesign
        name="left"
        onPress={() => props.navigation.goBack()}
        size={30}
        color="white"
        style={{position: 'absolute', top: 50, left: 10}}
      />
      {/* </TouchableOpacity> */}

      <View style={styles.container}>
        <Image
          style={{
            height: 80,
            width: 80,
            borderRadius: 100,
          }}
          source={require('./assets/k2.jpeg')}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 13,
            marginHorizontal: 30,
            marginBottom: 3,
            fontWeight: 'bold',
          }}>
          Name Surname
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 13,
            marginHorizontal: 30,
            marginBottom: 3,
          }}>
          NameSurname@gmail.com
        </Text>
      </View>
      <Text
        style={{
          color: 'white',
          fontSize: 21,
          marginHorizontal: 30,
          marginTop: 10,
          fontWeight: 'bold',
        }}>
        Account
      </Text>
      <View style={styles.kutia}>
        <View style={{marginHorizontal: 25}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AccountInfo')}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons name="account" size={30} color="white" />
              <Text style={styles.texts}>Account</Text>
            </View>
          </TouchableOpacity>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="security" size={30} color="white" />
            <Text style={styles.texts}>Security</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name="wallet" size={30} color="white" />
            <Text style={styles.texts}>Balance</Text>
          </View>
        </View>
      </View>

      <Text
        style={{
          color: 'white',
          fontSize: 21,
          marginHorizontal: 30,
          //marginBottom: 10,
          fontWeight: 'bold',
        }}>
        Content & Display
      </Text>
      <View style={styles.kutia}>
        <View style={{marginHorizontal: 25}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name="notification" size={30} color="white" />
            <Text style={styles.texts}>Notifications</Text>
          </View>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('RotatingCarousel')}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="advertisements"
                size={30}
                color="white"
              />
              <Text style={styles.texts}>Ads</Text>
            </View>
          </TouchableOpacity>

          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="language" size={30} color="white" />
            <Text style={styles.texts}> Language</Text>
          </View>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('ScreenTime')}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="timer-sand"
                size={30}
                color="white"
              />
              <Text style={styles.texts}>Screen time</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Text
        style={{
          color: 'white',
          fontSize: 21,
          marginHorizontal: 30,
          //marginBottom: 10,
          fontWeight: 'bold',
        }}>
        Support & About
      </Text>
      <View style={styles.kutia}>
        <View style={{marginHorizontal: 25}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="flag" size={30} color="white" />
            <Text style={styles.texts}>Report a problem</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="support" size={30} color="white" />
            <Text style={styles.texts}>Support</Text>
          </View>

          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="information-outline"
              size={30}
              color="white"
            />
            <Text style={styles.texts}>Terms and Policies</Text>
          </View>
        </View>
      </View>

      <Text
        style={{
          color: 'white',
          fontSize: 21,
          marginHorizontal: 30,
          //marginBottom: 10,
          fontWeight: 'bold',
        }}>
        Log Out
      </Text>
      <View style={styles.kutia}>
        <View style={{marginHorizontal: 25}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons name="logout" size={30} color="white" />
            <Text style={styles.texts}>Log Out</Text>
          </View>
        </View>
      </View>
      <Text style={{color: 'white', textAlign: 'center', marginTop: 20}}>
        v 1.0.0
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  texts: {
    color: 'white',
    fontSize: 17,
    borderBottomColor: 'black',
    marginHorizontal: 10,
    marginVertical: 7,
    //fontWeight: 'bold',
  },
  kutia: {
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#232429',
  },
});

export default Account;
