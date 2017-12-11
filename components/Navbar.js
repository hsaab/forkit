import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';

export default class Navbar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.hasBack ? <TouchableOpacity style={styles.back} onPress={Actions.listresults}><Text style={styles.textStyle}>-Back-</Text></TouchableOpacity> : null}
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
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 0.15,
    flexDirection: 'row'
  },
  logo: {
    height: verticalScale(40),
    width: scale(65),
    bottom: verticalScale(7)
  },
  back: {
    position: 'absolute',
    top: verticalScale(32),
    left: scale(12)
  },
  textStyle: {
    fontSize: moderateScale(20),
    fontFamily: 'Futura'
  }
});
