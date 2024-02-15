import React from 'react';
import {Image, ImageURISource, Text, View} from 'react-native';
import {styles} from './NotificationDetail.style';

interface NotificationDetailProps {
  url: ImageURISource;
  text: string;
  content: string;
}

const NotificationDetail: React.FC<NotificationDetailProps> = ({
  url,
  text,
  content,
}) => {
  return (
    <View style={styles.container}>
      <Image source={url} style={styles.imageStyle} />
      <View>
        <Text style={styles.textStyle}>{text}</Text>
        <Text style={styles.contentStyle}>{content}</Text>
      </View>
    </View>
  );
};

export default NotificationDetail;
