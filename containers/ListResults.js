import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import MinibarResults from '../components/MinibarResults.js';
import StarRating from 'react-native-star-rating';

export default class ListResults extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <MinibarResults/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/discoverHome.png")}/>
          <View style={styles.listContainer}>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.restaurantPic} >
                <Image style={styles.restaurantIcon} source={require("../assets/burger.jpg")}/>
              </View>
              <View style={styles.restaurantInfo}>
                <View style={styles.restaurantNameContainer}>
                  <View style={styles.restaurantName}>
                    <Text style={styles.textStyle}>Restaurant Name</Text>
                  </View>
                  <View style={styles.star}>
                    <View>
                      <StarRating
                        disabled={false}
                        maxStars={1}
                        rating={0}
                        starSize={40}
                        starColor={'white'}
                        emptyStarColor={'white'}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.restaurantDetails}>
                  <View style={styles.restaurantStats}>
                    <StarRating
                      disabled={true}
                      maxStars={5}
                      rating={4}
                      starSize={20}
                      starColor={'#00042E'}
                      emptyStarColor={'#00042E'}
                    />
                    <Text style={styles.textStyle}>1,000 Reviews on Yelp</Text>
                    <Text style={styles.textStyle}>100 miles from you</Text>
                  </View>
                  <View style={styles.eatIcon}>
                    <Image style={styles.menuIcon} source={require("../assets/ForkandKnifeTransparent.png")}/>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.restaurantPic} >
                <Image style={styles.restaurantIcon} source={require("../assets/burger.jpg")}/>
              </View>
              <View style={styles.restaurantInfo}>
                <View style={styles.restaurantNameContainer}>
                  <View style={styles.restaurantName}>
                    <Text style={styles.textStyle}>Restaurant Name testing with longer name because</Text>
                  </View>
                  <View style={styles.star}>
                    <View>
                      <StarRating
                        disabled={false}
                        maxStars={1}
                        rating={0}
                        starSize={40}
                        starColor={'white'}
                        emptyStarColor={'white'}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.restaurantDetails}>
                  <View style={styles.restaurantStats}>
                    <StarRating
                      disabled={true}
                      maxStars={5}
                      rating={4}
                      starSize={20}
                      starColor={'#00042E'}
                      emptyStarColor={'#00042E'}
                    />
                    <Text style={styles.textStyle}>1,000 Reviews on Yelp</Text>
                    <Text style={styles.textStyle}>100 miles from you</Text>
                  </View>
                  <View style={styles.eatIcon}>
                    <Image style={styles.menuIcon} source={require("../assets/ForkandKnifeTransparent.png")}/>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.restaurantPic} >
                <Image style={styles.restaurantIcon} source={require("../assets/burger.jpg")}/>
              </View>
              <View style={styles.restaurantInfo}>
                <View style={styles.restaurantNameContainer}>
                  <View style={styles.restaurantName}>
                    <Text style={styles.textStyle}>Restaurant Name</Text>
                  </View>
                  <View style={styles.star}>
                    <View>
                      <StarRating
                        disabled={false}
                        maxStars={1}
                        rating={0}
                        starSize={40}
                        starColor={'white'}
                        emptyStarColor={'white'}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.restaurantDetails}>
                  <View style={styles.restaurantStats}>
                    <StarRating
                      disabled={true}
                      maxStars={5}
                      rating={4}
                      starSize={20}
                      starColor={'#00042E'}
                      emptyStarColor={'#00042E'}
                    />
                    <Text style={styles.textStyle}>1,000 Reviews on Yelp</Text>
                    <Text style={styles.textStyle}>100 miles from you</Text>
                  </View>
                  <View style={styles.eatIcon}>
                    <Image style={styles.menuIcon} source={require("../assets/ForkandKnifeTransparent.png")}/>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.restart} onPress={Actions.discover}>
              <Text style={styles.buttonStyle}>Restart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gamble} onPress={Actions.singleresult}>
              <Text style={styles.buttonStyle}>Gamble</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  background: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    height: verticalScale(667-70-50-50),
    width: scale(375)
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-70-50-50),
    width: scale(375)
  },
  listContainer: {
    flex: 6,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  listItem: {
    borderBottomColor: "#00042E",
    borderBottomWidth: moderateScale(2),
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
    flex: 3
  },
  restaurantNameContainer: {
    flex: 2,
    borderBottomColor: "#00042E",
    borderBottomWidth: moderateScale(2),
    flexDirection: 'row'
  },
  restaurantName: {
    flex: 3,
    justifyContent: 'center'
  },
  star: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  restaurantDetails: {
    flex: 3,
    flexDirection: 'row'
  },
  restaurantStats: {
    flex: 3,
    justifyContent: 'center',
  },
  eatIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  restart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#00042E",
    borderRadius: 20,
    margin: moderateScale(10)
  },
  gamble: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#00042E",
    borderRadius: 20,
    margin: moderateScale(10)
  },
  textStyle: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(16)
  },
  buttonStyle: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(20)
  },
  restaurantIcon: {
    height: verticalScale(80),
    width: scale(80),
    borderRadius: 40,
    opacity: 0.7
  },
  menuIcon: {
    height: verticalScale(60),
    width: scale(60),
    borderRadius: 30
  }
});
