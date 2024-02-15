import {Colors} from '../../../../Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  iconStyle: {
    color: Colors.black,
    fontSize: 25,
  },
  textStyle: {
    color: Colors.black,
    fontSize: 18,
  },
  container: {
    alignItems: 'center',
    width: 150,
    height: 45,
    flexDirection: 'row',
    marginHorizontal: 8,
    backgroundColor: Colors.water,
    textAlign: 'center',
    justifyContent: 'center',
    bottom: 50,
    marginLeft: 30,
    borderRadius: 6,
    opacity: 0.9,
  },
});
