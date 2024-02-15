import React from 'react';
import CustomIcons from '../../../../assets/CustomIcons';
import {TouchableOpacity} from 'react-native';
import {styles} from './KeepWatchingButton.style';

const KeepWatchingButton = () => {
  return (
    <TouchableOpacity>
      <CustomIcons style={styles.IconStyle} name={'play2'} />
    </TouchableOpacity>
  );
};

export default KeepWatchingButton;
