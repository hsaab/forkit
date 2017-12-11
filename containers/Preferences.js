import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';

const Preferences = ({}) => {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
          <View style={styles.preferenceBar}>
            <TouchableOpacity style={styles.discover}>
              <Text>Discover</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newsfeed}>
              <Text>Newsfeed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profile}>
              <Text>Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.preferenceList}>
            <View style={styles.item}>
              <View style={styles.category}>
                <Text>1. Results</Text>
              </View>
              <View style={styles.options}>
                <Text>Radio1 Always new or Radio 2 anything</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.category}>
                <Text>2. something else</Text>
              </View>
              <View style={styles.options}>
                <Text>Radio1 option 1 or Radio 2 option 2</Text>
              </View>
            </View>
          </View>
          <View style={styles.confirmContainer}>
            <TouchableOpacity style={style=styles.confirm}><Text>CONFIRM</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
}

Preferences.propTypes = {
};

const mapStateToProps = (state) => {
    // console.log(state);
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
  preferenceBar: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderBottomWidth: moderateScale(1),
    width: scale(375)
  },
  preferenceList: {
    flex: 3,
    borderBottomColor: 'white',
    borderBottomWidth: moderateScale(1),
    width: scale(375)
  },
  confirmContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  discover: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  newsfeed: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  category: {
    flex: 1
  },
  options: {
    flex: 2
  },
  confirm: {
    borderColor: 'white',
    borderWidth: moderateScale(1),
    borderRadius: 20,
    margin: 5
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Preferences);
