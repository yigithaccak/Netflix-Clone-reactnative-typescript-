import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './TextArea.style';

interface TextAreaProps {
  textArea: string;
  title:string
}

const TextArea :React.FC<TextAreaProps>= ({textArea,title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textOneStyle}>{title}</Text>
      <Text style={styles.textStyle}>{textArea}</Text>
    </View>
  );
};

export default TextArea;
