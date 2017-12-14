import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';

const Profile = ({}) => {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
          <View style={styles.userContainer}>
            <View style={styles.profilePicture}>
              <Image style={{height: verticalScale(80), width: scale(80), borderRadius: 50}} source={require("../assets/whiteman.png")}/>
            </View>
            <View style={styles.profileDetails}>
              <Text>USERNAME</Text>
              <Text>some other stuff</Text>
              <TouchableOpacity onPress={Actions.preferences}><Text>Edit Preferences HERE</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.topContainer}>
            <View style={styles.icon}>
              <TouchableOpacity onPress={Actions.favoritelist}><Text>FAVORITES</Text></TouchableOpacity>
            </View>
            <View style={styles.icon}>
              <TouchableOpacity onPress={Actions.myforks}><Text>FORKS</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.icon}>
              <TouchableOpacity onPress={Actions.friendlist}><Text>FRIENDS</Text></TouchableOpacity>
            </View>
            <View style={styles.icon}>
              <TouchableOpacity onPress={Actions.personaldata}><Text>DATA</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
}

Profile.propTypes = {
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
  userContainer :{
    flex: 1,
    borderBottomColor: 'white',
    borderBottomWidth: moderateScale(1),
    width: scale(375),
    flexDirection: 'row'
  },
  topContainer :{
    flex: 1,
    flexDirection: 'row'
  },
  bottomContainer :{
    flex: 1,
    flexDirection: 'row'
  },
  profilePicture: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileDetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
