import React from 'react';
import Video from 'react-native-video';
import {styles} from './ImageModüle.style';

function ImageModüle() {
  return (
    <Video
      source={require('../../../../assets/video/avatars.mp4')}
      style={styles.video}
      controls={true}
      resizeMode="cover"
    />
  );
}

export default ImageModüle;
