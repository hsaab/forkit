import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import Dash from 'react-native-dash';

export default class Eats1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/DiscoverEat-3.png")}/>
          <View style={styles.topTile}>
            <View style={styles.rowSubContainer}>
              <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), right:scale(5) }}/>
              <Text style={styles.timer}> 00:10 </Text>
              <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), left:scale(5) }}/>
            </View>
            <Text style={styles.topText}>How far away you wanna go?</Text>
          </View>
          <View style={styles.rowSubContainer}>
            <TouchableOpacity style={styles.optionLeft}>
              <View style={styles.rowSubContainer}>
                <Image style={styles.hiker} source={require("../assets/Hikerwhite.png")}/>
                <Image style={styles.hiker} source={require("../assets/Hikerwhite.png")}/>
                <Image style={styles.hiker} source={require("../assets/Hikerwhite.png")}/>
              </View>
              <Text style={styles.optionText}>Less than 1 mile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRight}>
              <Image style={styles.car} source={require("../assets/carWhite.png")}/>
              <Text style={styles.optionText}>1 to 3 miles</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.optionBottom, styles.rowSubContainer]} onPress={Actions.algo}>
            <Text style={styles.gambleText}> Take a Gamble </Text>
            <Image style={styles.dollarSigns} source={require("../assets/red-dice-512.png")}/>
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    height: verticalScale(667-70),
    width: scale(375),
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-70),
    width: scale(375)
  },
  topTile: {
    height: verticalScale(250),
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: scale(45),
    fontFamily: 'Futura',
    color: 'white',
    textAlign: 'center'
  },
  rowSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timer: {
    fontSize: moderateScale(45),
    color: 'white',
    fontFamily: 'Futura'
  },
  optionLeft: {
    borderTopWidth: moderateScale(2),
    borderTopColor: 'white',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: 'white',
    borderRightWidth: moderateScale(1),
    borderRightColor: 'white',
    height: verticalScale(210),
    width: scale(375/2),
    justifyContent: 'center',
    alignItems: 'center',

  },
  optionRight: {
    borderTopWidth: moderateScale(2),
    borderTopColor: 'white',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: 'white',
    borderLeftWidth: moderateScale(1),
    borderLeftColor: 'white',
    height: verticalScale(210),
    width: scale(375/2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontFamily: 'Futura',
    color: 'white',
    textAlign: 'center',
    fontSize: moderateScale(35),
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10)
  },
  hiker: {
    height: verticalScale(70),
    width: scale(50)
  },
  car: {
    height: verticalScale(75),
    width: scale(100)
  },
  dollarSigns: {
    height: verticalScale(35),
    width: scale(35)
  },
  optionBottom: {
    borderTopWidth: moderateScale(1),
    borderTopColor: 'white',
    height: verticalScale(667-70-250-210),
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center',
  },
  gambleText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(38)
  }
});
