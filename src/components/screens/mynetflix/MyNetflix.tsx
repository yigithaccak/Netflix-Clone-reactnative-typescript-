import React from 'react';
import {ScrollView, View} from 'react-native';

import {styles} from './MyNetflix.style';
import MyNetflixAccound from '../../atoms/myNetflixAccound/MyNetflixAccound';
import NewComponent from '../../molecules/newComponent/NewComponent';
import {Colors} from '../../../../Colors';
import PopularTitle from '../../molecules/popularTitle/PopularTitle';
import KeepWatchingDetail from '../../molecules/keepWatchingDetail/KeepWatchingDetail';
import ActionMovies from '../../molecules/actionMovies/ActionMovies';
import GlobalMovies from '../../molecules/globalMovies/GlobalMovies';

function MyNetflix() {
  return (
    <View style={{backgroundColor: Colors.black, width: '100%'}}>
      <PopularTitle text={`Benim Netflix'im`} />
      <ScrollView style={styles.container}>
        <MyNetflixAccound />
        <NewComponent />
        <KeepWatchingDetail />
        <ActionMovies text="Önerilenler" />
        <View style={{bottom: 50}}>
          <GlobalMovies text="Yakın Zamanda İzlenilenler" />
        </View>
      </ScrollView>
    </View>
  );
}

export default MyNetflix;
