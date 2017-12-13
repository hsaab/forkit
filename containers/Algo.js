import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class Algo extends React.Component {
  constructor() {
    super()
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount() {
    this.animate()
    axios.get(`https://guarded-dawn-44803.herokuapp.com/yelp/restaurants/?price=${this.props.finalState.price}&distance=${this.props.finalState.distance}&cuisine=${this.props.finalState.ethnic}&latitude=${this.props.location.latitude}&longitude=${this.props.location.longitude}`)
    .then((result) => {
      let shuffled = shuffle(result.data);
      let three = [shuffled[0], shuffled[1], shuffled[2]];
      this.props.listResults(three);
      console.log(three);
      Actions.listresults();
    })
    .catch((err) => {
      console.log('Algo error', err);
    })
  }

  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }

  render() {
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0, 1]
    })

    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
          <TouchableOpacity onPress={Actions.listresults}>
            <Image style={styles.logotext} source={require("../assets/DesktopCopy3trans.png")}/>
          </TouchableOpacity>
          <Animated.Image
            style={{
              opacity,
              height: verticalScale(350),
              width: scale(350),
              bottom: verticalScale(30)}}
              resizeMode={'contain'}
              source={require("../assets/algo.png")}/>
        </View>
      </View>
    );
  }
}

Algo.propTypes = {
  listResults: PropTypes.func
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      location: state.area,
      finalState: state.yelp
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      listResults: (result) => dispatch({type: 'RESULTS', results: result})
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
    height: verticalScale(667-70),
    width: scale(375),
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-70),
    width: scale(375)
  },
  logotext: {
    height: verticalScale(200),
    width: scale(300)
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Algo);
