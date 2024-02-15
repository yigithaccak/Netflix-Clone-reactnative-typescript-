import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './VerysoonButton.style';

const VerysoonButton = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.ImageStyle}
        source={require(`../../../../assets/images/popcorns.jpg`)}
      />
      <Text style={styles.textStyle}>Çok Yakında </Text>
    </View>
  );
};

export default VerysoonButton;
