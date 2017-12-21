import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class CalendarTrivia extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
    }
  }

  selectDay(day){
    this.setState({
      selected: day.num
    })
    this.props.fn(day.date);
  }

  dayItem(selDay, i) {
    console.log(selDay)
    const possible = this.props.dates.map((each) => {return each.day});
    const select = possible.includes(selDay.num);
    // console.log('SELDAY!!!!!! ', selDay);
    if(select){
      return <TouchableOpacity key={i} style={this.state.selected === selDay.num ? styles.dayContainerSel : styles.dayContainer} onPress={() => {this.selectDay(selDay)}}>
                <Text style={styles.dayText}>{selDay.dayAbr}</Text>
                <View style={styles.numContainerSel}><Text style={styles.numTextSel}>{selDay.num}</Text></View>
             </TouchableOpacity>
    } else {
      return <View key={i} style={styles.dayContainer}>
                <Text style={styles.dayText}>{selDay.dayAbr}</Text>
                <View style={styles.numContainer}><Text style={styles.numText}>{selDay.num}</Text></View>
             </View>
    }
  }

  render() {
    let week = []
    let days = this.props.dates.split(',');
    let firstDay = moment(days[0]);
    for(let i = 0; i < 7; i++){
      let date = moment(firstDay).add(i, 'days');
      let day = moment(date).format('dddd');
      let dayAbr = moment(date).format('dddd').slice(0,1);
      let num = moment(date).date();
      if(day === "Tuesday"){
        dayAbr = "Tu"
      }
      if(day === "Thursday"){
        dayAbr = "Th"
      }
      if(day === "Saturday"){
        dayAbr = "Sa"
      }
      if(day === "Sunday"){
        dayAbr = "Su"
      }
      week.push(Object.assign({}, {date, day, dayAbr, num}))
    }
    return (
      <View style={styles.calContainer}>
        {week.map((each, i) => (this.dayItem(each, i)))}
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  calContainer: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-around'
  },
  dayContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  dayContainerSel: {
    borderColor: 'white',
    borderWidth: moderateScale(3),
    borderRadius: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  dayText: {
    fontSize: moderateScale(20),
    fontFamily: 'Futura',
    color: 'white'
  },
  numTextSel: {
    fontSize: moderateScale(20),
    fontFamily: 'Futura',
    color: 'white'
  },
  numContainer: {
    width: scale(37),
    height: verticalScale(37),
    borderRadius: scale(37/2),
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  numContainerSel: {
    width: scale(37),
    height: verticalScale(37),
    borderRadius: scale(37/2),
    backgroundColor: '#FF7F00',
    alignItems: 'center',
    justifyContent: 'center'
  },
  numText: {
    fontSize: moderateScale(18),
    fontFamily: 'Futura',
    color: 'black',
  }
});
