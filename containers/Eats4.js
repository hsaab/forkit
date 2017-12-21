import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import Dash from 'react-native-dash';
import CalendarTrivia from '../components/CalendarTrivia.js';
import SelectorTime from '../components/SelectorTime.js';

const Eats4 = ({dates, meal, setDate, setTime}) => {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/DiscoverEat-3.png")}/>
          <View style={styles.tiles}>
            <View style={styles.tileContent}>
              <Text style={styles.topText}>What day?</Text>
              <CalendarTrivia dates={dates} fn={setDate}/>
            </View>
            <View style={styles.tileContent}>
              <Text style={styles.topText}>What time?</Text>
              <SelectorTime meal={meal} fn={setTime}/>
            </View>
          </View>
          <TouchableOpacity style={styles.next} onPress={Actions.statuspage}>
            <Text style={styles.nextText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const mapStateToProps = (state) => {
    return {
      dates: state.form.dates,
      meal: state.form.meal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      setDate: (date) => dispatch({type: 'DATE_CHOICE_MULTI', date: date}),
      setTime: (time) => dispatch({type: 'TIME_CHOICE_MULTI', time: time}),
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
    backgroundColor: 'transparent',
    height: verticalScale(667),
    width: scale(375),
    justifyContent: 'space-between'
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667),
    width: scale(375)
  },
  tiles: {
    marginTop: verticalScale(50)
  },
  tileContent: {
    height: verticalScale(150),
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: verticalScale(50)
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(375),
    height: verticalScale(200)
  },
  timer: {
    fontSize: moderateScale(45),
    color: 'white',
    fontFamily: 'Futura'
  },
  hiker: {
    height: verticalScale(40),
    width: scale(20)
  },
  car: {
    height: verticalScale(40),
    width: scale(60)
  },
  timer: {
    fontSize: moderateScale(45),
    color: 'white',
    fontFamily: 'Futura'
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
  next: {
    width: '100%',
    height: verticalScale(70),
    backgroundColor: '#BFBFBF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  nextText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(35),
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Eats4);
