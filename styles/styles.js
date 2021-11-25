import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    flex: 1,
  },
  imageWrap: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    width: 100,
    height: 50,
    backgroundColor: '#828282cf',
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    backgroundColor: '#7bc3f7bd',
    borderRadius: 20,
    padding: 10,
  },
});
