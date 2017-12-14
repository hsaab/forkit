import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, WebView, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.js';
import MinibarResults from '../components/MinibarResults.js';
import axios from 'axios';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import fourStars from "../assets/yelp_stars/web_and_ios/small/small_4.png";
import fourHalfStars from "../assets/yelp_stars/web_and_ios/small/small_4_half.png";
import fiveStars from "../assets/yelp_stars/web_and_ios/small/small_5.png";

class RestResult extends React.Component {
  nameCheck(name) {
    if(name.length <= 18) {
      return name;
    }
    if(name.length > 18) {
      return name.slice(0,15) + '...'
    }
  }

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

  handleResults(ev) {
    ev.preventDefault();
    this.props.getSingle(this.props.restaurant);
    Actions.singleresult();
  }

  handleMenu(name) {
    var url = `https://guarded-dawn-44803.herokuapp.com/yelp/scraping?name=${name}`
    axios.get(url)
    .then(response => {
      // response.data.url
      this.props.menu(response.data.url);
      if (response.data.url) {
        Actions.menu()
      } else {
        Alert.alert('Oops', 'We could not find a menu for this restaurant. Please try clicking on Yelp on the next page!', {text: 'Ok'})
      }
    })
    .catch(e => {
      console.log(e);
    })
  }

  render() {
    return (
      <TouchableOpacity style={this.props.border ? styles.listItem : styles.listItemNoBorder}
        onPress={(ev) => this.handleResults(ev)}>
        <View style={styles.restaurantPic} >
          <Image style={styles.restaurantIcon} source={{uri: this.props.img}}/>
        </View>
        <View style={styles.restaurantInfo}>
          <View style={styles.restaurantNameContainer}>
            <View style={styles.restaurantName}>
              <Text style={styles.nameText}>{this.nameCheck(this.props.name)}</Text>
            </View>
          </View>
          <View style={styles.restaurantDetails}>
            <View style={styles.restaurantStats}>
              <Image source={this.imageMatch(this.props.rating)}/>
              <Text style={styles.textDetails}>Yelp Reviews: {this.props.reviews}</Text>
              <Text style={styles.textDetails}>Distance: {(this.props.distance*0.000621371).toPrecision(3)} miles</Text>
            </View>
            {/* <TouchableOpacity style={styles.eatIcon} onPress={() => this.handleMenu(this.props.name)}>
              <Image style={styles.menuIcon} source={require("../assets/ForkandKnifeTransparentGrey.png")}/>
            </TouchableOpacity> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

RestResult.propTypes = {
  menu: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
      restaurants: state.results
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      getSingle: (result) => dispatch({type: 'SINGLE_RESULT', result: result}),
      menu: (url) => dispatch({type: 'MENU_URL', url: url})
    };
};

const styles = StyleSheet.create({
  listItem: {
    borderBottomColor: "#ddd3dc",
    borderBottomWidth: moderateScale(0.5),
    width: scale(375),
    flex: 1,
    flexDirection: 'row'
  },
  listItemNoBorder: {
    width: scale(375),
    flex: 1,
    flexDirection: 'row'
  },
  restaurantPic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(10),
    opacity: 0.7,
  },
  restaurantIcon: {
    height: verticalScale(90),
    width: scale(90),
    borderRadius: scale(90/2),
    borderColor: 'black',
    borderWidth: 0.2
  },
  restaurantInfo: {
    flex: 3,
    paddingLeft: scale(15)
  },
  restaurantNameContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  restaurantName: {
    flex: 3,
    justifyContent: 'center'
  },
  nameText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(20)
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
    bottom: verticalScale(9)
  },
  starRating: {
    width: scale(150),
    marginBottom: verticalScale(10)
  },
  textDetails: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(16)
  },
  eatIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuIcon: {
    height: verticalScale(50),
    width: scale(50),
    borderRadius: 30
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestResult);
