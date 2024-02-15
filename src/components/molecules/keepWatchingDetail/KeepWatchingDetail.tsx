import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './KeepWatchingDetail.style';
import KeepWatchingImage from '../../atoms/keepWatchingImage/KeepWatchingImage';
import KeepWatchingButton from '../../atoms/keepWatchingButton/KeepWatchingButton';

function KeepWatchingDetail() {
  return (
    <>
      <Text style={styles.textStyle}>izlemeye devam edin</Text>
      <View style={{bottom: 15}}>
        <ScrollView horizontal={true} style={styles.container}>
          <View>
            <KeepWatchingImage
              url={require(`../../../../assets/images/wednesday.jpg`)}
            />
            <KeepWatchingButton />
          </View>
          <View>
            <KeepWatchingImage
              url={require(`../../../../assets/images/transformers5.jpg`)}
            />
            <KeepWatchingButton />
          </View>
          <View>
            <KeepWatchingImage
              url={require(`../../../../assets/images/ınception.jpg`)}
            />
            <KeepWatchingButton />
          </View>
          <View>
            <KeepWatchingImage
              url={require(`../../../../assets/images/narcos.jpg`)}
            />
            <KeepWatchingButton />
          </View>
          <View>
            <KeepWatchingImage
              url={require(`../../../../assets/images/lacasadacasa.jpg`)}
            />
            <KeepWatchingButton />
          </View>
          <View>
            <KeepWatchingImage
              url={require(`../../../../assets/images/harrypotter4.jpg`)}
            />
            <KeepWatchingButton />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default KeepWatchingDetail;
