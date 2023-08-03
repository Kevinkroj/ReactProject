import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {withTheme} from 'styled-components';
import Background from './Background';
import Btn from './Btn';
import CustomVideoControls from './CustomVideoControls';

const VideoMovies = props => {
  const videoUri =
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'; // Replace with the URL or local path of your video

  return (
    <View style={styles.container}>
      <CustomVideoControls videoUri={videoUri} />
      {/* <View>
        <Text style={{flex: 1, fontSize: 20, color: 'tomato'}}>Hello</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default VideoMovies;
