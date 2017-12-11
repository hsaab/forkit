import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';

export default class Tabbar extends React.Component {
  constructor() {
    super()
    this.state = {
      newsfeedColor: "#FFFFFF",
      discoverColor: '#EAEAEA',
      profileColor: "#FFFFFF",
      searchColor: "#FFFFFF"
    }
  }

  selectNewsfeed(fn) {
    this.setState({
      newsfeedColor: '#EAEAEA',
      discoverColor: "#FFFFFF",
      profileColor: "#FFFFFF",
      searchColor: "#FFFFFF"
    })
    fn()
  }

  selectDiscover(fn) {
    this.setState({
      newsfeedColor: '#FFFFFF',
      discoverColor: "#EAEAEA",
      profileColor: "#FFFFFF",
      searchColor: "#FFFFFF"
    })
    fn()
  }

  selectProfile(fn) {
    this.setState({
      newsfeedColor: '#FFFFFF',
      discoverColor: "#FFFFFF",
      profileColor: "#EAEAEA",
      searchColor: "#FFFFFF"
    })
    fn()
  }

  selectSearch(fn) {
    this.setState({
      newsfeedColor: '#FFFFFF',
      discoverColor: "#FFFFFF",
      profileColor: "#FFFFFF",
      searchColor: "#EAEAEA"
    })
    fn()
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{
          height: verticalScale(50),
          width: scale(375/4),
          backgroundColor: this.state.newsfeedColor,
          borderColor: '#95989A',
          borderTopWidth: 0.5,
          alignItems: 'center',
          justifyContent: 'center'
          }}
          onPress={() => this.selectNewsfeed(Actions.resultlightbox)}>
          <Image style={styles.logoNewsfeed} source={require("../assets/newsfeed.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={{
          height: verticalScale(50),
          width: scale(375/4),
          backgroundColor: this.state.discoverColor,
          borderColor: '#95989A',
          borderTopWidth: 0.5,
          alignItems: 'center',
          justifyContent: 'center'
          }}
          onPress={() => this.selectDiscover(Actions.discover)}>
          <Image style={styles.logoDiscover} source={require("../assets/discoverIcon.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={{
          height: verticalScale(50),
          width: scale(375/4),
          backgroundColor: this.state.profileColor,
          borderColor: '#95989A',
          borderTopWidth: 0.5,
          alignItems: 'center',
          justifyContent: 'center'
          }}
          onPress={() => this.selectProfile(Actions.profile)}>
          <Image style={styles.logoProfile} source={require("../assets/profile.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={{
          height: verticalScale(50),
          width: scale(375/4),
          backgroundColor: this.state.searchColor,
          borderColor: '#95989A',
          borderTopWidth: 0.5,
          alignItems: 'center',
          justifyContent: 'center'
          }}
          onPress={() => this.selectSearch(Actions.search)}>
          <Image style={styles.logoSearch} source={require("../assets/search.png")}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(50),
    width: scale(375),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  logoNewsfeed: {
    height: verticalScale(23),
    width: scale(23),
    opacity: 0.52
  },
  logoDiscover: {
    height: verticalScale(27),
    width: scale(27),
    opacity: 0.52
  },
  logoProfile: {
    height: verticalScale(25),
    width: scale(25),
    opacity: 0.52
  },
  logoSearch: {
    height: verticalScale(25),
    width: scale(25),
    opacity: 0.52
  }
});
