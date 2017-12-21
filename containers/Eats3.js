import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import Dash from 'react-native-dash';

class Eats3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: 1,
      end: 0,
      mins: 1/3.8,
      interval: 0
    }
  }


  handleShort(ev) {
    ev.preventDefault();
    this.props.setDistance(1500);
    clearInterval(this.state.interval);
    Actions.algo();
  }

  handleLong(ev) {
    ev.preventDefault();
    this.props.setDistance(5000);
    clearInterval(this.state.interval);
    Actions.algo();
  }

  handleGamble() {
    let random = Math.random() * 2;
    if (random >= 1) {
      this.props.setDistance(5000);
    } else {
      this.props.setDistance(1500);
    }
    clearInterval(this.state.interval);
    Actions.algo();
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
          <Image style={styles.backgroundColor} source={require("../assets/DiscoverEat-3.png")}/>
          <View style={styles.topTile}>
            <View style={styles.rowSubContainer}>
              <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), right:scale(5) }}/>
              <Text style={styles.timer}> {this.state.secondsLeft} </Text>
              <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), left:scale(5) }}/>
            </View>
            <Text style={styles.topText}>How far away you wanna go?</Text>
          </View>
          <View style={styles.colSubContainer}>
            <TouchableOpacity style={styles.option} onPress={(ev) => this.handleShort(ev)}>
              <Text style={styles.optionText}>Less than 1 mile</Text>
              <View style={styles.rowSubContainer}>
                <Image style={styles.hiker} source={require("../assets/Hikerwhite.png")}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={(ev) => this.handleLong(ev)}>
              <Text style={styles.optionText}>1 to 3 miles</Text>
              <Image style={styles.car} source={require("../assets/carWhite.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.option, styles.rowSubContainer]} onPress={() => this.handleGamble()}>
              <Text style={styles.gambleText}> Take a Gamble </Text>
              <Image style={styles.dice} source={require("../assets/red-dice-512.png")}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      setDistance: (distance) => dispatch({type: "DISTANCE_TYPE", distance: distance})
    };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
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
  hiker: {
    height: verticalScale(55),
    width: scale(55),
    overflow: 'visible',
    right: scale(10)
  },
  car: {
    height: verticalScale(40),
    width: scale(60),
    overflow: 'visible'
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
    height: verticalScale(90),
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
    margin: scale(15)
  },
  gambleText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(30)
  },
  dice: {
    height: verticalScale(35),
    width: scale(35)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Eats3);
