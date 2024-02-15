import React from 'react';
import {View} from 'react-native';
import TimeButton from '../../atoms/timeButton/TimeButton';
import PopularButton from '../../atoms/popularButton/PopularButton';
import TextArea from '../../atoms/textArea/TextArea';
import ImageModüle from '../../molecules/ımageModüle/ImageModüle';
import PopularImage from '../../atoms/popularImage/PopularImage';

function ContentCard() {
  return (
    <View>
      <TimeButton date="14" month="May" />
      <ImageModüle />
      <PopularButton />
      <View style={{bottom: 90}}>
        <PopularImage url={require(`../../../../assets/images/avatars.jpg`)} />
      </View>
      <View style={{bottom: 60}}>
        <TextArea
          title="Avatar"
          textArea="Avatar olarak bilinen bir çocuk, savaş halindeki dünyayı  kurtarmak için dört element gücünde de ustalaşmalı ve onu durdurmaya kararlı olan acımasız bir düşmanla savaşmalıdır"
        />
      </View>
    </View>
  );
}

export default ContentCard;
