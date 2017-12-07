import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';

export default class DiscoverHome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
          <Text style={styles.eatText}>Eats</Text>
          <TouchableOpacity style={styles.playButton} onPress={Actions.eats1}>
            <Text style={styles.playText}> Single Player </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButtonBottom} onPress={Actions.eventform}>
            <Text style={styles.playText}> Multiplayer </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: verticalScale(667-70-50),
    width: scale(375),
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-70-50),
    width: scale(375)
  },
  eatText: {
    fontSize: scale(60),
    fontFamily: 'Futura',
    color: 'white',
    bottom: verticalScale(10)
  },
  playButton: {
    height: verticalScale(35),
    width: scale(175),
    backgroundColor: 'rgba(255,255,255,.40)',
    justifyContent: 'center',
    borderRadius: 20,
  },
  playButtonBottom: {
    height: verticalScale(35),
    width: scale(175),
    backgroundColor: 'rgba(255,255,255,.40)',
    justifyContent: 'center',
    borderRadius: 20,
    top: verticalScale(15)
  },
  playText: {
    fontSize: moderateScale(20),
    fontFamily: 'Futura',
    color: 'white',
    alignSelf: 'center'
  },
});
