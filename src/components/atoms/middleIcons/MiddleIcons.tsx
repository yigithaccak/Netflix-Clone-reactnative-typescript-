import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CustomIcons from '../../../../assets/CustomIcons';
import {styles} from './MiddleIcons.style';

interface MiddleIconsProps {
  iconName: string;
  buttonText: string;
  containerStyle?: object;
  iconStyle?: object;
  textStyles?: object;
}

const MiddleIcons = ({
  iconName,
  buttonText,
  containerStyle,
  iconStyle,
  textStyles,
}: MiddleIconsProps) => {
  return (
    <View>
      <TouchableOpacity style={[styles.container, containerStyle]}>
        <CustomIcons style={[styles.iconStyle, iconStyle]} name={iconName} />
        <Text style={[styles.textStyle, textStyles]}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MiddleIcons;
