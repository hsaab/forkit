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
      mins: 1/5,
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
        <Navbar/>
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
          <View style={styles.rowSubContainer}>
            <TouchableOpacity style={styles.optionLeft} onPress={(ev) => this.handleShort(ev)}>
              <View style={styles.rowSubContainer}>
                <Image style={styles.hiker} source={require("../assets/Hikerwhite.png")}/>
                <Image style={styles.hiker} source={require("../assets/Hikerwhite.png")}/>
                <Image style={styles.hiker} source={require("../assets/Hikerwhite.png")}/>
              </View>
              <Text style={styles.optionText}>Less than 1 mile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRight} onPress={(ev) => this.handleLong(ev)}>
              <Image style={styles.car} source={require("../assets/carWhite.png")}/>
              <Text style={styles.optionText}>1 to 3 miles</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.optionBottom, styles.rowSubContainer]} onPress={() => this.handleGamble()}>
            <Text style={styles.gambleText}> Take a Gamble </Text>
            <Image style={styles.dollarSigns} source={require("../assets/red-dice-512.png")}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Eats3.propTypes = {
};

const mapStateToProps = (state) => {
    // console.log(state);
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
  },
  background: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
  timer: {
    fontSize: moderateScale(45),
    color: 'white',
    fontFamily: 'Futura'
  },
  optionLeft: {
    borderTopWidth: moderateScale(2),
    borderTopColor: 'white',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: 'white',
    borderRightWidth: moderateScale(1),
    borderRightColor: 'white',
    height: verticalScale(210),
    width: scale(375/2),
    justifyContent: 'center',
    alignItems: 'center',

  },
  optionRight: {
    borderTopWidth: moderateScale(2),
    borderTopColor: 'white',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: 'white',
    borderLeftWidth: moderateScale(1),
    borderLeftColor: 'white',
    height: verticalScale(210),
    width: scale(375/2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontFamily: 'Futura',
    color: 'white',
    textAlign: 'center',
    fontSize: moderateScale(35),
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10)
  },
  hiker: {
    height: verticalScale(70),
    width: scale(50)
  },
  car: {
    height: verticalScale(75),
    width: scale(100)
  },
  dollarSigns: {
    height: verticalScale(35),
    width: scale(35)
  },
  optionBottom: {
    borderTopWidth: moderateScale(1),
    borderTopColor: 'white',
    height: verticalScale(667-70-250-210),
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center',
  },
  gambleText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(38)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Eats3);
