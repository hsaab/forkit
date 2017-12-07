import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';

export default class EventForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
          <TouchableOpacity onPress={Actions.statuspage}><Text>Event Form</Text></TouchableOpacity>
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
});
