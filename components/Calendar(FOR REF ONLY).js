import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import moment from 'moment';

export default class Calendar extends React.Component {
  render() {
    let dates = [];
    let month = [moment().format('MMMM')];
    for(let i = 0; i < 14; i++) {
      const date = moment().add(i,'days').subtract(7,'hours');
      const monthPrev = moment().add(i - 1,'days').subtract(7,'hours').format('MMMM');
      const monthCurr = moment().add(i,'days').subtract(7,'hours').format('MMMM');
      if(monthPrev !== monthCurr){
        month.push(monthCurr);
      }
      dates.push(date);
    }
    return (
      <View style={styles.container}>
        dates.map((date) => {
          
        })
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(105),
    width: scale(375),
    backgroundColor: 'rgba(255,255,255,.40)',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
