import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import MinibarMap from '../components/MinibarMap.js';
import {MapView} from 'expo';

export default class ListMap extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <MinibarMap/>
        <View style={styles.background}>
          <View>
            <MapView
              style={styles.backgroundColor}
              region={{
                latitude: 37.771728,
                longitude: -122.409421,
                latitudeDelta: .05,
                longitudeDelta: .05,
              }}
              >
                <MapView.Marker
                  coordinate={{
                    latitude: 37.771728,
                    longitude: -122.409421
                  }}
                  pinColor={'#008000'}
                />
                <MapView.Marker
                  coordinate={{
                    latitude: 37.760602,
                    longitude: -122.419421
                  }}
                />
                <MapView.Marker
                  coordinate={{
                    latitude: 37.783344,
                    longitude: -122.419115
                  }}
                />
                <MapView.Marker
                  coordinate={{
                    latitude: 37.781202,
                    longitude: -122.411284
                  }}
                />
              </MapView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  background: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    height: verticalScale(667-70-50-50),
    width: scale(375)
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-70-50-50),
    width: scale(375)
  },
});
