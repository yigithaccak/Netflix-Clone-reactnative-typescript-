import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './PopularOptionsPage.style';

interface PopularOptionsPageProps {
  text: string;
}
const PopularOptionsPage: React.FC<PopularOptionsPageProps> = ({text}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PopularOptionsPage;
