import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import MinibarResults from '../components/MinibarResults.js';
import StarRating from 'react-native-star-rating';
import RestResult from '../components/RestResult.js';
import restImage from "../assets/burger.jpg";
import EStyleSheet from 'react-native-extended-stylesheet';

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

class ListResults extends Component {
  handleGamble(ev) {
    ev.preventDefault();
    let shuffled = shuffle(this.props.restaurants.results);
    this.props.getSingle(shuffled[0]);
    Actions.singleresult();
  }

  render() {
    return (
      <View style={styles.container}>
        <MinibarResults title={"Results"} aLink={() => Actions.listresults()} bLink={() => Actions.listmap()}/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/discoverHome.png")}/>
          <View style={styles.listContainer}>
            <ScrollView>
              <RestResult restaurant={this.props.restaurants.results[0]} name={this.props.restaurants.results[0].name} rating={this.props.restaurants.results[0].rating} reviews={this.props.restaurants.results[0].review_count}
                distance={this.props.restaurants.results[0].distance} img={this.props.restaurants.results[0].image_url} border={true}/>
              <RestResult restaurant={this.props.restaurants.results[1]} name={this.props.restaurants.results[1].name} rating={this.props.restaurants.results[1].rating} reviews={this.props.restaurants.results[1].review_count}
                distance={this.props.restaurants.results[1].distance} img={this.props.restaurants.results[1].image_url} border={true}/>
              <RestResult restaurant={this.props.restaurants.results[2]} name={this.props.restaurants.results[2].name} rating={this.props.restaurants.results[2].rating} reviews={this.props.restaurants.results[2].review_count}
                distance={this.props.restaurants.results[2].distance} img={this.props.restaurants.results[2].image_url} border={true}/>
            </ScrollView>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.gamble} onPress={(ev) => this.handleGamble(ev)}>
              <Text style={styles.gambleText}>Take a Gamble</Text>
              <Image style={styles.dice} source={require("../assets/red-dice-512.png")}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

ListResults.propTypes = {
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

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  background: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    height: verticalScale(667-75-60),
    width: scale(375)
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667),
    width: scale(375)
  },
  listContainer: {
    flex: 5,
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(16)
  },
  restaurantIcon: {
    height: verticalScale(80),
    width: scale(80),
    borderRadius: scale(40),
    opacity: 0.7
  },
  menuIcon: {
    height: verticalScale(60),
    width: scale(60),
    borderRadius: scale(30)
  },
  dice: {
    height: verticalScale(35),
    width: scale(35),
    left: scale(15),
    overflow: 'visible'
  },
  bottomContainer: {
    flex: 0.95,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  gamble: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(255,255,255,.5)",
    borderRadius: scale(75),
    margin: moderateScale(5),
    width: '95%',
    bottom: verticalScale(3)
  },
  gambleText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(30),
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListResults);
