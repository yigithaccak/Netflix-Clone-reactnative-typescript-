import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomIcons from '../../../../assets/CustomIcons';
import { styles } from './PopularOptionsMolecule.style';

interface OptionsMoleculeProps {
  options: string[];
  icons?: string[];
}

const PopularOptionsMolecule: React.FC<OptionsMoleculeProps> = ({ options, icons }) => {
  return (
    <View style={{ width: '100%', flexDirection: 'row',height:50 }}>
      {options.map((option, index) => (
        <TouchableOpacity key={index} style={styles.container}>
          {icons && icons[index] ? (
            <CustomIcons name={icons[index]} style={styles.iconStyle} />
          ) : (
            <CustomIcons
              name="ios-checkmark-circle-outline"
              size={24}
              color="white"
            />
          )}
          <Text style={{ color: 'white', left: 23 }}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PopularOptionsMolecule;
