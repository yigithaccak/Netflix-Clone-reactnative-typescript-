import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageURISource,
} from 'react-native';
import {styles} from './AccountsButtons.style';

interface AccoundButtonProps {
  title?: string;
  url?: ImageURISource;
  name?: string;
  clicks?: () => void;
}

const AccoundButtons: React.FC<AccoundButtonProps> = ({title, url, clicks}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={clicks}>
        <Image style={styles.buttonStyle} source={url} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

export default AccoundButtons;
