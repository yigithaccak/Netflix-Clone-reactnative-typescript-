import React from 'react';
import MainStructure from '../../atoms/mainStructure/MainStructure';
import {ScrollView, Text} from 'react-native';
import {styles} from './GlobalMovies.style';

const GlobalMovies: React.FC<{text: string}> = ({text}) => {
  return (
    <>
      <Text style={styles.textStyle}> {text} </Text>
      <ScrollView horizontal={true} style={styles.container}>
        <MainStructure
          url={require(`../../../../assets/images/extracnson.jpg`)}
        />
        <MainStructure
          url={require(`../../../../assets/images/spidermans.jpg`)}
        />
        <MainStructure url={require(`../../../../assets/images/trans.jpg`)} />
        <MainStructure url={require(`../../../../assets/images/lucy1.jpeg`)} />
        <MainStructure
          url={require(`../../../../assets/images/maymunlarcehennemi.jpg`)}
        />
        <MainStructure
          url={require(`../../../../assets/images/transformers3.jpg`)}
        />
        <MainStructure url={require(`../../../../assets/images/prestij.jpg`)} />
        <MainStructure
          url={require(`../../../../assets/images/karayipkorsanları5.jpg`)}
        />
      </ScrollView>
    </>
  );
};

export default GlobalMovies;
