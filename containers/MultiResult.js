import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import {MapView} from 'expo';
import StarRating from 'react-native-star-rating';
import Stars from 'react-native-stars';
import Communications from 'react-native-communications';
import axios from 'axios';
import PropTypes from 'prop-types';
import fourStars from "../assets/yelp_stars/web_and_ios/small/small_4.png";
import fourHalfStars from "../assets/yelp_stars/web_and_ios/small/small_4_half.png";
import fiveStars from "../assets/yelp_stars/web_and_ios/small/small_5.png";

class MultiResult extends Component {
  imageMatch(rating) {
    switch(rating) {
      case (4 || 4.1 || 4.2 || 4.3 || 4.4):
        let fourImage = fourStars;
        return fourImage;
      case (4.5 || 4.6 || 4.7 || 4.8 || 4.9):
        let fourHalfImage = fourHalfStars;
        return fourHalfImage;
      case (5):
        let fiveImage = fiveStars;
        return fiveImage;
       default:
        let image = fourStars;
        return image;
      }
    }


  handleOpenTable() {
    var address = {street: this.props.single.singleResult.location.address1, city: this.props.single.singleResult.location.city, zip: this.props.single.singleResult.location.zip_code, state: this.props.single.singleResult.location.state}
    // var address = {street: '438 Geary St', city: 'San Francisco', zip: '94102', state: 'CA'};
    // console.log('ADDRESSSSSSSSS', address)
    var url = `http://opentable.herokuapp.com/api/restaurants?address=${address.street}&zip=${address.zip}&state=${address.state}&city=${address.city}`;
    axios.get(url)
    .then(response => {
      // console.log(response.data)
      // if (response.data.restaurants.length > 0) {
      //   var restaurants = response.data.restaurants;
      //   for (var i = 0; i < restaurants.length; i++) {
      //     var restaurantName = restaurants[i].split(' ');
      //     for (var j = 0; j < restaurantName.length; j++) {
      //       if (this.props.single.results[0].name.indexOf(restaurantName[i] > -1)) {
      //         this.props.openTable(restaurantName[i].mobile_reserve_url)
      //         Actions.opentable();
      //       }
      //     }
      //   }
      if (response.data.restaurants.length > 0) {
        var restaurants = response.data.restaurants;
        var yelpName = this.props.single.singleResult;
        for (var i = 0; i < restaurants.length; i++) {
          var restaurantName = restaurants[i].name;
          var resSplit = restaurantName.split(' ');
          for (var j = 0; j < resSplit.length; j++) {
            if (restaurantName.indexOf(resSplit[i]) > -1) {
              this.props.openTable(restaurants[i].reserve_url);
              Actions.openTable();
              break;
            }
          }
        }
      } else {
        Alert.alert('Oops', 'No OpenTable available for this restaurant. Please press on Yelp for more information', {text: 'Ok'})
      }
    })
    .catch(e => {
      console.log(e)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={{uri: this.props.single.singleResult.image_url}}/>
          <View style={styles.header}>
            <TouchableOpacity onPress={Actions.listresults}><Text style={styles.backText}>-Back-</Text></TouchableOpacity>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{this.props.single.singleResult.name}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.left}>
              <Text style={styles.textStyle}>{this.props.single.singleResult.categories[0].title}</Text>
              <Image style={styles.starMe} source={this.imageMatch(this.props.single.singleResult.rating)}/>
                <Text style={styles.detailText}>{this.props.single.singleResult.review_count} Yelp reviews</Text>
                <Text style={styles.detailText}>{(this.props.single.singleResult.distance*0.000621371).toPrecision(3)} miles away</Text>
            </View>
          </View>
          <View style={styles.actionBar}>
            <View style={styles.leftAction}>
              <TouchableOpacity style={styles.call} onPress={() => Communications.phonecall(this.props.single.singleResult.display_phone, true)}>
                <Image style={styles.phoneIcon} source={require("../assets/phone.png")}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.yelp} onPress={Actions.yelp}>
                <Image style={styles.yelpIcon} source={require("../assets/yelp.jpg")}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.openTable} onPress={() => this.handleOpenTable()}>
                <Image style={styles.openTableIcon} source={require("../assets/openTable.png")}/>
              </TouchableOpacity>
            </View>
            <View style={styles.rightAction}>
              <View style={styles.star}>
                <Image style={styles.starIcon} source={require('../assets/stariconMGrey.png')}/>
              </View>
            </View>
          </View>
          <View style={styles.address}>
            <Text style={styles.addressText}>{this.props.single.singleResult.location.address1}, {this.props.single.singleResult.location.city}, {this.props.single.singleResult.location.state}, {this.props.single.singleResult.location.zip_code}</Text>
          </View>
          <View style={styles.mapContainer}>
            <MapView
              style={{ width: scale(375), height: verticalScale(246) }}
              region={{
                latitude: this.props.location.latitude,
                longitude: this.props.location.longitude,
                latitudeDelta: .05,
                longitudeDelta: .05,
              }}>
              <MapView.Marker
                 coordinate={{
                   latitude: this.props.single.singleResult.coordinates.latitude,
                   longitude: this.props.single.singleResult.coordinates.longitude
                 }}
                 pinColor={'#008000'}
                 />
               <MapView.Marker
                 coordinate={{
                   latitude: this.props.location.latitude,
                   longitude: this.props.location.longitude
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
}

MultiResult.propTypes = {
  openTable: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
      location: state.area,
      single: state.results
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      openTable: (url) => dispatch({type: 'OPENTABLE_URL', url: url})
    };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  background: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    height: verticalScale(667-50),
    width: scale(375)
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667/2),
    width: scale(375),
    opacity: 0.3
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: scale(375),
    padding: scale(12)
  },
  detailsContainer: {
    flex: 3,
    width: scale(375/2),
    flexDirection: 'row'
  },
  mapContainer: {
    flex: 7,
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameContainer: {
    flex: 1,
    width: scale(375),
    paddingLeft: scale(15),
    bottom: verticalScale(5),
    alignItems: 'flex-start'
  },
  forkContainer: {
    flex: 2,
    width: scale(375)
  },
  star: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  left: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingLeft: scale(15),
  },
  right: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  leftAction: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  rightAction: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: scale(10)
  },
  details: {
    flex: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  yelp: {
    width: scale(50),
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d32323',
    borderRadius: moderateScale(25),
    margin: moderateScale(2)
  },
  openTable: {
    width: scale(50),
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(25),
    margin: moderateScale(2)
  },
  call: {
    width: scale(50),
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(25),
    margin: moderateScale(2)
  },
  textStyle: {
    fontSize: moderateScale(18),
    fontFamily: 'Futura',
    color: '#646464'
  },
  detailText: {
    fontSize: moderateScale(16),
    fontFamily: 'Futura',
    color: '#646464'
  },
  backText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(18)
  },
  nameText: {
    fontSize: moderateScale(25),
    fontFamily: 'Futura',
    color: '#646464',
  },
  yelpIcon: {
    height: verticalScale(16),
    width: scale(40),
  },
  openTableIcon: {
    height: verticalScale(20),
    width: scale(45),
  },
  phoneIcon: {
    height: verticalScale(25),
    width: scale(19)
  },
  forkit: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#00042E",
  },
  logoText: {
    height: verticalScale(90),
    width: scale(275),
    bottom: verticalScale(5)
  },
  actionBar: {
    flex: 2,
    width: scale(375),
    flexDirection: 'row',
  },
  address: {
    flex: 1,
    width: scale(375),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd3dc',
  },
  addressText: {
    fontFamily: 'Futura',
    color: '#646464'
  },
  restaurantStats: {
    flex: 2,
    paddingRight: scale(20),
    justifyContent: 'space-around'
  },
  rating: {
    width: scale(150)
  },
  starMe: {
    width: scale(120),
    height: verticalScale(20),
    overflow: 'visible'
  },
  starIcon: {
    width: scale(40),
    height: verticalScale(40),
    overflow: 'visible'
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MultiResult);
