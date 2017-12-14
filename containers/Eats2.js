import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import Dash from 'react-native-dash';
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

class Eats2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: 1,
      end: 0,
      mins: 1/3.8,
      interval: 0
    }
  }

  handleFirst(ev) {
    ev.preventDefault();
    if (this.props.cuisineState.cuisines[0] === 'indian') {
      this.props.setFoodChoice('indpak');
    } else if (this.props.cuisineState.cuisines[0] === 'american') {
      var value = Math.random();
      if (value < 0.5) {
        this.props.setFoodChoice('tradamerican')
      } else {
        this.props.setFoodChoice('newamerican');
      }
    } else {
      this.props.setFoodChoice(this.props.cuisineState.cuisines[0]);
    }
    clearInterval(this.state.interval);
      Actions.eats3();
    }


  handleSecond(ev) {
    ev.preventDefault();
    if (this.props.cuisineState.cuisines[1] === 'indian') {
      this.props.setFoodChoice('indpak');
    } else if (this.props.cuisineState.cuisines[1] === 'american') {
      var value = Math.random();
      if (value < 0.5) {
        this.props.setFoodChoice('tradamerican')
      } else {
        this.props.setFoodChoice('newamerican');
      }
    } else {
      this.props.setFoodChoice(this.props.cuisineState.cuisines[1]);
    }
    clearInterval(this.state.interval);
    Actions.eats3();
  }

  handleThird(ev) {
    ev.preventDefault();
    if (this.props.cuisineState.cuisines[2] === 'indian') {
      this.props.setFoodChoice('indpak');
    } else if (this.props.cuisineState.cuisines[2] === 'american') {
      var value = Math.random();
      if (value < 0.5) {
        this.props.setFoodChoice('tradamerican')
      } else {
        this.props.setFoodChoice('newamerican');
      }
    } else {
      this.props.setFoodChoice(this.props.cuisineState.cuisines[2]);
    }
    clearInterval(this.state.interval);
    Actions.eats3();
  }

  handleFourth(ev) {
    ev.preventDefault();
    if (this.props.cuisineState.cuisines[3] === 'indian') {
      this.props.setFoodChoice('indpak');
    } else if (this.props.cuisineState.cuisines[3] === 'american') {
      var value = Math.random();
      if (value < 0.5) {
        this.props.setFoodChoice('tradamerican')
      } else {
        this.props.setFoodChoice('newamerican');
      }
    } else {
      this.props.setFoodChoice(this.props.cuisineState.cuisines[3]);
    }
    clearInterval(this.state.interval);
    Actions.eats3();
  }

  handleGamble() {
    let choice = this.props.cuisineState.cuisines;
    shuffle(choice);
    if (choice[0] === 'indian') {
      this.props.setFoodChoice('indpak');
    } else {
      this.props.setFoodChoice(choice[0]);
    }
    clearInterval(this.state.interval);
    Actions.eats3();
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


  imageMatch(cuisineType) {
    switch(cuisineType) {
      case 'mexican':
        var mexImage = require('../assets/taco.png');
        return mexImage;
      case 'japanese':
        var jap = require('../assets/japanese.png');
        return jap;
      case 'american':
        var american = require('../assets/american.png');
        return american;
      case 'italian':
        var italian = require('../assets/italian.png');
        return italian;
      default:
        var mexImage = require('../assets/taco.png');
        return mexImage;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/DiscoverEat-2.png")}/>
          <View style={styles.topTile}>
            <View style={styles.rowSubContainer}>
              <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), right:scale(5) }}/>
              <Text style={styles.timer}> {this.state.secondsLeft} </Text>
              <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), left:scale(5) }}/>
            </View>
            <Text style={styles.topText}>What type of cuisine?</Text>
          </View>
          <View style={styles.colSubContainer}>
            <View style={styles.rowSubContainer}>
              <TouchableOpacity style={styles.optionLeft} onPress={(ev) => this.handleFirst(ev)}>
                <Image style={styles.mexican} source={this.imageMatch(this.props.cuisineState.cuisines[0])}/>
                <Text style={styles.optionText}>{this.props.cuisineState.cuisines[0]}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionRight} onPress={(ev) => this.handleSecond(ev)}>
                <Image style={styles.japanese} source={this.imageMatch(this.props.cuisineState.cuisines[1])}/>
                <Text style={styles.optionText}>{this.props.cuisineState.cuisines[1]}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowSubContainer}>
              <TouchableOpacity style={styles.optionLeft} onPress={(ev) => this.handleThird(ev)}>
                <Image style={styles.american} source={this.imageMatch(this.props.cuisineState.cuisines[2])}/>
                <Text style={styles.optionText}>{this.props.cuisineState.cuisines[2]}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionRight} onPress={(ev) => this.handleFourth(ev)}>
                <Image style={styles.italian} source={this.imageMatch(this.props.cuisineState.cuisines[3])}/>
                <Text style={styles.optionText}>{this.props.cuisineState.cuisines[3]}</Text>
              </TouchableOpacity>
            </View>
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

Eats2.propTypes = {
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      cuisineState: state.yelp
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      setFoodChoice: (ethnic) => dispatch({type: 'FOOD_CHOICE', ethnic: ethnic})
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
    borderBottomWidth: moderateScale(1),
    borderBottomColor: 'white',
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
    justifyContent: 'center'
  },
  timer: {
    fontSize: moderateScale(45),
    color: 'white',
    fontFamily: 'Futura'
  },
  optionLeft: {
    borderTopWidth: moderateScale(1),
    borderTopColor: 'white',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: 'white',
    borderRightWidth: moderateScale(1),
    borderRightColor: 'white',
    height: verticalScale(105),
    width: scale(375/2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  mexican: {
    height: verticalScale(55),
    width: scale(75)
  },
  japanese: {
    height: verticalScale(55),
    width: scale(65)
  },
  american: {
    height: verticalScale(35),
    width: scale(70),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10)
  },
  italian: {
    height: verticalScale(35),
    width: scale(80),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10)
  },
  optionRight: {
    borderTopWidth: moderateScale(1),
    borderTopColor: 'white',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: 'white',
    borderLeftWidth: moderateScale(1),
    borderLeftColor: 'white',
    height: verticalScale(105),
    width: scale(375/2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(30)
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
)(Eats2);
