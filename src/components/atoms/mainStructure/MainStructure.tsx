import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import {styles} from './MainStructure.style';

interface MainStructureProps {
  url: ImageSourcePropType;
}
const MainStructure: React.FC<MainStructureProps> = ({url}) => {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.ImageStyle} source={url} />
      </View>
    </>
  );
};

export default MainStructure;
