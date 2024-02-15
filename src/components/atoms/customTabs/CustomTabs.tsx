import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CustomIcons from '../../../../assets/CustomIcons';
import {iconStyle, styles} from './CustomTabs.style';

interface CustomTabsProps {
  icons: string;
  text: string;
  iconsOne: string;
  customtabs?: any;
  iconStyle: any;
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  icons,
  text,
  iconsOne,
  customtabs,
  iconStyle,
}) => {
  return (
    <TouchableOpacity style={styles.Container}>
      <CustomIcons name={icons} style={[customtabs, iconStyle]} />
      <Text style={styles.textStyle}>{text}</Text>
      <CustomIcons name={iconsOne} style={styles.iconStyle1} />
    </TouchableOpacity>
  );
};

export default CustomTabs;
