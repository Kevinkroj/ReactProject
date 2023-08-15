import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AccountInfo from './AccountInfo';
import {useFocusEffect} from '@react-navigation/native';
import RotatingCarousel from './RotatingCarousel';

const HomePage = props => {
  const onChangeSearch = query => setSearchQuery(query);

  const data = [
    {
      id: '1',
      title: 'Tibo News',
      now: 'News',
      sources:
        'https://play-lh.googleusercontent.com/h5s_yc9lQ1Hwj_H5O8hUicBM4xJLo1SSNlWcJGZb5ExQZwtGB_g9B3jnxM5fVgk-uSA',
    },

    {
      id: '3',
      title: 'Netflix',
      now: 'Movies',
      sources:
        'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
    },

    {
      id: '6',
      title: 'Netflix Drama',
      now: 'Drama',
      sources:
        'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
    },
    {
      id: '8',
      title: 'MTv',
      now: 'News',
      sources:
        'https://e7.pngegg.com/pngimages/961/421/png-clipart-mtv-logo-nickmusic-television-others-miscellaneous-text.png',
    },

    {
      id: '9',
      title: 'News24',
      now: 'Movies',
      sources:
        'https://yt3.googleusercontent.com/ytc/AOPolaRjQppPJTdaqJgdZNtYYZNWHnayq9QWf1m0IQITww=s900-c-k-c0x00ffffff-no-rj',
    },

    {
      id: '10',
      title: 'Netflix Drama',
      now: 'Drama',
      sources:
        'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
    },
  ];

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

  const [thirdData, setThirdData] = useState([
    {
      id: '1',
      title: 'Mission Imposible',
      short: 'beautiful moviee',
      now: 'Dom and his family and friends are hunted by the vengeful son of drug kingpin Hernan Reyes, Dante (Jason Momoa). Will Dom be able to save his family and friends once again? Or will Dante be able to come out victorious at the end? Who else from Doms past will return from the dead?',
      sources:
        'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00329481-bcufavugyg-portrait.jpg',
    },
    {
      id: '2',
      title: 'Pixels',
      short: 'beautiful moviee',
      now: 'Dom and his family and friends are hunted by the vengeful son of drug kingpin Hernan Reyes, Dante (Jason Momoa). Will Dom be able to save his family and friends once again? Or will Dante be able to come out victorious at the end? Who else from Doms past will return from the dead?',
      sources:
        'https://m.media-amazon.com/images/M/MV5BMTIzNDYzMzgtZWMzNS00ODc2LTg2ZmMtOTE2MWZkNzIxMmQ0XkEyXkFqcGdeQXVyNjQ3MDg0MTY@._V1_.jpg',
    },
    {
      id: '3',
      title: 'Spider-Man',
      short: 'beautiful moviee',
      now: 'Dom and his family and friends are hunted by the vengeful son of drug kingpin Hernan Reyes, Dante (Jason Momoa). Will Dom be able to save his family and friends once again? Or will Dante be able to come out victorious at the end? Who else from Doms past will return from the dead?',
      sources:
        'https://cps-static.rovicorp.com/2/Open/Sony%20Pictures%20Television/Program/48781848/_derived_jpg_q90_310x470_m0/Spider_Man_Across_the_Spider_Verse_PA_2x3_27_1687956706548_1.jpg',
    },
    {
      id: '4',
      title: 'Mario',
      short: 'beautiful moviee',
      now: 'Dom and his family and friends are hunted by the vengeful son of drug kingpin Hernan Reyes, Dante (Jason Momoa). Will Dom be able to save his family and friends once again? Or will Dante be able to come out victorious at the end? Who else from Doms past will return from the dead?',
      sources:
        'https://dvvy6louqcr7j.cloudfront.net/vista/HO00013484/heroPoster/The-Super-Mario-Bros-Movie.png',
    },
  ]);

  //=========================================================
  const [filteredDataSource, setFilteredDataSource] = useState(data);
  const [search, setSearch] = useState('');

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = data.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(data);
      setSearch(text);
    }
  };

  //============================================================================

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

  //=====================================================================

  //=====================================================================

  const Item = ({source, title, now}) => (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 100,
          }}
          source={{uri: source}}
        />
      </View>
      <View>
        <Text style={styles.teksti}> {title} </Text>
        <Text style={{color: 'grey'}}> {now} </Text>
      </View>
    </View>
  );

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
                height: 260,
                width: 180,
                borderRadius: 3,
              }}
              source={{uri: source}}
            />
          </View>
          <View>
            <Text style={styles.tekstii}> {title} </Text>
            {/* <Text style={{color: 'white'}}> {short} </Text> */}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{backgroundColor: '#000000'}}>
      <ScrollView>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                // flex: 1,
                height: 55,
                width: 55,
                borderRadius: 100,
                marginHorizontal: 20,
                marginTop: 15,
                top: 15,
              }}
              source={require('./assets/mtv2.png')}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SearchPage')}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  marginBottom: 10,
                }}>
                <Fontisto
                  name="search"
                  size={25}
                  color="red"
                  style={{flex: 1, position: 'absolute', left: 300}}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Account')}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  marginBottom: 10,
                }}>
                <MaterialCommunityIcons
                  name="account"
                  size={45}
                  color="red"
                  style={{flex: 1, position: 'absolute', left: 340}}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '200',
                color: 'white',
                marginLeft: 10,
                marginTop: 1,
              }}>
              Coming
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '200',
                color: 'tomato',
                marginHorizontal: 7,
                marginTop: 1,
              }}>
              Soon
            </Text>

            {/* <TextInput
            style={styles.container}
            onChangeText={text => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="grey"
            placeholder="Search Here"
            placeholderTextColor="grey"
          /> */}
          </View>

          <View>
            <RotatingCarousel />
          </View>
          <View style={{marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '200',
                  color: 'white',
                  marginHorizontal: 15,
                  marginTop: 5,
                  marginRight: 1,
                  marginBottom: 10,
                }}>
                Live
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '200',
                  color: 'tomato',
                  marginHorizontal: 1,
                  marginTop: 5,
                  marginRight: 1,
                  marginBottom: 10,
                }}>
                TV
              </Text>
            </View>
            <FlatList
              data={data}
              nestedScrollEnabled
              keyExtractor={item => item.id}
              horizontal
              renderItem={({item}) => (
                <Item title={item.title} source={item.sources} now={item.now} />
              )}
            />
          </View>

          <View>
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
              Spotlight
            </Text>
          </View>
          <View>
            <FlatList
              horizontal={true}
              data={seconddata}
              nestedScrollEnabled
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
        </View>
        <View style={styles.myListContainer}>
          <AccountInfo />
        </View>

        <View>
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
            All Categories
          </Text>
        </View>
        <View>
          <FlatList
            //horizontal={true}
            data={thirdData}
            numColumns={2}
            nestedScrollEnabled
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,

    color: 'grey',
  },
  myListContainer: {
    flex: 1,
    //flexDirection: 'row',
    marginTop: 1,
    height: 270,
    width: Dimensions.get('window').width,
    alignContent: 'space-between',
  },
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
    fontWeight: '200',
    color: 'white',
  },
});

export default HomePage;
