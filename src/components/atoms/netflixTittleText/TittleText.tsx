import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './TittleText.style';
import { useUser } from '../../../../UserContext';
const TittleText = () => {
  const { selectedUser } = useUser();

  return (
    <View>
      <Text style={styles.textStyle}>{selectedUser ? `${selectedUser} için` : ''}</Text>
    </View>
  );
};

export default TittleText;
