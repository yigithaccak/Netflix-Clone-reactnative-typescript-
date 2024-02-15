import React from 'react';
import { View} from 'react-native';
import OptionsPage from '../../atoms/optionsPage/OptionsPage';
import {styles} from './OptionsMolecule.style';

interface OptionsMoleculeProps {
  options: string[];
}

const OptionsMolecule: React.FC<OptionsMoleculeProps> = ({options,}) => {
  return (
    <>
      <View style={styles.container}>
        {options.map((option, index) => (
          <OptionsPage key={index} text={option} />
        ))}
      </View>
    </>
  );
};

export default OptionsMolecule;


