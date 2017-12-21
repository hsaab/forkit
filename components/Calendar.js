import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import iconRight from '../assets/fasttrackDGrey.png';
import iconLeft from '../assets/fasttrackDGreyLeft.png';
import discoverBack from '../assets/Discover.png';

export default class Calendar extends React.Component {
  render() {
    const startDate = moment();
    const endDate = moment().add(14,'days');
    const events = [false,false,false,false,false,false,false,false,false,false,false,false,false,false];
    let customDatesStyles = [];
    for (let i = 0; i < 13; i++) {
      let backColor = events[i] ? '#FF7F00' : null
      let fontDateColor = events[i] ? 'white' : '#8D8D8D'
      let fontNameColor = events[i] ? 'white' : '#646464'
      customDatesStyles.push({
          startDate: moment().add(i,'days'),
          dateNameStyle: {fontFamily: 'Futura', fontWeight: '100', color: fontNameColor},
          dateNumberStyle: {fontFamily: 'Futura', fontWeight: '100', color: fontDateColor},
          dateContainerStyle: {backgroundColor: backColor},
      });
    }
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
          useIsoWeekday={false}
          iconRightStyle={{width: scale(17), height: verticalScale(15), left: scale(3)}}
          iconLeft={iconLeft}
          iconLeftStyle={{width: scale(17), height: verticalScale(15), right: scale(3)}}
          calendarHeaderStyle={styles.calHeader}
          dateNameStyle={styles.dateName}
          dateNumberStyle={styles.dateNumber}
          highlightDateNumberStyle={{color: 'white'}}
          highlightDateNameStyle={{color: 'white'}}
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
