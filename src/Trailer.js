import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Orientation from 'react-native-orientation-locker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {withTheme} from 'styled-components';
import Background from './Background';
import Btn from './Btn';

const Trailer = props => {
  //   const video = require('../assets/videoo.mp4');

  const tit = props.route.params.Name;
  const per = props.route.params.second;

  const video = {
    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  };

  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isFullscreen) {
      Orientation.lockToLandscape(); // Lock screen to landscape mode
    } else {
      Orientation.lockToPortrait(); // Lock screen to portrait mode
    }

    return () => {
      Orientation.lockToPortrait(); // Unlock screen orientation when the component unmounts
    };
  }, [isFullscreen]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const videoPlayer = useRef(null);
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(true);

  const [currentTime, setCurrentTime] = useState(0);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
  const [isLoading, setIsLoading] = useState(true);

  const onSeek = seek => {
    videoPlayer?.current.seek(seek);
  };

  const onSeeking = currentVideoTime => setCurrentTime(currentVideoTime);

  const onPaused = newState => {
    setPaused(!paused);
    setPlayerState(newState);
  };

  const onReplay = () => {
    videoPlayer?.current.seek(0);
    setCurrentTime(0);
    if (Platform.OS === 'android') {
      setPlayerState(PLAYER_STATES.PAUSED);
      setPaused(true);
    } else {
      setPlayerState(PLAYER_STATES.PLAYING);
      setPaused(false);
    }
  };

  const onProgress = data => {
    if (!isLoading) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = data => {
    setDuration(Math.round(data.duration));
    setIsLoading(false);
  };

  const onLoadStart = () => setIsLoading(true);

  const onEnd = () => {
    setPlayerState(PLAYER_STATES.ENDED);
    setCurrentTime(duration);
  };

  const exitFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'black'}}>
      <AntDesign
        name="left"
        size={30}
        color="white"
        style={{position: 'absolute', top: 40, left: 10}}
        onPress={() => props.navigation.goBack()}
      />
      <View>
        <Text style={{color: 'tomato', fontSize: 30, fontWeight: '200'}}>
          {tit}
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            fontWeight: '200',
            marginBottom: 15,
          }}>
          {per}
        </Text>
      </View>
      <View>
        <Video
          onEnd={onEnd}
          onLoad={onLoad}
          onLoadStart={onLoadStart}
          posterResizeMode={'cover'}
          onProgress={onProgress}
          paused={paused}
          ref={ref => (videoPlayer.current = ref)}
          resizeMode={'cover'}
          source={video}
          style={isFullscreen ? styles.fullscreenVideo : styles.backgroundVideo}
        />
        {!isFullscreen && (
          <TouchableOpacity
            onPress={toggleFullscreen}
            style={styles.fullscreenButton}>
            <Entypo name="resize-full-screen" size={32} color="white" />
          </TouchableOpacity>
        )}

        {isFullscreen && (
          <TouchableOpacity
            onPress={toggleFullscreen}
            style={styles.fullscreenButton}>
            <MaterialIcons name="close-fullscreen" size={32} color="white" />
          </TouchableOpacity>
        )}

        <MediaControls
          isFullScreen={false}
          duration={duration}
          isLoading={isLoading}
          progress={currentTime}
          onPaused={onPaused}
          onReplay={onReplay}
          onSeek={onSeek}
          onSeeking={onSeeking}
          mainColor={'black'}
          playerState={playerState}
          sliderStyle={{containerStyle: {}, thumbStyle: {}, trackStyle: {}}}
        />
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('VideoMovies')}>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 20,
            borderWidth: 0.7,
            borderColor: 'white',
            borderRadius: 50,
          }}>
          <Ionicons
            name="play-outline"
            size={40}
            onPress={() => props.navigation.navigate('VideoMovies')}
            color="white"
            style={{marginLeft: 10}}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: '200',
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginRight: 10,
            }}>
            Watch the movie now.
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    height: 250,
    width: '100%',
  },
  mediaControls: {
    height: '100%',
    flex: 1,
    alignSelf: 'center',
  },
  video: {
    flex: 1,
    aspectRatio: 16 / 9,
  },
  fullscreenVideo: {
    width: '100%',
    height: '100%',
  },
  fullscreenButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  exitFullscreenButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
});

export default Trailer;
