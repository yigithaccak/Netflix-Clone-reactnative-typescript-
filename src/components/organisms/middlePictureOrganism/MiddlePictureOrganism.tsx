import React from 'react';
import MiddlePhoto from '../../atoms/middlePhoto/MiddlePhoto';
import {View} from 'react-native';
import MiddleIconsPage from '../../molecules/middleIconsPage/MiddleIconsPage';

const MiddlePictureOrganism = () => {
  return (
    <View>
      <MiddlePhoto />
      <MiddleIconsPage/>
    </View>
  );
};

export default MiddlePictureOrganism;
