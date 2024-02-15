import {StyleSheet} from 'react-native';
import {Colors} from '../../../../Colors';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 210,
    height: 30,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.lightGrey,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconStyle: {
    color: Colors.lightGrey,
    fontSize: 18,
    marginLeft: 20,
  },
});
