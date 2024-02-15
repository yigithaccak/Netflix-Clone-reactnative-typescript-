import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './Splash.style';

function Splash() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require(`../../../../assets/images/splash.jpg`)}
      />
    </View>
  );
}

export default Splash;
