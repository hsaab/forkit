import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import EStyleSheet from 'react-native-extended-stylesheet';

const dinner = ['5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'];
const lunch = ['11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM'];
const brunch = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM'];

export default class SelectorTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [1,2,3],
      selTime: 0,
      meal: this.props.meal
  }
}

renderHours(){
  if(this.state.meal === 'Dinner'){
    return dinner.map((each, i) => {
      return <Picker.Item key={i} style={styles.pickerItem} label={each} value={each}/>})
  }
  if(this.state.meal === 'Lunch'){
    return lunch.map((each, i) => {
      let hour = each.slice(0,1);
      return <Picker.Item key={i} style={styles.pickerItem} label={each} value={each}/>})
  }
  if(this.state.meal === 'Brunch'){
    return brunch.map((each, i) => {
      let hour = each.slice(0,1);
      return <Picker.Item key={i} style={styles.pickerItem} label={each} value={each}/>})
  }
}

timeSet(item){
  this.setState({
    selTime: item
  })
  this.props.fn(item)
}

render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.selTime}
          onValueChange={(itemValue, itemIndex) => {this.timeSet(itemValue)}}
          style={styles.picker}
          itemStyle={styles.pickerItem}>
          {this.renderHours()}
        </Picker>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    width: scale(375),
    height: verticalScale(70),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: verticalScale(10)
  },
  picker: {
    width: '90%',
  },
  pickerItem: {
    color: 'white',
    fontFamily: 'Futura',
    fontSize: moderateScale(45),
    marginBottom: verticalScale(5)
  }
});
