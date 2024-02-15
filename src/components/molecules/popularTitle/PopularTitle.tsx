import React from 'react';
import TitleIcons from '../../atoms/tittleIcons/TitleIcons';
import {Text, View} from 'react-native';
import TittleText from '../../atoms/netflixTittleText/TittleText';
import {styles} from './PopularTitle.style';

interface PopulerTitleProps {
  text: string;
}

const PopularTitle: React.FC<PopulerTitleProps> = ({text}) => {
  return (
    <View>
      <TitleIcons icon1Name={'podcast-solid'} icon2Name={'search'} />
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

export default PopularTitle;
