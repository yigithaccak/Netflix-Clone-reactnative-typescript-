import {StyleSheet} from 'react-native';
import {Colors} from '../../../../Colors';

export const styles = StyleSheet.create({
  Container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  textStyle: {
    color: Colors.white,
    textAlign: 'center',
    marginRight: 180,
    fontSize: 18,
  },
  iconStyle1: {
    color: Colors.white,
    fontSize: 24,
  },
});
export const customtabs = {
  color: Colors.white,
  fontSize: 34,
  width: 37,
  height: 40,
  borderRadius: 8,
};
export const iconStyle = {
  color: Colors.white,
  fontSize: 34,
  width: 37,
  height: 40,
  backgroundColor: Colors.red,
  borderRadius: 8,
};
