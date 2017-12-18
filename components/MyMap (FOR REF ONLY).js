import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import { MapView } from 'expo'

export default class MyMap extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    lat: 34.5133,
    long: -94.1629
  }
}

  componentDidMount() {
    AsyncStorage.getItem('location')
    .then((result) => {
      return JSON.parse(result);
    })
    .then((object) => {this.setState({
      lat: object.latitude,
      long: object.longitude
    })})
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((success) => {
      this.setState({
        lat: success.coords.latitude,
        long: success.coords.longitude
      })
  }, (error) => {
     (console.log('There was an error finding your location!', error))
  })
}

  storeRegion(newRegion) {
    AsyncStorage.setItem('location', JSON.stringify(newRegion))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => {this.getCurrentLocation()}} style={styles.getLocationBtn}>
            <Text>Get Your Location</Text>
          </TouchableOpacity>
        </View>
        <MapView style={{flex: 7}} onRegionChangeComplete={(newRegion) => (this.storeRegion(newRegion))}
          region={{
            latitude: this.state.lat,
            longitude: this.state.long,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05
        }}>
          <MapView.Marker
            coordinate={{
              latitude: 37.771728,
              longitude: -122.409421
            }}
            pinColor={'#008000'}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  getLocationBtn: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
