import React from 'react';
import {Image, ImageURISource} from 'react-native';
import {styles} from './PopularImage.style';

interface PopularImageProps {
  url: ImageURISource;
}
const PopularImage: React.FC<PopularImageProps> = ({url}) => {
  return <Image style={styles.imageStyle} source={url} />;
};

export default PopularImage;
