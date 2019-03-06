import React, { Component } from 'react';

import { View } from 'react-native';
import { GooglePlacesAutoComplete } from 'react-native-google-places-auto-complete'

export default class Search extends Component {
   render() {
      return <GooglePlacesAutoComplete
         placeHolder="Para onde?"
         onPress={() => {}}
         query={{
            key: 'AIzaSyBsG3J4Bz8sBxWSTl18dLj8YCKSIOaocxc',
            language: 'pt'
         }}
         textInput
      />;
   }
}
