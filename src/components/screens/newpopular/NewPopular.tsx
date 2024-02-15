import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import PopularTitle from '../../molecules/popularTitle/PopularTitle';
import {styles} from './NewPopular.style';
import PopularOptinosOrganisma from '../../organisms/popularOptionsOrgnaisma/PopularOptinosOrganisma';
import VerysoonButton from '../../atoms/verysoonButton/VerysoonButton';
import NewCard from '../../organisms/newCard/NewCard';
import ContentCard from '../../organisms/contentCard/ContentCard';

function NewPopular() {
  return (
    <View style={styles.container}>
      <PopularTitle text="Popüler ve Yeni" />
      <PopularOptinosOrganisma />
      <VerysoonButton />
      <ScrollView>
        <NewCard />
        <ContentCard />
      </ScrollView>
    </View>
  );
}

export default NewPopular;
