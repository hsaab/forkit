import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import Dash from 'react-native-dash';

const Eats1 = ({}) => {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/DiscoverEat-1.png")}/>
          <View style={styles.topTile}>
            <View style={styles.rowSubContainer}>
              <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), right:scale(5) }}/>
              <Text style={styles.timer}> 00:10 </Text>
              <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), left:scale(5) }}/>
            </View>
            <Text style={styles.topText}>How pricey are you going for?</Text>
          </View>
          <View style={styles.rowSubContainer}>
            <TouchableOpacity style={styles.optionLeft}>
              <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
              <View style={styles.rowSubContainer}>
                <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
                <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
              </View>
              <Text style={styles.optionText}>Low Key</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRight}>
              <View style={styles.rowSubContainer}>
                <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
                <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
                <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
              </View>
              <View style={styles.rowSubContainer}>
                <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
                <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
                <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
                <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
              </View>
              <Text style={styles.optionText}>Ball Out</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.optionBottom, styles.rowSubContainer]} onPress={Actions.eats2}>
            <Text style={styles.gambleText}> Take a Gamble </Text>
            <Image style={styles.dollarSigns} source={require("../assets/red-dice-512.png")}/>
          </TouchableOpacity>
        </View>
      </View>
    );
}

Eats1.propTypes = {
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

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
    fontSize: moderateScale(35)
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Eats1);
