import React from 'react';
import MiddleIcons from '../../atoms/middleIcons/MiddleIcons';
import {View} from 'react-native';
import {styles} from './MiddleIconsPage.style';

function MiddleIconsPage() {
  return (
    <View style={styles.container}>
      <MiddleIcons iconName="play3" buttonText="Oynat" />
      <View style={{right: 5}}>
        <MiddleIcons
          iconName="plus"
          buttonText="Listem"
          textStyles={styles.listemTextStlye}
          containerStyle={styles.listemContainerStyle}
          iconStyle={styles.listemIconStyle}
        />
      </View>
    </View>
  );
}

export default MiddleIconsPage;
