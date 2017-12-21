import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import Dash from 'react-native-dash';
import PropTypes from 'prop-types';

class Eats1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: 1,
      end: 0,
      mins: 1/3.8,
      interval: 0
    }
  }

  handleLow(ev) {
    ev.preventDefault();
    this.props.handlePrice("1,2");
    clearInterval(this.state.interval);
    Actions.eats2();
  }

  handleHigh(ev) {
    ev.preventDefault();
    this.props.handlePrice("3,4");
    clearInterval(this.state.interval);
    Actions.eats2();
  }

  handleGamble() {
    let price = 0;
    let random = Math.random() * 2;
    if (random >= 1) {
      price = "1,2";
    } else {
      price = "3,4";
    }
  this.props.handlePrice(price);
  clearInterval(this.state.interval);
  Actions.eats2();
  }

  update() {
    // YOUR CODE HERE
    if(this.state.secondsLeft === 0) {
      this.handleGamble()
    }
    this.setState({
      secondsLeft: Math.floor((this.state.end - Date.now()) / 1000)
    });
  }

  componentDidMount() {
    this.setState({
      end: new Date(Date.now() + this.state.mins * 60000)
    });
    this.interval = setInterval(this.update.bind(this), 100);
    this.setState({
      interval: this.interval
    })
  }

  componentWillUnmount() {
    clearInterval(this.update);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/DiscoverEat-1.png")}/>
          <View style={styles.topTile}>
            <View style={styles.rowSubContainer}>
              <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), right:scale(5) }}/>
              <Text style={styles.timer}>{this.state.secondsLeft}</Text>
              <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), left:scale(5) }}/>
            </View>
            <Text style={styles.topText}>How pricey are you going for?</Text>
          </View>
          <View style={styles.colSubContainer}>
            <TouchableOpacity style={styles.option} onPress={(ev) => this.handleLow(ev)}>
              <View style={styles.dollarCols}>
                <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <View style={styles.dollarCols}>
                <View style={styles.rowSubContainer}>
                  <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
                  <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={(ev) => this.handleHigh(ev)}>
              <View style={styles.dollarCols}>
                <View style={styles.rowSubContainer}>
                  <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
                  <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
                  <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
                  <Text style={styles.plus}>+</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.option, styles.rowSubContainer]} onPress={() => this.handleGamble()}>
              <Text style={styles.gambleText}>Take a Gamble</Text>
              <Image style={styles.dice} source={require("../assets/red-dice-512.png")}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

Eats1.propTypes = {
  handlePrice: PropTypes.func
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      handlePrice: (price) => dispatch({type: 'PRICE_CHECK', price: price})
    };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: verticalScale(667),
    width: scale(375),
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667),
    width: scale(375)
  },
  topTile: {
    height: verticalScale(250),
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: scale(45),
    fontFamily: 'Futura',
    color: 'white',
    textAlign: 'center'
  },
  rowSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  colSubContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(375),
  },
  timer: {
    fontSize: moderateScale(45),
    color: 'white',
    fontFamily: 'Futura'
  },
  option: {
    borderWidth: moderateScale(3),
    borderColor: 'white',
    backgroundColor: 'rgba(255,255,255,.20)',
    height: verticalScale(80),
    width: scale(340),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: scale(50),
    margin: moderateScale(8)
  },
  optionText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(30),
    margin: scale(10)
  },
  dollarSigns: {
    height: verticalScale(50),
    width: scale(50)
  },
  dollarCols: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gambleText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(30)
  },
  dice: {
    height: verticalScale(35),
    width: scale(35)
  },
  plus: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(45),
    fontWeight: 'bold',
    left: scale(5)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Eats1);
