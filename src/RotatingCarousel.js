import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const ENTRIES1 = [
  {
    id: '1',
    title: 'Retribu',
    short: 'beautiful moviee',
    now: 'Dom and his family and friends are hunted by the vengeful son of drug kingpin Hernan Reyes, Dante (Jason Momoa). Will Dom be able to save his family and friends once again? Or will Dante be able to come out victorious at the end? Who else from Doms past will return from the dead?',
    sources:
      'https://i.pinimg.com/originals/79/db/d1/79dbd1808c21876a7ab93c303c5e4360.jpg',
  },
  {
    id: '2',
    title: 'Avatar',
    short: 'beautiful moviee',
    now: 'Dom and his family and friends are hunted by the vengeful son of drug kingpin Hernan Reyes, Dante (Jason Momoa). Will Dom be able to save his family and friends once again? Or will Dante be able to come out victorious at the end? Who else from Doms past will return from the dead?',
    sources: 'https://cdn.wallpapersafari.com/66/53/IiFMyZ.jpg',
  },
  {
    id: '3',
    title: '100',
    short: 'beautiful moviee',
    now: 'Dom and his family and friends are hunted by the vengeful son of drug kingpin Hernan Reyes, Dante (Jason Momoa). Will Dom be able to save his family and friends once again? Or will Dante be able to come out victorious at the end? Who else from Doms past will return from the dead?',
    sources:
      'https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2019/04/19/Petta-movie-100-days-poster-.jpg?fit=2048%2C1024&quality=80&zoom=1&ssl=1',
  },
  {
    id: '4',
    title: 'Avengers',
    short: 'beautiful moviee',
    now: 'Dom and his family and friends are hunted by the vengeful son of drug kingpin Hernan Reyes, Dante (Jason Momoa). Will Dom be able to save his family and friends once again? Or will Dante be able to come out victorious at the end? Who else from Doms past will return from the dead?',
    sources: 'https://wallpapershome.com/images/pages/pic_h/14035.jpg',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const RotatingCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.sources}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goForward}>
        <Text>go to next slide</Text>
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default RotatingCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'black',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    color: 'tomato',
    fontWeight: '200',
    fontSize: 30,
  },
});
