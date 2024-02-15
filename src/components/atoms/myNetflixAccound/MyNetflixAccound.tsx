import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import PopularTitle from '../../molecules/popularTitle/PopularTitle';
import {styles} from './MyNetflixAccound.style';
import CustomIcons from '../../../../assets/CustomIcons';

const MyNetflixAccound = () => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Image
          source={require(`../../../../assets/images/user2.jpg`)}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>yiğit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyNetflixAccound;
