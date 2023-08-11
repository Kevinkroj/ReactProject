import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Item} from 'react-native-paper/lib/typescript/src/components/Drawer/Drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

const DescriptionPage = props => {
  const pershkrimi = props.route.params.desc;
  const tit = props.route.params.titull;
  const foto = props.route.params.foto;
  const shkurtt = props.route.params.shkurt;

  //===========================================================
  const [seconddata, setsecondData] = useState([
    {
      id: '1',
      title: 'Scary Movie',
      short: 'beautiful moviee',
      now: 'Dom and his family and friends are hunted by the vengeful son of drug kingpin Hernan Reyes, Dante (Jason Momoa). Will Dom be able to save his family and friends once again? Or will Dante be able to come out victorious at the end? Who else from Doms past will return from the dead?',
      sources:
        'https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    },
    {
      id: '2',
      title: 'Fast X',
      short: 'beautiful moviee',
      now: 'Dom and his family and friends are hunted by the vengeful son of drug kingpin Hernan Reyes, Dante (Jason Momoa). Will Dom be able to save his family and friends once again? Or will Dante be able to come out victorious at the end? Who else from Doms past will return from the dead?',
      sources: 'https://www.justwatch.com/images/poster/305436330/s332/fast-x',
    },
    {
      id: '3',
      title: 'Extraction',
      short: 'beautiful moviee',
      now: 'Dom and his family and friends are hunted by the vengeful son of drug kingpin Hernan Reyes, Dante (Jason Momoa). Will Dom be able to save his family and friends once again? Or will Dante be able to come out victorious at the end? Who else from Doms past will return from the dead?',
      sources:
        'https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/06/extraction-2-01.jpg',
    },
    {
      id: '4',
      title: 'New Movie X',
      short: 'beautiful moviee',
      now: 'Dom and his family and friends are hunted by the vengeful son of drug kingpin Hernan Reyes, Dante (Jason Momoa). Will Dom be able to save his family and friends once again? Or will Dante be able to come out victorious at the end? Who else from Doms past will return from the dead?',
      sources:
        'https://pbs.twimg.com/media/FCXP1GqVIAEHz-_?format=jpg&name=small',
    },
  ]);

  const SecondItem = ({source, title, now, short}) => (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.secondcontainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('DescriptionPage', {
              desc: now,
              foto: source,
              titull: title,
              shkurt: short,
            })
          }>
          <View>
            <Image
              style={{
                height: 250,
                width: 200,
                borderRadius: 3,
              }}
              source={{uri: source}}
            />
          </View>
          <View>
            <Text style={styles.tekstii}> {title} </Text>
            <Text style={{color: 'white'}}> {short} </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
  //===========================================================

  //===================== Get Data ==============================
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const fetchMyList = async () => {
      try {
        const storedList = await AsyncStorage.getItem('@myList');
        if (storedList) {
          setMyList(JSON.parse(storedList));
        }
      } catch (error) {
        console.error('Error fetching My List:', error);
      }
    };

    fetchMyList();
  }, []);

  const addToMyList = async () => {
    try {
      const newItem = props.route.params.foto;

      //   const newItem = {
      //     title: props.route.params.foto,
      //     // Add other properties of the object here
      //   };
      console.log('new item', newItem, myList);
      const existingItem = myList.find(item => item === newItem);
      if (!existingItem) {
        const updatedList = [...myList, newItem];
        await AsyncStorage.setItem('@myList', JSON.stringify(updatedList));

        console.log('Item added to My List', updatedList);
      } else {
        console.log('Item already exists in My List');
        Alert.alert('Movie already exists in My List');
      }
    } catch (error) {
      console.error('Error adding item to My List:', error);
    }
  };

  const handleRefresh = async () => {
    console.log('Refreshing data...');
    try {
      const storedList = await AsyncStorage.getItem('@myList');
      if (storedList) {
        setMyList(JSON.parse(storedList));
        console.log('Refreshed data:', JSON.parse(storedList));
      }
    } catch (error) {
      console.error('Error refreshing My List:', error);
    }
  };

  const clearMyList = async () => {
    try {
      await AsyncStorage.removeItem('@myList');
      console.log('My List data cleared');

      // You can also update your state to reflect the cleared list
      setMyList([]);

      // Trigger a refresh of your list immediately after clearing
      handleRefresh();
    } catch (error) {
      console.error('Error clearing My List:', error);
    }
  };

  //=============================================================

  return (
    <ScrollView
      style={{
        height: Dimensions.get('window').height,
        backgroundColor: 'black',
      }}>
      <View style={{flex: 1}}>
        <Image
          style={{
            height: 450,
            width: Dimensions.get('window').width,
            resizeMode: 'stretch',
          }}
          source={{uri: foto}}
        />

        <AntDesign
          name="left"
          size={30}
          color="white"
          shadowOpacity={0.2}
          onPress={() => props.navigation.navigate('HomePage') && handleRefresh}
          style={{position: 'absolute', top: 20, left: 10}}
        />
        <TouchableOpacity onPress={clearMyList}>
          <AntDesign
            name="delete"
            size={30}
            // onPress={handleRefresh}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View style={{alignContent: 'flex-start'}}>
        <Text style={{color: 'tomato', fontSize: 28, fontWeight: '200'}}>
          {' '}
          {tit}
        </Text>

        <Text style={{color: 'white', fontSize: 18, fontWeight: '400'}}>
          {' '}
          Movie Description:
        </Text>
        <Text style={{color: 'white', fontSize: 14, fontWeight: '200'}}>
          {' '}
          {pershkrimi}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'space-between',
          alignItems: 'center',
          marginVertical: 15,
        }}>
        <View style={{alignContent: 'center', marginHorizontal: 45}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={addToMyList}>
              <AntDesign name="plus" size={30} color="white" />
              <Text style={{color: 'white', fontSize: 15, fontWeight: '200'}}>
                My List
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignContent: 'center',
            marginHorizontal: 45,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AntDesign
              name="playcircleo"
              size={30}
              onPress={() => props.navigation.navigate('VideoMovies')}
              color="white"
            />

            <Text style={{color: 'white', fontSize: 15, fontWeight: '200'}}>
              Play
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            marginHorizontal: 45,
          }}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Trailer', {
                Name: tit,
                second: pershkrimi,
              })
            }>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AntDesign name="videocamera" size={30} color="white" />
              <Text style={{color: 'white', fontSize: 15, fontWeight: '200'}}>
                Trailer
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white',
            marginHorizontal: 15,
            marginTop: 5,
            marginRight: 140,
            marginBottom: 10,
          }}>
          Spotlight
        </Text>
      </View>
      <View>
        <FlatList
          horizontal={true}
          data={seconddata}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <SecondItem
              title={item.title}
              source={item.sources}
              now={item.now}
              short={item.short}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  secondcontainer: {
    flexDirection: 'column',
    backgroundColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    fontSize: 16,
    color: '#333',
  },
  teksti: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  tekstii: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DescriptionPage;
