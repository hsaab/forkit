import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import iconRight from '../assets/fasttrack.png';
import iconLeft from '../assets/fasttrackLeft.png';
import discoverBack from '../assets/Discover.png';

export default class Calendar extends React.Component {
  render() {
    const startDate = moment();
    const endDate = moment().add(14,'days')
    const events = [true,false,true,false,false,false,true,false,true,false,false,false,false,true];
    let customDatesStyles = [];
    for (let i = 0; i < 13; i++) {
      let backColor = events[i] ? '#FF7F00' : null
      let fontColor = events[i] ? 'white' : '#646464'
      customDatesStyles.push({
          startDate: moment().add(i,'days'),
          dateNameStyle: {fontFamily: 'Futura', fontWeight: '100', color: fontColor},
          dateNumberStyle: {fontFamily: 'Futura', fontWeight: '100', color: fontColor},
          dateContainerStyle: {backgroundColor: backColor},
      });
    }
    return (
      <View style={styles.calendarContainer}>
        <CalendarStrip
          style={{height: 125, paddingTop: 20, paddingBottom: 10}}
          minDate={startDate}
          maxDate={endDate}
          calendarColor={'rgba(255,255,255,.20)'}
          styleWeekend={false}
          customDatesStyles={customDatesStyles}
          iconRight={iconRight}
          iconRightStyle={{bottom: verticalScale(12.5), right: scale(3), width: scale(20)}}
          iconLeft={iconLeft}
          iconLeftStyle={{width: scale(20), left: scale(3), top: verticalScale(8)}}
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
  calendarContainer: {
    flex: 1.8,
    width: scale(375)
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
    color: '#646464',
  },
  dateName: {
    fontFamily: 'Futura',
    fontWeight: '100',
    color: '#646464',
  },
});
