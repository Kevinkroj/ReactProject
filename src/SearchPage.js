import {Link} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const SearchPage = props => {
  const [search, setSearch] = useState('');

  // const data = [
  //   {
  //     id: '1',
  //     title: 'Tibo News',
  //     now: 'News',
  //     sources:
  //       'https://play-lh.googleusercontent.com/h5s_yc9lQ1Hwj_H5O8hUicBM4xJLo1SSNlWcJGZb5ExQZwtGB_g9B3jnxM5fVgk-uSA',
  //   },

  //   {
  //     id: '3',
  //     title: 'Netflix',
  //     now: 'Movies',
  //     sources:
  //       'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
  //   },

  //   {
  //     id: '6',
  //     title: 'Netflix Drama',
  //     now: 'Drama',
  //     sources:
  //       'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
  //   },
  //   {
  //     id: '8',
  //     title: 'MTv',
  //     now: 'News',
  //     sources:
  //       'https://e7.pngegg.com/pngimages/961/421/png-clipart-mtv-logo-nickmusic-television-others-miscellaneous-text.png',
  //   },

  //   {
  //     id: '9',
  //     title: 'News24',
  //     now: 'Movies',
  //     sources:
  //       'https://yt3.googleusercontent.com/ytc/AOPolaRjQppPJTdaqJgdZNtYYZNWHnayq9QWf1m0IQITww=s900-c-k-c0x00ffffff-no-rj',
  //   },

  //   {
  //     id: '10',
  //     title: 'Netflix Drama',
  //     now: 'Drama',
  //     sources:
  //       'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
  //   },
  // ];

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

  const [filteredDataSource, setFilteredDataSource] = useState(thirdData);

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = thirdData.filter(function (item) {
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
      setFilteredDataSource(thirdData);
      setSearch(text);
    }
  };

  const Item = ({source, title, now}) => (
    <View style={styles.cont}>
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
    <ScrollView style={styles.containerr}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 35,
            fontWeight: '200',
            marginHorizontal: 10,
            marginTop: 20,
          }}>
          Search
        </Text>
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 100,
            marginHorizontal: 10,
            marginTop: 15,
            position: 'absolute',
            right: 5,
            top: 10,
          }}
          source={require('./assets/mtv2.png')}
        />
      </View>
      <View>
        <Fontisto
          name="search"
          size={25}
          color="tomato"
          style={{flex: 1, position: 'absolute', left: 10, top: 17}}
        />
        <TextInput
          style={styles.container}
          onChangeText={text => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="white"
          placeholder="Search"
          placeholderTextColor="grey"
        />
      </View>
      <View style={{marginTop: 10}}>
        {/* <View style={{flexDirection: 'row'}}>
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
        </View> */}
        {/* <View style={{height: 300, marginBottom: 30}}>
          <FlatList
            data={filteredDataSource}
            nestedScrollEnabled
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Item title={item.title} source={item.sources} now={item.now} />
            )}
          />
        </View> */}

        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: '200',
              marginLeft: 20,
            }}>
            Movies
          </Text>
          <FlatList
            //horizontal={true}
            numColumns={2}
            data={filteredDataSource}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerr: {
    backgroundColor: 'black',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 45,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,

    color: 'grey',
    fontSize: 17,
    borderBottomColor: 'red',
  },
  cont: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 5,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,

    color: 'grey',
    fontSize: 17,
    borderBottomColor: 'red',
  },
  teksti: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
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
  tekstii: {
    fontSize: 20,
    fontWeight: '200',
    color: 'white',
  },
});

export default SearchPage;
