import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import {MapView} from 'expo';
import StarRating from 'react-native-star-rating';


const SingleResult = ({}) => {
    return (
      <View style={styles.container}>
        <Navbar hasBack={true}/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/discoverHome.png")}/>
          <View style={styles.nameContainer}>
            <View style={styles.name}>
              <Text style={styles.nameText}>Shakeshack</Text>
            </View>
            <View style={styles.star}>
              <StarRating
                disabled={false}
                maxStars={1}
                rating={0}
                starSize={40}
                starColor={'#ddd3dc'}
                emptyStarColor={'#ddd3dc'}
              />
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.details}>
              <View style={styles.restaurantPic}>
                <Image style={styles.restaurantIcon} source={require("../assets/burger.jpg")}/>
              </View>
              <View style={styles.restaurantStats}>
                <Text style={styles.textStyle}>American, Burgers</Text>
                <View style={styles.rating}>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={4}
                    starSize={20}
                    starColor={'#ecf000'}
                    emptyStarColor={'#ecf000'}
                  />
                </View>
                <Text style={styles.textStyle}>1,000 reviews on Yelp</Text>
                <Text style={styles.textStyle}>1.0 miles from you</Text>
              </View>
            </View>
            <View style={styles.actionBar}>
              <TouchableOpacity style={styles.call}>
                <Image style={styles.phoneIcon} source={require("../assets/phone.png")}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.yelp}>
                <Image style={styles.yelpIcon} source={require("../assets/yelp.jpg")}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.openTable}>
                <Image style={styles.openTableIcon} source={require("../assets/openTable.png")}/>
              </TouchableOpacity>
            </View>
            <View style={styles.address}>
              <Text>450 S 9th St San Francisco, CA 94103</Text>
            </View>
          </View>
          <View style={styles.mapContainer}>
            <MapView
              style={{ width: scale(375), height: verticalScale(205) }}
              region={{
                latitude: 37.771728,
                longitude: -122.409421,
                latitudeDelta: .05,
                longitudeDelta: .05,

              }}
            >
              <MapView.Marker
                coordinate={{
                  latitude: 37.771728,
                  longitude: -122.409421
                }}
                pinColor={'#008000'}
                />
              <MapView.Marker
                coordinate={{
                  latitude: 37.760602,
                  longitude: -122.419421
                }}
                />
            </MapView>
          </View>
          <View style={styles.forkContainer}>
            <TouchableOpacity style={styles.forkit} onPress={Actions.resultlightbox}>
              <Image style={styles.logoText} source={require("../assets/DesktopCopy3trans.png")}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}

SingleResult.propTypes = {
};

const mapStateToProps = (state) => {
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
    backgroundColor: 'rgba(0, 0, 0, 1)'
  },
  background: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    height: verticalScale(667-70-50),
    width: scale(375)
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    opacity: 0.8,
    height: verticalScale(667-70-50),
    width: scale(375)
  },
  nameContainer: {
    flex: 1,
    width: scale(375),
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  detailsContainer: {
    flex: 3,
    width: scale(375),
  },
  mapContainer: {
    flex: 3,
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center'
  },
  forkContainer: {
    flex: 1,
    width: scale(375)
  },
  star: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: scale(5)
  },
  details: {
    flex: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  yelp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d32323',
    borderRadius: moderateScale(4),
    margin: moderateScale(2)
  },
  openTable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(4),
    margin: moderateScale(2)
  },
  call: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(4),
    margin: moderateScale(2)
  },
  textStyle: {
    fontSize: moderateScale(18),
    fontFamily: 'Futura',
    color: 'white'
  },
  nameText: {
    fontSize: moderateScale(35),
    fontFamily: 'Futura',
    color: 'white',
    left: scale(20),
    top: verticalScale(10)
  },
  restaurantIcon: {
    height: verticalScale(100),
    width: scale(100),
    borderRadius: moderateScale(50),
    opacity: 0.7
  },
  yelpIcon: {
    height: verticalScale(50),
    width: scale(120),
  },
  openTableIcon: {
    height: verticalScale(45),
    width: scale(120),
  },
  phoneIcon: {
    height: verticalScale(50),
    width: scale(37)
  },
  forkit: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#00042E",
    borderRadius: scale(35),
    margin: moderateScale(5),
  },
  logoText: {
    height: verticalScale(90),
    width: scale(275),
    bottom: verticalScale(5)
  },
  actionBar: {
    flex: 3,
    flexDirection: 'row',
  },
  address: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd3dc',
  },
  restaurantPic: {
    flex: 1,
    alignItems: 'center'
  },
  restaurantStats: {
    flex: 2,
    paddingRight: scale(20),
    justifyContent: 'space-around'
  },
  rating: {
    width: scale(150)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleResult);
