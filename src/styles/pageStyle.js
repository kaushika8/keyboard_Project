import {Keyboard, StyleSheet} from 'react-native';

export const theme = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10,
    zIndex: -3,
  },
  titlestyle: {
    color: '#86939e',
    fontSize: 18,
    marginTop: 10,
    paddingLeft: 10,
  },
  subTitleStyle: {
    color: '#808080',
    fontSize: 16,
    paddingLeft: 10,
  },
  iconview: {
    bottom: 0,
    flex: 0.05,
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingBottom: 10,
  },
  keyboardStyle: {
    height: 30,
    width: 20,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  stariconStyle: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    marginTop: 6,
    marginLeft: 10,
  },
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    position: 'static',
  },
  agastyaStle: {
    fontSize: 16,
    color: '#505050',
    fontWeight: '500',
    paddingTop: 10,
  },
  forwardiconStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderRadius: 5,
  },
  searchStyle: {
    color: '#86939e',
    fontSize: 14,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#ffd11a',
    paddingLeft: 5,
  },
  searchedTextView: {
    paddingLeft: 15,
    paddingVertical: 10,
  },
  searchedFont: {
    fontSize: 14,
    color: '#505050',
  },
  noResult: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
});
