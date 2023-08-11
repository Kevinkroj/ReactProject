import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {withTheme} from 'styled-components';
import Background from './Background';
import Btn from './Btn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AccountInfo = props => {
  //============================== Fetching Data ===============================
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const fetchMyList = async () => {
      try {
        const storedList = await AsyncStorage.getItem('@myList');
        if (storedList) {
          setMyList(JSON.parse(storedList));
          console.log(myList);
        }
      } catch (error) {
        console.error('Error fetching My List:', error);
      }
    };

    fetchMyList();
  }, []);

  const handleRefresh = async () => {
    try {
      const storedList = await AsyncStorage.getItem('@myList');
      if (storedList) {
        setMyList(JSON.parse(storedList));
      }
    } catch (error) {
      console.error('Error fetching My List:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      handleRefresh(); // Fetch the data whenever the screen comes into focus
    }, []),
  );

  const checkIfMyListIsEmpty = async () => {
    try {
      const storedData = await AsyncStorage.getItem('@myList');

      if (storedData !== null) {
        const parsedData = JSON.parse(storedData);

        if (parsedData.length > 0) {
          console.log('My List is not empty');
        } else {
          console.log('My List is empty');
        }
      } else {
        console.log('My List does not exist');
      }
    } catch (error) {
      console.error('Error fetching My List:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      checkIfMyListIsEmpty(); // Fetch the data whenever the screen comes into focus
    }, []),
  );

  const funksion = async () => {
    try {
      const storedData = await AsyncStorage.getItem('@myList');
      console.log('Stored Data1:::', storedData);
      return storedData;
    } catch (error) {
      console.error('Error:', error);
      return null; // Return null or an appropriate value to indicate an error
    }
  };

  //=====================================================================

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '200',
          color: 'white',
          marginHorizontal: 15,
          marginTop: 5,
          marginRight: 140,
          marginBottom: 10,
        }}>
        My List
      </Text>

      <ScrollView horizontal>
        {myList.length > 0 ? (
          myList.map((item, index) => (
            <Image
              style={{
                height: 200,
                width: 140,
                marginTop: 15,
                marginLeft: 15,
                borderRadius: 3,
              }}
              key={index}
              source={{uri: item}}
            />
          ))
        ) : (
          <View
            style={{
              flex: 1,
              height: 200,
              width: 150,
              backgroundColor: '#232429',
              marginHorizontal: 20,
              borderRadius: 5,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                alignSelf: 'center',
                fontWeight: '200',
                textAlign: 'center',
                marginHorizontal: 5,
                marginTop: 10,
              }}>
              No movies added to your list
            </Text>
            <AntDesign
              name="plus"
              size={50}
              color="white"
              style={{alignSelf: 'center', marginTop: 15}}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    height: 50,
    width: Dimensions.get('window').width,
    alignContent: 'space-between',
  },
});

export default AccountInfo;
