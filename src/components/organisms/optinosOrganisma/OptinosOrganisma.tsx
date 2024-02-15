import React from 'react';
import {ScrollView, View} from 'react-native';
import OptionsMolecule from '../../molecules/optionsMolecule/OptionsMolecule';


const OptinosOrganisma = () => {
  const options = ['Diziler', 'Filmler', 'Kategoriler'];

  return (
    <ScrollView horizontal={true} style={{bottom:30}}>
      <OptionsMolecule options={options} />
    </ScrollView>
  );
};

export default OptinosOrganisma;
