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
      console.log(this.props.locationInfo);
      let coords = {latitude: location.coords.latitude, longitude: location.coords.longitude};
      axios.get(`https://guarded-dawn-44803.herokuapp.com/yelp/initialfetch?latitude=${coords.latitude}&longitude=${coords.longitude}&radius=1000`)
      .then((resp) => {
        console.log(resp.data);
        let cuisines = {cuisines: resp.data};
        this.props.initialYelp(cuisines);
        // console.log(this.props.searchArea);
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
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
          <Text style={styles.eatText}>Eats</Text>
          <TouchableOpacity style={styles.playButton} onPress={(ev) => this.singlePlayerButton(ev)}>
            <Text style={styles.playText}> Single Player </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButtonBottom} onPress={Actions.eventform}>
            <Text style={styles.playText}> Multiplayer </Text>
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
      initialYelp: (area) => dispatch({type: 'INITIAL_YELP', area: area})
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
  eatText: {
    fontSize: scale(60),
    fontFamily: 'Futura',
    color: 'white',
    bottom: verticalScale(10)
  },
  playButton: {
    height: verticalScale(35),
    width: scale(175),
    backgroundColor: 'rgba(255,255,255,.40)',
    justifyContent: 'center',
    borderRadius: 20,
  },
  playButtonBottom: {
    height: verticalScale(35),
    width: scale(175),
    backgroundColor: 'rgba(255,255,255,.40)',
    justifyContent: 'center',
    borderRadius: 20,
    top: verticalScale(15)
  },
  playText: {
    fontSize: moderateScale(20),
    fontFamily: 'Futura',
    color: 'white',
    alignSelf: 'center'
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DiscoverHome);
