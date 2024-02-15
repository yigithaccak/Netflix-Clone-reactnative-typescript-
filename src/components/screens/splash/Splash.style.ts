import {StyleSheet} from 'react-native';
import {Colors} from '../../../../Colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.black,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
