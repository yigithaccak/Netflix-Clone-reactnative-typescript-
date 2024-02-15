import React from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';
import { styles } from './VideoModüle.style';

function VideoModüle() {
  return (
    <View style={styles.container}>
      <Video
        source={require('../../../../assets/video/rick.mp4')}
        style={styles.video}
        controls={true}
        resizeMode="cover"
      />
    </View>
  );
}

export default VideoModüle;
