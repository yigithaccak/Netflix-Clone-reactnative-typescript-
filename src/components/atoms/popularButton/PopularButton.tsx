import React from 'react';
import CustomIcons from '../../../../assets/CustomIcons';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './PopularButton.style';

const PopularButton = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity>
          <CustomIcons style={styles.iconStyle} name={'bell-solid'} />
        </TouchableOpacity>
        <Text style={{color: 'white'}}>Bana Hatırlat</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity>
          <CustomIcons style={styles.iconStyle} name={'info'} />
        </TouchableOpacity>
        <Text style={{color: 'white'}}>Bilgi</Text>
      </View>
    </View>
  );
};

export default PopularButton;
