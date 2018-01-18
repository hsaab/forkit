import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import EStyleSheet from 'react-native-extended-stylesheet';

class RestSelect extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
          <Image style={styles.confetti} source={require("../assets/confetti.png")}/>
          <View style={styles.contentContainer}>
            <Text style={styles.discoverText}>Restaurant has been selected!</Text>
            <TouchableOpacity style={styles.playButton} onPress={Actions.myevents}>
              <View style={styles.textContainer}>
                <Text style={styles.playText}>Go to Restaurant</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      locationInfo: state.area,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      locationFetch: (location) => dispatch({type: 'YOU_HERE', location: location}),
      initialYelp: (area) => dispatch({type: 'INITIAL_YELP', area: area}),
      initialYelpMulti: (area) => dispatch({type: 'INITIAL_YELP_MULTI', area: area})
    };
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: verticalScale(667-50),
    width: scale(375)
  },
  confetti: {
    bottom: verticalScale(100)
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-50),
    width: scale(375)
  },
  contentContainer: {
    bottom: verticalScale(100),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  discoverText: {
    fontSize: moderateScale(43),
    fontFamily: 'Futura',
    color: 'white',
    margin: moderateScale(10),
    textAlign: 'center'
  },
  playButton: {
    width: scale(299),
    height: verticalScale(66),
    backgroundColor: 'rgba(255,255,255,.40)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: scale(327/2),
    marginTop: verticalScale(10)
  },
  imageContainer: {
    width: scale(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  playText: {
    fontSize: moderateScale(28),
    fontFamily: 'Futura',
    color: 'white',
    textAlign: 'center'
  },
  addContainer: {
    width: scale(375),
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'flex-end',
    right: scale(10)
  },
  addIcon: {
    height: verticalScale(80),
    width: scale(85),
    overflow: 'visible'
  },
  statusIcon: {
    height: verticalScale(60),
    width: scale(60),
    overflow: 'visible'
  },
  multiIcon: {
    height: verticalScale(60),
    width: scale(60),
    overflow: 'visible'
  },
  singleIcon: {
    height: verticalScale(30),
    width: scale(30),
    overflow: 'visible'
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestSelect);
