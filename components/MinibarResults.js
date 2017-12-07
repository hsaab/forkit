import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Dash from 'react-native-dash';

export default class MinibarResults extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.subContainer}>
          <Text style={styles.minibarText}>Results</Text>
          <Dash dashGap={0} dashColor={'#F63535'} style={{width:scale(55), height:verticalScale(1), top: verticalScale(2)}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subContainer} onPress={Actions.listmap}>
          <Text style={styles.minibarText}>Map It</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(50),
    width: scale(375),
    backgroundColor: "#00042E",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  minibarText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(18),
    textAlign: 'center'
  }
});
