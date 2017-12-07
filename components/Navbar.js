import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';

export default class Navbar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/DesktopCopy2Black.png")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(70),
    width: scale(375),
    backgroundColor: "#EBEBEB",
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomColor: 'black',
    borderBottomWidth: 0.15 
  },
  logo: {
    height: verticalScale(40),
    width: scale(65),
    bottom: scale(7)
  }
});
