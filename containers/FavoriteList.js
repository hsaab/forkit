import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';

const FavoriteList = ({}) => {
    return (
      <View style={styles.container}>
        <Navbar/>
        <ScrollView>
          <View style={styles.background}>
            <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
            <View style={styles.listContainer}>
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
                      <Text>Click restaurant to go to restaurant page</Text>
                      <Text>Click ball to remove from favorites</Text>
                    </View>
                    <TouchableOpacity style={styles.starIcon}>
                      <Image style={{height: verticalScale(70), width: scale(70), borderRadius: 50}} source={require("../assets/soccer.png")}/>
                    </TouchableOpacity>
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
                    <TouchableOpacity style={styles.starIcon}>
                      <Image style={{height: verticalScale(70), width: scale(70), borderRadius: 50}} source={require("../assets/soccer.png")}/>
                    </TouchableOpacity>
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
                    <TouchableOpacity style={styles.starIcon}>
                      <Image style={{height: verticalScale(70), width: scale(70), borderRadius: 50}} source={require("../assets/soccer.png")}/>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
}

FavoriteList.propTypes = {
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
  listContainer: {
    flex: 1,
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
  starIcon: {
    flex: 1
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoriteList);
