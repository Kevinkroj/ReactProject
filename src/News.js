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
//imports

const News = props => {
  //========================= Video controls =========================================

  const Placeholder = () => (
    <View style={{width: 50, height: 50, backgroundColor: 'black'}} />
  );
  const ViewportAwareVideo = Viewport.Aware(
    Viewport.WithPlaceholder(Video, Placeholder),
  );

  //==================================================================================

  const DATA = [
    {
      id: '1',
      title: 'kevinkroj',
      sources:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    },
    {
      id: '2',
      title: 'User 2',
      sources:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    },
    {
      id: '3',
      title: 'User 3',
      sources:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    },
    {
      id: '4',
      title: 'User 4',
      sources:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    },
    {
      id: '5',
      title: 'User 5',
      sources:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    },
  ];

  const {width, height} = Dimensions.get('window');

  const PRE_TRIGGER_RATIO = -0.4;

  const Item = ({source, title}) => (
    <View style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.container}>
          <Image
            style={{
              // flex: 1,
              height: 50,
              width: 50,
              borderRadius: 100,
              position: 'absolute',
              bottom: 30,
              left: 1,
              marginBottom: 50,
            }}
            source={require('./assets/k2.jpeg')}
          />
          <Text style={styles.title}>@{title}</Text>

          <Text
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
          </Text>
        </TouchableOpacity>
      </View>

      <ViewportAwareVideo
        source={{uri: source}}
        placeholder={Placeholder}
        retainOnceInViewport={false} // default is false
        repeat={true}
        paused={false}
        resizeMode="contain"
        style={styles.mediaPlayer}></ViewportAwareVideo>
    </View>
  );

  return (
    <View>
      <View style={{backgroundColor: 'black'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: '200',
          }}>
          Shorts
        </Text>
      </View>
      <Viewport.Tracker>
        <FlatList
          data={DATA}
          snapToAlignment="start"
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height}
          renderItem={({item}) => (
            <Item title={item.title} source={item.sources} />
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
    //    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default News;
