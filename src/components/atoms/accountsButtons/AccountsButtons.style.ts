import {Colors} from '../../../../Colors';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    width: 150,
    height: 150,
    marginLeft: 20,
    justifyContent:"space-around",
    flexDirection:"column"
  },
  buttonStyle: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginTop: 30,
  },
  textStyle: {
    fontSize: 20,
    color: Colors.white,
  },
});
