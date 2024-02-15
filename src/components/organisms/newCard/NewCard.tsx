import React from 'react';
import {View} from 'react-native';
import VideoModüle from '../../molecules/videoModüle/VideoModüle';
import TimeButton from '../../atoms/timeButton/TimeButton';
import TextArea from '../../atoms/textArea/TextArea';
import PopularButton from '../../atoms/popularButton/PopularButton';
import PopularImage from '../../atoms/popularImage/PopularImage';

const NewCard = () => {
  return (
    <View style={{top: 40}}>
      <TimeButton date="22" month="Şub" />
      <VideoModüle />
      <PopularImage
        url={require(`../../../../assets/images/rickandmorty.jpg`)}
      />
      <PopularButton />
      <TextArea
        textArea="'rick torunu mortynin yardımıyla coklu evrende seyahate cıkar. Amacı eşilile kızının intikamını almak ve şimdiye kadarki en büyük düşmanıyla,yanikendisiyle hesaplaşmaktır'"
        title="Rick And Morty"
      />
    </View>
  );
};

export default NewCard;
