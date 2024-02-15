import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './TimeButton.style';
import {Colors} from '../../../../Colors';

interface timeButtonProps {
  date: string;
  month: string;
}

const TimeButton: React.FC<timeButtonProps> = ({date, month}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: Colors.lightGrey}}>{month}</Text>
      <Text style={{color: Colors.white, fontSize: 20}}>{date}</Text>
    </View>
  );
};

export default TimeButton;
