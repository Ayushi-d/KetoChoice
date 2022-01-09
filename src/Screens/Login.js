import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const Login = props => {
  const onHome = () => {
    props.navigation.navigate('Home');
  };``
  return (
    <ImageBackground
      source={require('../assets/BG.png')}
      style={styles.imageView}>
      <View style={{flex: 0.6, justifyContent: 'center'}}>
        <Image
          source={require('../assets/logoWhite.png')}
          style={{height: 58, width: 200}}
        />
      </View>
      <View style={{flex: 0.4}}>
        <TouchableOpacity
          onPress={onHome}
          activeOpacity={0.6}
          style={styles.onlineView}>
          <Text style={styles.orderText}>ORDER NOW</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default Login;

const styles = StyleSheet.create({
  mainHome: {},
  imageView: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // resizeMode :'contain'
  },
  orderText: {
    fontSize: 15,
    color: 'white',
    fontStyle: 'normal',
  },
  onlineView: {
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
});
