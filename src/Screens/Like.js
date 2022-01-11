import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';

const Like = () => {
  const PressButton = ({onPress, image, text}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.buttonFlex}>
        <View style={{flex: 0.4, alignItems: 'flex-end'}}>
          <Image
            source={image}
            style={{height: 20, width: 20, tintColor: 'white'}}
          />
        </View>
        <View style={{flex: 0.6, marginLeft: 10}}>
          <Text style={styles.socialText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../assets/logoGreen.png')}
          style={{height: 55, width: 205}}
        />
      </View>
      <View style={{flex: 0.5, justifyContent: 'space-evenly'}}>
        <PressButton
          text={'Facebook'}
          image={require('../assets/facebook.png')}
          onPress={() =>
            Linking.openURL('https://www.facebook.com/cafeanatolia/')
          }
        />

        <PressButton
          text={'Twitter'}
          image={require('../assets/twitter.png')}
          onPress={() => Linking.openURL('https://twitter.com/cafeanatolianz')}
        />

        <PressButton
          text={'Instagram'}
          image={require('../assets/instagram.png')}
          onPress={() =>
            Linking.openURL('https://www.instagram.com/cafeanatolianz/?hl=en')
          }
        />

        <PressButton
          text={'Youtube'}
          image={require('../assets/youtube.png')}
          onPress={() =>
            Linking.openURL(
              'https://www.youtube.com/channel/UCIluv1anAVMgT1YQfXKcS3g',
            )
          }
        />

        <PressButton
          text={'LinkedIn'}
          image={require('../assets/linkedin3.png')}
          onPress={() =>
            Linking.openURL('https://www.linkedin.com/company/65905152/admin/')
          }
        />
      </View>
      <View style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.bottomText}>
          Copyright @ Hospitality Franchise Group Limited
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Linking.openURL('https://cafeanatolia.co.nz/privacy-policy/')
            }>
            <Text style={styles.bottomText}>Privacy Policy</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine} />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Linking.openURL('https://cafeanatolia.co.nz/terms/')
            }>
            <Text style={styles.bottomText}>Terms & Conditions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Like;

const styles = StyleSheet.create({
  horizontalLine: {
    height: 14,
    borderRightWidth: 1,
    marginHorizontal: 2,
    borderColor: 'gray',
  },
  bottomText: {
    fontSize: 13,
    fontWeight: '500',
    color: 'gray',
  },
  buttonFlex: {
    marginHorizontal: 20,
    height: 35,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  socialText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
  },
});
