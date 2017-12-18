import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import iconRight from '../assets/fasttrackDGrey.png';
import iconLeft from '../assets/fasttrackDGreyLeft.png';
import discoverBack from '../assets/Discover.png';
import _ from 'underscore';

export default class Calendar extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        selected: []
      };
  }

  addSelection(selectedDate){
    const stateLength = this.state.selected.length;
    const maxDate = stateLength === 0 ? 0 : _.max(this.state.selected, (date) => {return date});
    const minDate = stateLength === 0 ? 0 : _.min(this.state.selected, (date) => {return date});
    const selDuration = moment.duration(moment(selectedDate) - moment(minDate)).asDays();
    if(selectedDate > maxDate && selDuration < 3){
      const newSelection = this.state.selected.concat(selectedDate);
      this.setState({
        selected: newSelection
      })
    }

    if(selectedDate < maxDate || selDuration >= 3){
      this.setState({
        selected: [selectedDate]
      })
    }
  }

  render() {
    const startDate = moment().format("YYYY-MM-DD");
    const endDate = moment().add(14,'days').format("YYYY-MM-DD");
    const marked = this.state.selected;
    let customDatesStyles = [];

    for(let i = 0; i < 13; i++) {
      let date = moment().add(i, 'days').format("YYYY-MM-DD");
      marked.forEach((sel) => {
        let selected = sel.format("YYYY-MM-DD");
        if(selected === date) {
          console.log('Equal')
          customDatesStyles.push({
              startDate: moment().add(i,'days'),
              dateNameStyle: {fontFamily: 'Futura', fontWeight: '100', color: 'white'},
              dateNumberStyle: {fontFamily: 'Futura', fontWeight: '100', color: 'white'},
              dateContainerStyle: {backgroundColor: '#FF7F00'},
          });
        } else {
          console.log('Else')
          customDatesStyles.push({
              startDate: moment().add(i,'days'),
              dateNameStyle: {fontFamily: 'Futura', fontWeight: '100', color: '#646464'},
              dateNumberStyle: {fontFamily: 'Futura', fontWeight: '100', color: '#8D8D8D'},
              dateContainerStyle: {backgroundColor: null},
          });
        }
      })
    }

    console.log(customDatesStyles)
    return (
      <View style={styles.calBackground}>
        <CalendarStrip
          style={styles.calendarContainer}
          minDate={startDate}
          maxDate={endDate}
          styleWeekend={false}
          showMonth={false}
          customDatesStyles={customDatesStyles}
          iconRight={iconRight}
          iconRightStyle={{width: scale(17), height: verticalScale(15), left: scale(3)}}
          iconLeft={iconLeft}
          iconLeftStyle={{width: scale(17), height: verticalScale(15), right: scale(3)}}
          calendarHeaderStyle={styles.calHeader}
          dateNameStyle={styles.dateName}
          dateNumberStyle={styles.dateNumber}
          highlightDateNumberStyle={{color: 'white'}}
          highlightDateNameStyle={{color: 'white'}}
          onDateSelected={(day) => {this.addSelection(day)}}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calBackground: {
    height: verticalScale(80),
    width: scale(375),
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  calendarContainer: {
    height: verticalScale(70),
    width: scale(350),
    justifyContent: 'center'
  },
  calHeader: {
    fontFamily: 'Futura',
    fontWeight: '100',
    color: '#646464',
    bottom: verticalScale(5)
  },
  dateNumber: {
    fontFamily: 'Futura',
    fontWeight: '100',
    color: '#8D8D8D',
  },
  dateName: {
    fontFamily: 'Futura',
    fontWeight: '100',
    color: '#646464',
  },
});
