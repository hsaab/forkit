import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.js';
import MinibarResults from '../components/MinibarResults.js';
import StarRating from 'react-native-star-rating';

class RestResult extends React.Component {
  constructor() {
    super()
  }

  nameCheck(name) {
    if(name.length <= 18) {
      return name;
    }
    if(name.length > 18) {
      return name.slice(0,15) + '...'
    }
  }

  handleResults(ev) {
    ev.preventDefault();
    console.log(this.props.restaurant);
    this.props.getSingle(this.props.restaurant);
    Actions.singleresult();
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
            <View style={styles.star}>
              <View>
                {/* <StarRating
                  disabled={false}
                  maxStars={1}
                  rating={0}
                  starSize={40}
                  starColor={'#ddd3dc'}
                  emptyStarColor={'#ddd3dc'}
                /> */}
              </View>
            </View>
          </View>
          <View style={styles.restaurantDetails}>
            <View style={styles.restaurantStats}>
              <View style={styles.starRating}>
                {/* <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={this.props.rating}
                  starSize={25}
                  starColor={'#ecf000'}
                  emptyStarColor={'#ecf000'}
                /> */}
              </View>
              <Text style={styles.textDetails}>Yelp Reviews: {this.props.reviews}</Text>
              <Text style={styles.textDetails}>Distance: {(this.props.distance*0.000621371).toPrecision(3)} miles</Text>
            </View>
            <TouchableOpacity style={styles.eatIcon}>
              <Image style={styles.menuIcon} source={require("../assets/ForkandKnifeTransparentGrey.png")}/>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

RestResult.propTypes = {
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      restaurants: state.results
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      getSingle: (result) => dispatch({type: 'SINGLE_RESULT', result: result})
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
