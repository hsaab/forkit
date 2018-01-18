import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
const { Location, Permissions } = Expo;
import PropTypes from 'prop-types';
import axios from 'axios';

class DiscoverHome extends Component {

  async singlePlayerButton(ev) {
    ev.preventDefault();
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      // navigator.geolocation.getCurrentPosition());
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
      <View style={styles.container}>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover_Party.png")}/>
          <TouchableOpacity>
            <View style={styles.addContainer}>
              <Image style={styles.addIcon} source={require("../assets/addFriends.png")}/>
            </View>
          </TouchableOpacity>
          <View style={styles.discoverHead}>
            <Text style={styles.discoverText}>Party</Text>
          </View>
          <TouchableOpacity style={styles.playButton} onPress={Actions.myevents}>
            <View style={styles.imageContainer}>
              <Image style={styles.statusIcon} source={require("../assets/eventstatusWhite.png")}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.playText}>My Events</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton} onPress={Actions.eventform} >
            <View style={styles.imageContainer}>
              <Image style={styles.multiIcon} source={require("../assets/groupWhite.png")}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.playText}>Multiplayer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton} onPress={(ev) => this.singlePlayerButton(ev)}>
            <View style={styles.imageContainer}>
              <Image style={styles.singleIcon} source={require("../assets/single.png")}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.playText}>Singleplayer</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
    margin: moderateScale(18)
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
