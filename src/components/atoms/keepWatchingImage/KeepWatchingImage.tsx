import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import {styles} from './KeepWatchingImage.style';

interface KeepWatchingProps {
  url?: ImageSourcePropType;
}
const KeepWatchingImage: React.FC<KeepWatchingProps> = ({url}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.ImageStyle} source={url} />
    </View>
  );
};

export default KeepWatchingImage;
