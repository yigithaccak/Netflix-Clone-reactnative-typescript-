import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './OptionsPage.style';

interface OptionsPageProps {
  text: string;
}
const OptionsPage: React.FC<OptionsPageProps> = ({text}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OptionsPage;
