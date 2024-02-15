import React from 'react';
import { ScrollView } from 'react-native';
import PopularOptionsMolecule from '../../molecules/popularOptionsPageMolecules/PopularOptionsMolecule';

const PopularOptinosOrganisma = () => {
  const options = ['Çok Yakında Burada', 'Herkes Bunları İzliyor', 'Top 10 Dizi Listesi'];
  const icons = ['flickr3', 'rss', '10'];

  return (
    <ScrollView horizontal={true}>
      <PopularOptionsMolecule options={options} icons={icons} />
    </ScrollView>
  );
};

export default PopularOptinosOrganisma;
