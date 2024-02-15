import React from 'react';
import MainStructure from '../../atoms/mainStructure/MainStructure';
import {ScrollView, Text} from 'react-native';
import {styles} from './MarvelMovies.style';
import KeepWatchingDetail from '../keepWatchingDetail/KeepWatchingDetail';
import KeepWatchingImage from '../../atoms/keepWatchingImage/KeepWatchingImage';

const MarvelMovies = () => {
  return (
    <>
      <Text style={styles.textStyle}>Marvel Filmleri</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <KeepWatchingImage
          url={require(`../../../../assets/images/marvel1.jpg`)}
        />
        <KeepWatchingImage
          url={require(`../../../../assets/images/marvel3.jpg`)}
        />
        <KeepWatchingImage
          url={require(`../../../../assets/images/marvel4.jpg`)}
        />
        <KeepWatchingImage
          url={require(`../../../../assets/images/marvel5.jpg`)}
        />
        <KeepWatchingImage
          url={require(`../../../../assets/images/marvel6.jpg`)}
        />
        <KeepWatchingImage
          url={require(`../../../../assets/images/marvel7.jpg`)}
        />
        <KeepWatchingImage
          url={require(`../../../../assets/images/marvel8.jpg`)}
        />
        <KeepWatchingImage
          url={require(`../../../../assets/images/marvel9.jpg`)}
        />
        <KeepWatchingImage
          url={require(`../../../../assets/images/marvel10.jpg`)}
        />
        <KeepWatchingImage
          url={require(`../../../../assets/images/marvel11.jpg`)}
        />
      </ScrollView>
    </>
  );
};

export default MarvelMovies;
