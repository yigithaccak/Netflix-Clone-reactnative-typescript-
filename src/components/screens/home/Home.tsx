import React from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from './Home.style';
import Title from '../../molecules/netflixTitle/Title';

import OptinosOrganisma from '../../organisms/optinosOrganisma/OptinosOrganisma';
import MiddlePictureOrganism from '../../organisms/middlePictureOrganism/MiddlePictureOrganism';
import GlobalMovies from '../../molecules/globalMovies/GlobalMovies';
import HollywoodMovies from '../../molecules/hollywoodMovies/HollywoodMovies';
import KeepWatchingDetail from '../../molecules/keepWatchingDetail/KeepWatchingDetail';
import MarvelMovies from '../../molecules/marvelMovies/MarvelMovies';
import ActionMovies from '../../molecules/actionMovies/ActionMovies';
const Home: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Title />
      <OptinosOrganisma />
      <ScrollView>
        <MiddlePictureOrganism />
        <GlobalMovies text="Uluslar Arası Filmler" />
        <HollywoodMovies />
        <KeepWatchingDetail />
        <MarvelMovies />
        <ActionMovies text="Aksiyon Filmleri" />
      </ScrollView>
    </View>
  );
};

export default Home;
