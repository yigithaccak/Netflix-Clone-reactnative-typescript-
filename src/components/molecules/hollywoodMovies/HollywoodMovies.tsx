import React from 'react';
import MainStructure from '../../atoms/mainStructure/MainStructure';
import {ScrollView, Text} from 'react-native';
import {styles} from './HollywoodMovies.style';

const HollywoodMovies = () => {
  return (
    <>
      <Text style={styles.textStyle}>Hollywood Filmler</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <MainStructure url={require(`../../../../assets/images/hizliveöfkeli21.jpg`)} />
        <MainStructure url={require(`../../../../assets/images/transformers2.jpg`)}/>
        <MainStructure url={require(`../../../../assets/images/harrypotter8.jpg`)}/>
        <MainStructure url={require(`../../../../assets/images/swat.jpg`)} />
        <MainStructure url={require(`../../../../assets/images/karayipkorsanları3.jpg`)} />
        <MainStructure url={require(`../../../../assets/images/yıldızlararası.jpg`)}/>
        <MainStructure url={require(`../../../../assets/images/undergraund.jpg`)}/>
        <MainStructure url={require(`../../../../assets/images/extrac.jpg`)} />
      </ScrollView>
    </>
  );
};

export default HollywoodMovies;
