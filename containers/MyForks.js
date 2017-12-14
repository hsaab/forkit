import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';

const MyForks = ({}) => {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
          <View style={styles.forksBar}>
            <TouchableOpacity style={styles.me}>
              <Text>Me</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.groups}>
              <Text>Groups</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.forksContainer}>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.restaurantPic} >
                <Image style={{height: verticalScale(80), width: scale(80), borderRadius: 50}} source={require("../assets/whiteman.png")}/>
              </View>
              <View style={styles.restaurantInfo}>
                <View style={styles.restaurantName}>
                  <Text>Restaurant Name</Text>
                </View>
                <View style={styles.restaurantDetails}>
                  <View style={styles.restaurantStats}>
                    <Text>Star Star Star Star Star</Text>
                    <Text>1,000 Reviews on Yelp</Text>
                    <Text>100 miles from you</Text>
                    <Text>Click restaurant to go to post page</Text>
                  </View>
                  <View style={styles.eatIcon}>
                    <Image style={{height: verticalScale(70), width: scale(70), borderRadius: 50}} source={require("../assets/ForkandKnifeTransparent.png")}/>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.restaurantPic} >
                <Image style={{height: verticalScale(80), width: scale(80), borderRadius: 50}} source={require("../assets/whiteman.png")}/>
              </View>
              <View style={styles.restaurantInfo}>
                <View style={styles.restaurantName}>
                  <Text>Restaurant Name</Text>
                </View>
                <View style={styles.restaurantDetails}>
                  <View style={styles.restaurantStats}>
                    <Text>Star Star Star Star Star</Text>
                    <Text>1,000 Reviews on Yelp</Text>
                    <Text>100 miles from you</Text>
                  </View>
                  <View style={styles.eatIcon}>
                    <Image style={{height: verticalScale(70), width: scale(70), borderRadius: 50}} source={require("../assets/ForkandKnifeTransparent.png")}/>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.restaurantPic} >
                <Image style={{height: verticalScale(80), width: scale(80), borderRadius: 50}} source={require("../assets/whiteman.png")}/>
              </View>
              <View style={styles.restaurantInfo}>
                <View style={styles.restaurantName}>
                  <Text>Restaurant Name</Text>
                </View>
                <View style={styles.restaurantDetails}>
                  <View style={styles.restaurantStats}>
                    <Text>Star Star Star Star Star</Text>
                    <Text>1,000 Reviews on Yelp</Text>
                    <Text>100 miles from you</Text>
                  </View>
                  <View style={styles.eatIcon}>
                    <Image style={{height: verticalScale(70), width: scale(70), borderRadius: 50}} source={require("../assets/ForkandKnifeTransparent.png")}/>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}

MyForks.propTypes = {
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
  forksBar: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderBottomWidth: moderateScale(1),
    width: scale(375)
  },
  me: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  groups: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  forksContainer: {
    flex: 6,
  },
  listItem: {
    borderBottomColor: 'white',
    borderBottomWidth: moderateScale(1),
    width: scale(375),
    flex: 1,
    flexDirection: 'row'
  },
  restaurantPic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  restaurantInfo: {
    flex: 2
  },
  restaurantName: {
    flex: 1,
    borderBottomColor: 'white',
    borderBottomWidth: moderateScale(1),
    justifyContent: 'center'
  },
  restaurantDetails: {
    flex: 3,
    alignItems: 'center',
    flexDirection: 'row'
  },
  restaurantStats: {
    flex: 2
  },
  eatIcon: {
    flex: 1
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyForks);
