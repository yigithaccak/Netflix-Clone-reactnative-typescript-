import React from 'react';
import CustomIcons from '../../../../assets/CustomIcons';
import {View} from 'react-native';
import {styles} from './TitleIcons.style';

interface TitleIconsProps {
  icon1Name: string;
  icon2Name: string;
}

const TitleIcons: React.FC<TitleIconsProps> = props => {
  const {icon1Name, icon2Name} = props;

  return (
    <View style={styles.container}>
      <CustomIcons style={styles.search} name={icon1Name} />
      <CustomIcons style={styles.iconStyle} name={icon2Name} />
    </View>
  );
};

export default TitleIcons;
