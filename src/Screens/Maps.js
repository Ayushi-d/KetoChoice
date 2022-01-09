import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  Platform,
} from 'react-native';
import MapView from 'react-native-maps';

const Maps = () => {
  const coordinate = [
    {
      location: {latitude: -36.71695, longitude: 174.74674},

      title: 'Browns Bay',
      description: '4/26 Anzac Rd, Browns Bay, Auckland 0630',
    },
    {
      location: {latitude: -36.84459, longitude: 174.6521},
      title: 'Te Atatu',
      description: '1/543 Te Atatu Rd, Te Atatu Peninsula, Auckland 0610',
    },
    {
      location: {latitude: -38.01009, longitude: 175.32501},
      title: 'Te Awamutu',
      description: '57 Alexandra St, Te Awamutu 3800',
    },
    {
      location: {latitude: -37.699001, longitude: 176.158325},
      title: 'Tauranga',
      description: 'Westpac Centre, 573 Cameron Road, Tauranga',
    },
    {
      location: {latitude: -40.62293, longitude: 175.28582},
      title: 'Levin',
      description: '196 Oxford St, Levin 5510',
    },
    {
      location: {latitude: -40.95051, longitude: 175.6603},
      title: 'Masterton',
      description: '172 Queen St, Masterton 5810',
    },
    {
      location: {latitude: -39.63947, longitude: 176.85032},
      title: 'Hastings',
      description: '601 Karamu Rd N, Hastings, 4122',
    },
    {
      location: {latitude: -39.53666, longitude: 176.84793},
      title: 'Taradale',
      description: '303 Gloucester St, Taradale, Napier 4112',
    },

    {
      location: {latitude: -39.931461, longitude: 175.049225},
      title: 'Wanganui',
      description: '159 Victoria Ave, Whanganui, 4500',
    },

    {
      location: {latitude: -39.49168, longitude: 176.91769},
      title: 'Napier',
      description: '38 Dickens St, Napier 4110',
    },

    {
      location: {latitude: -39.62736, longitude: 176.854},
      title: 'Anatolia Distribution',
      description: '500 Williams St, Mahora, Hastings 4120',
    },

    {
      location: {latitude: -39.48093, longitude: 176.89776},
      title: 'Ahuriri',
      description: '69 Bridge Street, Ahuriri, Napier',
    },

    {
      location: {latitude: -39.500749, longitude: 176.902248},
      title: 'Marewa',
      description: '140 Kennedy Rd, Marewa, Napier 4110',
    },
  ];

  const [locArray, setLocArray] = useState([]);

  const region = {
    latitude: -36.71236,
    longitude: 174.74674,
    latitudeDelta: 20,
    longitudeDelta: 10,
  };

  const onClickMarker = marker => {
    const data = {
      latitude: marker?.location?.latitude,
      longitude: marker?.location?.longitude,
    };

    setLocArray(data);
  };

  const onOpenMaps = () => {
    if (locArray.length == 0) {
      alert('Please Select Location');
      return;
    }
    var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    var url = scheme + `${locArray?.latitude},${locArray?.longitude}`;
    Linking.openURL(url);
  };

  const onOpenDirection = () => {
    if (locArray.length == 0) {
      alert('Please Select Location to get Directions');
      return;
    }
    const latLng = `${locArray?.latitude},${locArray?.longitude}`;
    Linking.openURL(`google.navigation:q=${latLng}`);
  };

  return (
    <View>
      <View style={styles.topView}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            source={require('../assets/Google.png')}
            style={{height: 17, width: 50, marginLeft: 10, marginTop: 5}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={onOpenDirection} style={styles.imageView}>
            <Image
              source={require('../assets/Direction.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onOpenMaps} style={styles.imageView}>
            <Image
              source={require('../assets/Maps.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <MapView style={styles.absoluteFill} region={region}>
        {coordinate.map((marker, index) => (
          <MapView.Marker
            key={index}
            coordinate={marker.location}
            title={marker.title}
            description={marker.description}
            pinColor={'green'}
          />
        ))}
      </MapView>
    </View>
  );
};
export default Maps;

const styles = StyleSheet.create({
  absoluteFill: {
    height: '100%',
    width: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  topView: {
    height: 35,
    flexDirection: 'row',
  },
  imageView: {
    marginRight: 15,
  },
});
