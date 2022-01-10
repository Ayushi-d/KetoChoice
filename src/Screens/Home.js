import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Image,
} from 'react-native';
import WebView from 'react-native-webview';
import * as Icon from 'react-bootstrap-icons';
import {SvgCss} from 'react-native-svg';
import {useFocusEffect} from '@react-navigation/native';
import Maps from './Maps';
import Like from './Like';

const Home = props => {
  const [index, setIndex] = useState(0);

  const onOrder = () => {
    setIndex(0);
  };

  const onFind = () => {
    setIndex(1);
  };
  const onLike = () => {
    setIndex(2);
  };

  const handleBackButtonClick = () => {
    // if (index == 0) {
    //   props.navigation.goBack();
    //   return true;
    // } else {
    //   setIndex(0);
    //   return true;
    // }

    alert(index);
    return true;
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (index == 0) {
          props.navigation.goBack();
          return true;
        } else {
          setIndex(0);
          return true;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [index]),
  );

  return (
    <View style={{flex: 1}}>
       {Platform.OS == 'ios' ? <View style = {{height : '3%' , backgroundColor : 'white'}}  /> : null }
      {index == 2 ? (
        <View
          style={{
            flex: 0.92,
            backgroundColor: 'F5F6F5',
          }}>
          <Like />
        </View>
      ) : index == 1 ? (
        <View style={{flex: 0.92, backgroundColor: 'F5F6F5'}}>
          <Maps />
        </View>
      ) : (
        <View style={{flex: 0.92, backgroundColor: 'F5F6F5'}}>
          <WebView
            source={{uri: 'https://mobileapps.cafeanatolia.co.nz/index,html'}}
          />
        </View>
      )}
      <View style={style.bottomView}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onOrder}
          style={
            index == 0
              ? {
                  ...style.buttonView,
                  backgroundColor: 'green',
                  borderTopWidth: 0,
                }
              : style.buttonView
          }>
          {/* <Icon.ArrowBarDown style={{height : 10 , width : 10}} /> */}
          {/* <SvgCss width="100%" height="100%" xml={location} /> */}
          <Image
            source={require('../assets/order.png')}
            style={{
              height: 20,
              width: 20,
              tintColor: index == 0 ? 'white' : 'green',
            }}
          />
          <Text style={index == 0 ? {color: 'white'} : {color: 'green'}}>
            ORDER
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={
            index == 1
              ? {
                  ...style.buttonView,
                  backgroundColor: 'green',
                  borderTopWidth: 0,
                }
              : style.buttonView
          }
          onPress={onFind}>
          <Image
            source={require('../assets/place.png')}
            style={{
              height: 20,
              width: 20,
              tintColor: index == 1 ? 'white' : 'green',
            }}
          />
          <Text style={index == 1 ? {color: 'white'} : {color: 'green'}}>
            FIND US
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={
            index == 2
              ? {
                  ...style.buttonView,
                  backgroundColor: 'green',
                  borderTopWidth: 0,
                }
              : style.buttonView
          }
          onPress={onLike}>
          <Image
            source={require('../assets/like.png')}
            style={{
              height: 20,
              width: 20,
              tintColor: index == 2 ? 'white' : 'green',
            }}
          />
          <Text style={index == 2 ? {color: 'white'} : {color: 'green'}}>
            LIKE US
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;

const style = StyleSheet.create({
  bottomView: {
    flex: 0.09,
    flexDirection: 'row',
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 8,
    overflow: 'hidden',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    backgroundColor  :'white'
  },
  buttonView: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
});
