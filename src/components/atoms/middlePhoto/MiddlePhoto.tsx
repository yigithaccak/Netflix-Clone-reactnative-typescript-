import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './MiddlePhoto.style';

const MiddlePhoto = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require(`../../../../assets/images/peaky.jpg`)}
      />
    </View>
  );
};

export default MiddlePhoto;
