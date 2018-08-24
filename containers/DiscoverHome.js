import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
const { Location, Permissions } = Expo;
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';
import axios from 'axios';
import DiscoverEats from '../components/DiscoverEats.js';
import DiscoverExp from '../components/DiscoverExp.js';
import DiscoverExpl from '../components/DiscoverExpl.js';
import DiscoverPlay from '../components/DiscoverPlay.js';
import DiscoverParty from '../components/DiscoverParty.js';

class DiscoverHome extends Component {

  async singlePlayerButton(ev) {
    ev.preventDefault();
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
      this.props.locationFetch(location.coords);
      let coords = {latitude: location.coords.latitude, longitude: location.coords.longitude};
      axios.get(`https://guarded-dawn-44803.herokuapp.com/yelp/initialfetch?latitude=${coords.latitude}&longitude=${coords.longitude}&radius=1000`)
      .then((resp) => {
        let cuisines = {cuisines: resp.data};
        this.props.initialYelp(cuisines);
        Actions.eats1();
      })
      .catch((err) => console.log('Initial yelp error', err));
    } else {
      console.log("Access not granted")
    }
  }

  render() {
    return (
      <Swiper dotColor={'rgba(255,255,255,.40)'} activeDotColor={'white'}>
        <DiscoverEats/>
        <DiscoverExp/>
        <DiscoverExpl/>
        <DiscoverPlay/>
        <DiscoverParty/>
      </Swiper>
    );
  }
}

DiscoverHome.propTypes = {
  locationFetch: PropTypes.func,
  initialYelp: PropTypes.func
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      locationInfo: state.area,
      // searchArea: state.yelp
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      locationFetch: (location) => dispatch({type: 'YOU_HERE', location: location}),
      initialYelp: (area) => dispatch({type: 'INITIAL_YELP', area: area}),
      initialYelpMulti: (area) => dispatch({type: 'INITIAL_YELP_MULTI', area: area})
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
    height: verticalScale(667-60),
    width: scale(375)
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-60),
    width: scale(375)
  },
  discoverText: {
    fontSize: moderateScale(80),
    fontFamily: 'Futura',
    color: 'white',
    margin: moderateScale(10)
  },
  playButton: {
    width: scale(327),
    height: verticalScale(100),
    backgroundColor: 'rgba(255,255,255,.40)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: scale(327/2),
    marginBottom: verticalScale(20),
  },
  imageContainer: {
    width: scale(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    width: scale(327-100),
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  playText: {
    fontSize: moderateScale(35),
    fontFamily: 'Futura',
    color: 'white',
  },
  addContainer: {
    width: scale(375),
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'flex-end',
    right: scale(10)
  },
  addIcon: {
    height: verticalScale(80),
    width: scale(85),
    overflow: 'visible'
  },
  statusIcon: {
    height: verticalScale(60),
    width: scale(60),
    overflow: 'visible'
  },
  multiIcon: {
    height: verticalScale(60),
    width: scale(60),
    overflow: 'visible'
  },
  singleIcon: {
    height: verticalScale(30),
    width: scale(30),
    overflow: 'visible'
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DiscoverHome);
