import {useEffect, useState, useRef} from 'react';
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
import {withTheme} from 'styled-components';
import Background from './Background';
import Btn from './Btn';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './Tabs';
import {Viewport} from '@skele/components';
import {Searchbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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

  //===========================================================

  //===========================================================

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

  return (
    <View style={{backgroundColor: '#000000'}}>
      <ScrollView>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '200',
                color: 'white',
                marginLeft: 12,
                marginTop: 30,
                // marginRight: 140,
                marginBottom: 0,
              }}>
              Hi,
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '200',
                color: 'tomato',
                marginHorizontal: 5,
                marginTop: 30,
                // marginRight: 140,
                marginBottom: 0,
              }}>
              Kevin
            </Text>
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
                  size={32}
                  color="tomato"
                  style={{flex: 1, position: 'absolute', left: 350}}
                />
              </View>
            </TouchableOpacity>
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
        </View>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#F2F3F5',
              marginHorizontal: 15,
              marginTop: 10,
            }}>
            Kanalet
          </Text>

          <TextInput
            style={styles.container}
            onChangeText={text => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="grey"
            placeholder="Search Here"
            placeholderTextColor="grey"
          />
        </View>

        <View>
          <FlatList
            data={filteredDataSource}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Item title={item.title} source={item.sources} now={item.now} />
            )}
          />
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
            All Categories
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

export default HomePage;
