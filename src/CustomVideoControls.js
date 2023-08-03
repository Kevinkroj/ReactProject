import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  StatusBar,
  AppRegistry,
} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import Slider from '@react-native-community/slider';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {VolumeManager} from 'react-native-volume-manager';

const CustomVideoControls = ({videoUri}) => {
  const videoPlayerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const [volume, setVolume] = useState(1);

  const timeRef = useRef(null);

  //   const hideControlsTimeout = setTimeout(() => {
  //     setShowControls(false);
  //     console.log('u kyc ');
  //   }, 5000);

  useEffect(() => {
    if (isFullscreen) {
      Orientation.lockToLandscape();
    } else {
      Orientation.lockToPortrait();
    }
    timeRef.current = setTimeout(() => {
      setShowControls(false);
      console.log('u kyc ');
    }, 5000);

    return () => {
      Orientation.lockToPortrait();
      clearTimeout(timeRef.current);
    };
  }, [isFullscreen]);

  //====== Volume ===========================
  useEffect(() => {
    // Get the current volume async when the component mounts
    const getVolumeAsync = async () => {
      const {volume} = await VolumeManager.getVolume();
      setVolume(volume);
    };
    getVolumeAsync();

    // Listen to volume changes
    const volumeListener = VolumeManager.addVolumeListener(result => {
      setVolume(result.volume);
    });

    return () => {
      // Remove the volume listener when the component unmounts
      volumeListener.remove();
    };
  }, []);

  const onVolumeSliderValueChange = async value => {
    setVolume(value);
    await VolumeManager.setVolume(value);
  };

  //=========================================

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const togglePlayPause = () => {
    setIsPaused(!isPaused);
    setShowControls(true);
  };

  const onProgress = data => {
    setCurrentTime(data.currentTime);
  };

  const onEnd = () => {
    setIsPaused(true);
    setCurrentTime(0);

    <TouchableOpacity onPress={videoPlayerRef.current.seek(0)}>
      <Entypo name="ccw" size={30} color="white" />
    </TouchableOpacity>;
  };

  const onSliderValueChange = value => {
    videoPlayerRef.current.seek(value);
    setShowControls(true);
  };

  const onLoad = data => {
    setDuration(data.duration);
  };

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;
  };

  const handleControlsInteraction = () => {
    if (timeRef.current != null) {
      clearTimeout(timeRef.current);
    }

    timeRef.current = setTimeout(() => {
      setShowControls(false);
      console.log('u kyc ');
    }, 5000);
  };

  const skipForwsord = () => {
    const newTime = currentTime + 10;
    if (newTime > duration) {
      videoPlayerRef.current.seek(duration);
    } else {
      videoPlayerRef.current.seek(newTime);
    }
  };
  const skipBack = () => {
    const newTime = currentTime - 10;
    if (newTime < 0) {
      videoPlayerRef.current.seek(0);
    } else {
      videoPlayerRef.current.seek(newTime);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar animated={true} showHideTransition={'none'} hidden={true} />
      <Pressable
        onPress={() => {
          console.log('pressed');
          setShowControls(!showControls);
          handleControlsInteraction(timeRef);
        }}
        style={styles.container}>
        <Video
          ref={videoPlayerRef}
          source={{uri: videoUri}}
          style={isFullscreen ? styles.fullscreenVideo : styles.video}
          paused={isPaused}
          onProgress={onProgress}
          onEnd={onEnd}
          onLoad={onLoad}
        />

        {showControls && (
          <View style={styles.controlsContainer}>
            <TouchableOpacity onPress={skipBack}>
              {isFullscreen ? (
                <MaterialCommunityIcons
                  name="rewind-10"
                  size={30}
                  color="white"
                  onPress={handleControlsInteraction(timeRef)}
                  style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    top: 170,
                    left: 200,
                  }}
                />
              ) : (
                <MaterialCommunityIcons
                  name="rewind-10"
                  size={30}
                  color="white"
                  onPress={handleControlsInteraction(timeRef)}
                  style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    top: 400,
                    left: 50,
                  }}
                />
              )}
            </TouchableOpacity>

            {isFullscreen ? (
              <TouchableOpacity onPress={togglePlayPause}>
                {isPaused ? (
                  <Entypo
                    name="controller-play"
                    size={40}
                    color="white"
                    onPress={handleControlsInteraction(timeRef)}
                    style={{
                      position: 'absolute',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      top: 170,
                    }}
                  />
                ) : (
                  <Entypo
                    name="controller-paus"
                    size={40}
                    color="white"
                    onPress={handleControlsInteraction(timeRef)}
                    style={{
                      position: 'absolute',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      top: 170,
                    }}
                  />
                )}
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={togglePlayPause}>
                {isPaused ? (
                  <Entypo
                    name="controller-play"
                    size={40}
                    color="white"
                    onPress={handleControlsInteraction(timeRef)}
                    style={{
                      position: 'absolute',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      top: 400,
                    }}
                  />
                ) : (
                  <Entypo
                    name="controller-paus"
                    size={40}
                    color="white"
                    onPress={handleControlsInteraction(timeRef)}
                    style={{
                      position: 'absolute',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      top: 400,
                    }}
                  />
                )}
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={skipForwsord}>
              {isFullscreen ? (
                <MaterialCommunityIcons
                  name="fast-forward-10"
                  size={30}
                  color="white"
                  onPress={handleControlsInteraction(timeRef)}
                  style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    top: 170,
                    right: 200,
                  }}
                />
              ) : (
                <MaterialCommunityIcons
                  name="fast-forward-10"
                  size={30}
                  color="white"
                  onPress={handleControlsInteraction(timeRef)}
                  style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    top: 400,
                    right: 50,
                  }}
                />
              )}
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: 0,
                alignItems: 'center',
              }}>
              <Text style={styles.timeText}>
                {`${formatTime(currentTime)}`}
              </Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                thumbTintColor="tomato"
                minimumTrackTintColor="tomato"
                maximumTrackTintColor="grey"
                maximumValue={duration}
                value={currentTime}
                onValueChange={onSliderValueChange}
              />
              <Text style={styles.timeText}>{` ${formatTime(duration)}`}</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <AntDesign
                name="sound"
                size={30}
                color="white"
                style={{
                  position: 'absolute',

                  top: 5,
                  left: 30,
                }}
              />

              <Slider
                style={styles.volumeSlider}
                minimumValue={0}
                maximumValue={1}
                value={volume}
                onValueChange={onVolumeSliderValueChange}
                thumbTintColor="white"
                minimumTrackTintColor="white"
                maximumTrackTintColor="gray"
              />
            </View>

            <TouchableOpacity onPress={toggleFullscreen}>
              {isFullscreen ? (
                <Entypo
                  name="back"
                  size={30}
                  onPress={handleControlsInteraction(timeRef)}
                  color="white"
                  style={{position: 'absolute', right: 20, top: 10}}
                />
              ) : (
                <Entypo
                  name="resize-full-screen"
                  size={30}
                  color="white"
                  onPress={handleControlsInteraction(timeRef)}
                  style={{position: 'absolute', right: 15, top: 15}}
                />
              )}
            </TouchableOpacity>
          </View>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  video: {
    flex: 1,
    height: 200,
  },
  fullscreenVideo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  controlsContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: '100%',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
  playPauseButton: {
    padding: 8,
  },
  playPauseButtonText: {
    color: 'white',
    fontSize: 16,
  },
  slider: {
    flex: 1,
    marginHorizontal: 12,
    height: 50,
  },
  timeText: {
    color: 'white',
    fontSize: 16,
  },
  fullscreenButton: {
    padding: 8,
  },
  fullscreenButtonText: {
    color: 'white',
    fontSize: 16,
  },
  volumeSlider: {
    flex: 1,
    marginHorizontal: 12,

    position: 'absolute',
    top: 10,
    left: 50,
    width: 100,
  },
});

export default CustomVideoControls;
