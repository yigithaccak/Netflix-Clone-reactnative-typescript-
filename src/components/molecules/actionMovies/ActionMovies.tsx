import React from 'react';
import MainStructure from '../../atoms/mainStructure/MainStructure';
import {ScrollView, Text} from 'react-native';
import {styles} from './ActionMovies.style';

const ActionMovies: React.FC<{text: string}> = ({text}) => {
  return (
    <>
      <Text style={styles.textStyle}>{text}</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <MainStructure
          url={require(`../../../../assets/images/maymunlarcehennemi.jpg`)}
        />
        <MainStructure
          url={require(`../../../../assets/images/transformer4.jpg`)}
        />
        <MainStructure
          url={require(`../../../../assets/images/scarface.jpg`)}
        />
        <MainStructure url={require(`../../../../assets/images/peaky.jpg`)} />
        <MainStructure
          url={require(`../../../../assets/images/undergraund.jpg`)}
        />
        <MainStructure url={require(`../../../../assets/images/hizlsai.jpg`)} />
        <MainStructure url={require(`../../../../assets/images/narcos.jpg`)} />
        <MainStructure
          url={require(`../../../../assets/images/goodfellas.jpg`)}
        />
      </ScrollView>
    </>
  );
};

export default ActionMovies;
