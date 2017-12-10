import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import Dash from 'react-native-dash';

const Eats2 = ({}) => {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/DiscoverEat-2.png")}/>
          <View style={styles.topTile}>
            <View style={styles.rowSubContainer}>
              <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), right:scale(5) }}/>
              <Text style={styles.timer}> 00:10 </Text>
              <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), left:scale(5) }}/>
            </View>
            <Text style={styles.topText}>What type of cuisine?</Text>
          </View>
          <View style={styles.colSubContainer}>
            <View style={styles.rowSubContainer}>
              <TouchableOpacity style={styles.optionLeft}>
                <Image style={styles.mexican} source={require("../assets/taco.png")}/>
                <Text style={styles.optionText}>Mexican</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionRight}>
                <Image style={styles.japanese} source={require("../assets/japanese.png")}/>
                <Text style={styles.optionText}>Japanese</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowSubContainer}>
              <TouchableOpacity style={styles.optionLeft}>
                <Image style={styles.american} source={require("../assets/american.png")}/>
                <Text style={styles.optionText}>American</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionRight}>
                <Image style={styles.italian} source={require("../assets/italian.png")}/>
                <Text style={styles.optionText}>Italian</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={[styles.optionBottom, styles.rowSubContainer]} onPress={Actions.eats3}>
            <Text style={styles.gambleText}> Take a Gamble </Text>
            <Image style={styles.dollarSigns} source={require("../assets/red-dice-512.png")}/>
          </TouchableOpacity>
        </View>
      </View>
    );
}

Eats2.propTypes = {
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
    borderBottomWidth: moderateScale(1),
    borderBottomColor: 'white',
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
  colSubContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timer: {
    fontSize: moderateScale(45),
    color: 'white',
    fontFamily: 'Futura'
  },
  optionLeft: {
    borderTopWidth: moderateScale(1),
    borderTopColor: 'white',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: 'white',
    borderRightWidth: moderateScale(1),
    borderRightColor: 'white',
    height: verticalScale(105),
    width: scale(375/2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  mexican: {
    height: verticalScale(55),
    width: scale(75)
  },
  japanese: {
    height: verticalScale(55),
    width: scale(65)
  },
  american: {
    height: verticalScale(35),
    width: scale(70),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10)
  },
  italian: {
    height: verticalScale(35),
    width: scale(80),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10)
  },
  optionRight: {
    borderTopWidth: moderateScale(1),
    borderTopColor: 'white',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: 'white',
    borderLeftWidth: moderateScale(1),
    borderLeftColor: 'white',
    height: verticalScale(105),
    width: scale(375/2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(30)
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
)(Eats2);
