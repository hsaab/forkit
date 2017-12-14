import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';

const DiscoverHome = ({ user }) => {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
          <View style={styles.discoverHead}>
            <Text style={styles.discoverText}>Eats</Text>
          </View>
          <TouchableOpacity style={styles.playButton} onPress={Actions.myevents}>
            <Text style={styles.playText}>My Events</Text>
            <Image style={styles.statusIcon} source={require("../assets/eventstatusWhite.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton} onPress={Actions.eventform} >
            <Text style={styles.playText}> Multiplayer </Text>
            <Image style={styles.multiIcon} source={require("../assets/groupWhite.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton} onPress={Actions.eats1}>
            <Text style={styles.playText}> Singleplayer</Text>
            <Image style={styles.singleIcon} source={require("../assets/single.png")}/>
          </TouchableOpacity>
        </View>
      </View>
    );
}

DiscoverHome.propTypes = {
};

const mapStateToProps = (state) => {
    return {
      user: state.user
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: verticalScale(667-70-50),
    width: scale(375)
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-70-50),
    width: scale(375)
  },
  discoverHead: {
    flex: 1,
    justifyContent: 'center',
  },
  discoverText: {
    fontSize: moderateScale(80),
    fontFamily: 'Futura',
    color: 'white',
  },
  playButton: {
    width: scale(315),
    backgroundColor: 'rgba(255,255,255,.40)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: scale(40),
    flex: 0.5,
    marginBottom: verticalScale(50),
  },
  playText: {
    fontSize: moderateScale(25),
    fontFamily: 'Futura',
    color: 'white',
    alignSelf: 'center',
    left: scale(20)
  },
  statusIcon: {
    height: verticalScale(100),
    width: scale(85),
  },
  multiIcon: {
    height: verticalScale(100),
    width: scale(100),
  },
  singleIcon: {
    height: verticalScale(60),
    width: scale(40),
    right: scale(30),
    top: verticalScale(10)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DiscoverHome);
