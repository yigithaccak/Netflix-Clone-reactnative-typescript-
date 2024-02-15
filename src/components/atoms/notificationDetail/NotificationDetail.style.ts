import {Colors} from '../../../../Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 15,
    flexDirection: 'row',
  },
  imageStyle: {
    width: 130,
    height: 80,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  textStyle: {
    color: Colors.ironsideGray,
    fontSize: 18,
    fontFamily: 'bold',
    marginLeft: 15,
  },
  contentStyle: {
    color: Colors.ironsideGray,
    fontSize: 18,
    fontFamily: 'bold',
    marginLeft: 15,
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
});
