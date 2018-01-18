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
        return <Image style={styles.mexican} source={mexImage}/>
      case 'japanese':
        var jap = require('../assets/japanese.png');
        return <Image style={styles.japanese} source={jap}/>
      case 'american':
        var american = require('../assets/american.png');
        return <Image style={styles.american} source={american}/>
      case 'indian':
        var indian = require('../assets/indian.png');
        return <Image style={styles.indian} source={indian}/>
      case 'french':
        var french = require('../assets/french.png');
        return <Image style={styles.american} source={french}/>
      case 'thai':
        var thai = require('../assets/thai.png');
        return <Image style={styles.american} source={thai}/>
      case 'chinese':
        var chinese = require('../assets/chinese.png');
        return <Image style={styles.indian} source={chinese}/>
      case 'mediterranean':
        var mediterranean = require('../assets/mediterranean.png');
        return <Image style={styles.indian} source={mediterranean}/>
      case 'spanish':
        var spanish = require('../assets/spanish.png');
        return <Image style={styles.indian} source={spanish}/>
      case 'greek':
        var greek = require('../assets/greek.png');
        return <Image style={styles.indian} source={greek}/>
      default:
        var italian = require('../assets/italian.png');
        return <Image style={styles.italian} source={italian}/>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/DiscoverEat-2.png")}/>
          <View style={styles.topTile}>
            <View style={styles.rowSubContainer}>
              <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), right:scale(5) }}/>
              <Text style={styles.timer}>{this.state.secondsLeft}</Text>
              <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), left:scale(5) }}/>
            </View>
            <Text style={styles.topText}>What type of cuisine?</Text>
          </View>
          <View style={styles.colSubContainer}>
            <TouchableOpacity style={styles.option} onPress={(ev) => this.handleFirst(ev)}>
              <Text style={styles.optionText}>{this.props.cuisineState.cuisines[0]}</Text>
              {this.imageMatch(this.props.cuisineState.cuisines[0])}
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={(ev) => this.handleSecond(ev)}>
              <Text style={styles.optionText}>{this.props.cuisineState.cuisines[1]}</Text>
              {this.imageMatch(this.props.cuisineState.cuisines[1])}
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={(ev) => this.handleThird(ev)}>
              <Text style={styles.optionText}>{this.props.cuisineState.cuisines[2]}</Text>
              {this.imageMatch(this.props.cuisineState.cuisines[2])}
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={(ev) => this.handleFourth(ev)}>
              <Text style={styles.optionText}> {this.props.cuisineState.cuisines[3]}</Text>
              {this.imageMatch(this.props.cuisineState.cuisines[3])}
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
    height: verticalScale(205),
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
  colSubContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(375)
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
  option: {
    borderWidth: moderateScale(3),
    borderColor: 'white',
    backgroundColor: 'rgba(255,255,255,.20)',
    height: verticalScale(65),
    width: scale(340),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: scale(50),
    margin: moderateScale(6)
  },
  optionText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(30),
    margin: scale(10)
  },
  dollarSigns: {
    height: verticalScale(20),
    width: scale(20)
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
    height: verticalScale(30),
    width: scale(30),
    overflow: 'visible',
    left: scale(12)
  },
  mexican: {
    height: verticalScale(50),
    width: scale(70),
    overflow: 'visible'
  },
  japanese: {
    height: verticalScale(50),
    width: scale(60),
    overflow: 'visible'
  },
  american: {
    height: verticalScale(30),
    width: scale(65),
    overflow: 'visible'
  },
  italian: {
    height: verticalScale(30),
    width: scale(80),
    overflow: 'visible'
  },
  indian: {
    height: verticalScale(40),
    width: scale(40),
    overflow: 'visible',
    left: scale(5)
  }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Eats2);
