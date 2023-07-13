import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {withTheme} from 'styled-components';
import Background from './Background';
import Btn from './Btn';
import Video from 'react-native-video';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
//imports

const News = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{marginHorizontal: 40, marginVertical: 100}}>
        <Text style={{color: 'black', fontSize: 36, marginBottom: 50}}>
          Welcome To News
        </Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Video
          //source={require('./assets/videoo.mp4')}
          source={{
            uri: 'https://cdn.flowplayer.com/a30bd6bc-f98b-47bc-abf5-97633d4faea0/hls/de3f6ca7-2db3-4689-8160-0f574a5996ad/playlist.m3u8',
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          controls={true}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default News;
