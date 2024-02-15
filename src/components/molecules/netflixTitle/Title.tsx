import React from 'react';
import {View} from 'react-native';
import TitleIcons from '../../atoms/tittleIcons/TitleIcons';
import TittleText from '../../atoms/netflixTittleText/TittleText';
function Title() {
  return (
    <View style={{marginTop: 10}}>
      <TitleIcons icon1Name={'podcast-solid'} icon2Name={'search'} />
      <TittleText />
    </View>
  );
}

export default Title;
