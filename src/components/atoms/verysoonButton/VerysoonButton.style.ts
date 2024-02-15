import {StyleSheet} from 'react-native';
import {Colors} from '../../../../Colors';

export const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 50,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    top:20
  },
  ImageStyle: {
    width: 25,
    height: 25,
    borderRadius: 10,
  },
  textStyle: {
    color: Colors.white,
    fontSize: 18,
    marginLeft: 10,
  },
});
