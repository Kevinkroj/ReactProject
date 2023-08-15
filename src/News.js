import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {withTheme} from 'styled-components';
import Background from './Background';
import Btn from './Btn';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-media-console';
import {Viewport} from '@skele/components';

import {FlashList} from '@shopify/flash-list';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import {white} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import Entypo from 'react-native-vector-icons/Entypo';

const News = props => {
  //========================= Video controls =========================================

  const [isPaused, setIsPaused] = useState(true);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const timeRef = useRef(null);

  const togglePlayPause = () => {
    setIsPaused(!isPaused);
    setShowControls(true);
  };

  const onLoad = data => {
    setDuration(data.duration);
  };

  const Placeholder = () => (
    <View
      style={{
        width: Dimensions.get('window').width - 5,
        height: Dimensions.get('window').height - 5,
        backgroundColor: 'black',
      }}
    />
  );
  const ViewportAwareVideo = Viewport.Aware(
    Viewport.WithPlaceholder(Video, Placeholder),
  );

  //==================================================================================

  const DATA = [
    {
      id: '1',
      title: 'TIBO News',
      sources:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',

      foto: 'https://play-lh.googleusercontent.com/h5s_yc9lQ1Hwj_H5O8hUicBM4xJLo1SSNlWcJGZb5ExQZwtGB_g9B3jnxM5fVgk-uSA',
    },
    {
      id: '2',
      title: 'User 2',
      sources:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      foto: 'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
    },
    {
      id: '3',
      title: 'User 3',
      sources:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      foto: 'https://e7.pngegg.com/pngimages/961/421/png-clipart-mtv-logo-nickmusic-television-others-miscellaneous-text.png',
    },
    {
      id: '4',
      title: 'User 4',
      sources:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      foto: 'https://yt3.googleusercontent.com/ytc/AOPolaRjQppPJTdaqJgdZNtYYZNWHnayq9QWf1m0IQITww=s900-c-k-c0x00ffffff-no-rj',
    },
    {
      id: '5',
      title: 'User 5',
      sources:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      foto: 'https://play-lh.googleusercontent.com/h5s_yc9lQ1Hwj_H5O8hUicBM4xJLo1SSNlWcJGZb5ExQZwtGB_g9B3jnxM5fVgk-uSA',
    },
  ];

  const {width, height} = Dimensions.get('window');

  const PRE_TRIGGER_RATIO = -0.4;

  const Item = ({source, title, foto}) => (
    // <Pressable
    //   onPress={() => {
    //     console.log('pressed');
    //     setShowControls(!showControls);
    //   }}>
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row', bottom: 55}}>
          <Image
            style={{
              // flex: 1,
              height: 70,
              width: 70,
              borderRadius: 100,
              position: 'absolute',
              bottom: 30,
              left: 1,
              marginBottom: 50,
            }}
            source={{uri: foto}}
          />
          <Text
            style={{
              flex: 1,
              color: 'white',
              fontSize: 15,
              position: 'absolute',
              bottom: 90,
              left: 85,
            }}>
            Now Playing : Lajmet e Pasdites
          </Text>

          <Text
            style={{
              flex: 1,
              color: 'white',
              fontSize: 30,
              fontWeight: '200',
              position: 'absolute',
              bottom: 110,
              left: 75,
            }}>
            {' '}
            {title}
          </Text>
        </View>

        {/* <Text
            style={{
              color: 'black',
              fontSize: 20,
              position: 'absolute',
              bottom: 20,
              right: 1,
              marginBottom: 50,
              borderWidth: 1,
              borderColor: 'tomato',
              marginHorizontal: 5,
              borderRadius: 3,
              paddingHorizontal: 5,
              backgroundColor: 'tomato',
              fontWeight: '600',
            }}>
            Subscribe
          </Text> */}
      </View>

      <ViewportAwareVideo
        source={{uri: source}}
        placeholder={Placeholder}
        // retainOnceInViewport={false} // default is false
        // repeat={true}
        paused={false}
        controls={true}
        resizeMode="contain"
        style={styles.mediaPlayer}></ViewportAwareVideo>
    </View>
    // </Pressable>
  );

  return (
    <View>
      {/* <View style={{flex: 1, backgroundColor: 'black'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: '200',
          }}>
          Shorts
        </Text>
      </View> */}
      <Viewport.Tracker>
        <FlatList
          data={DATA}
          snapToAlignment="start"
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height}
          renderItem={({item}) => (
            <Item title={item.title} source={item.sources} foto={item.foto} />
          )}
          keyExtractor={item => item.id}
        />
      </Viewport.Tracker>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderColor: '#000',
    borderWidth: 2,
  },

  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    position: 'absolute',
    bottom: 0,
    left: 1,
    marginBottom: 50,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'black',
    borderColor: '#000',
    borderWidth: 2,
  },
  mediaPlayer: {
    //flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 50,
    right: 0,
  },
  playButton: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 30,
  },
  playButtonText: {
    color: 'white',
    fontSize: 18,
  },
  pauseButton: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 30,
  },
  pauseButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default News;
