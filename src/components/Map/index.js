import React, { Component } from 'react';
import MapView from 'react-native-maps'
import { View } from 'react-native';

export default class Map extends Component {
   render() {
      return <View>
         <MapView
            style={{ flex: 1 }}
            region={{
               latitude: -28.6885917,
               longitude: -49.3847911,
               latitudeDelta: 0.0143,
               longitudeDelta: 0.0134
            }}
            showsUserLocation
            loadingEnabled
         >
         </MapView>
      </View>;
   }
}
