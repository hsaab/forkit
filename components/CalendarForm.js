import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import moment from 'moment';
import { Calendar } from 'react-native-calendars';
import _ from 'underscore';

export default class CalendarForm extends Component{
    constructor(props){
        super(props);
        this.state = {
          selected: []
        };
    }

    addSelection(selectedDate){
      const stateLength = this.state.selected.length;
      const maxDate = stateLength === 0 ? 'none' : _.max(this.state.selected, (date) => {return date.timestamp})
      const minDate = stateLength === 0 ? 'none' : _.min(this.state.selected, (date) => {return date.timestamp})
      const selDuration = moment.duration(moment(selectedDate.timestamp) - moment(minDate.timestamp)).asDays()

      if(selectedDate.timestamp > maxDate.timestamp && selDuration <= 3){
        const newSelection = this.state.selected.concat(selectedDate);
        this.setState({
          selected: newSelection
        })
      }

      if(selectedDate.timestamp < maxDate.timestamp || selDuration > 3 || maxDate === 'none'){
        this.setState({
          selected: [selectedDate]
        })
      }
    }

    render(){
      this.props.fn(this.state.selected);
      const start = moment().format("YYYY-MM-DD");
      const end = moment().add(14,'days').format("YYYY-MM-DD");
      const marked = this.state.selected;
      const newMarked = {};

      for(let i = 0; i < marked.length; i++){
        let date = marked[i].dateString;
        let length = marked.length;

        if(i === 0 && marked.length > 1){ //startindDay
          let prefs = Object.assign({},{selected: true, color: '#FF7F00', textColor: 'white'})
          newMarked[date] = prefs;
          // console.log('1')
        }
        if(i === 0 && marked.length === 1){ //only one item
          let prefs = Object.assign({},{selected: true, color: '#FF7F00', textColor: 'white'})
          newMarked[date] = prefs;
          // console.log('2')
        }
        if(i > 0 && i < marked.length - 1){ //middle childs
          let prefs = Object.assign({},{selected: true, color: '#FF7F00', textColor: 'white'})
          newMarked[date] = prefs;
          // console.log('3')
        }
        if(i === marked.length - 1 && marked.length > 1){ //endingDay
          let prefs = Object.assign({},{selected: true, color: '#FF7F00', textColor: 'white'})
          newMarked[date] = prefs;
          // console.log('4')
        }
      }

      return (
        <Calendar
          style={styles.calendar}
          current={start}
          minDate={start}
          maxDate={end}
          hideExtraDays={true}
          monthFormat={'MMM yyyy'}
          onDayPress={(day) => {this.addSelection(day)}}
          markedDates={newMarked}
          markingType={'period'}
        />
      );
    }
}

var styles = StyleSheet.create({
    calendar: {
      backgroundColor: 'rgba(255,255,255,.2)',
      height: verticalScale(375),
      width: scale(375),
      right: scale(7)
    },
});
