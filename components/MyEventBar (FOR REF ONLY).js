import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Dash from 'react-native-dash';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class MyEventBar extends React.Component {
  constructor() {
    super()
    this.state = {
      ongoing: styles.selectedText,
      ongoingCont: styles.subContainerSelected,
      planned: styles.unselectedText,
      plannedCont: styles.subContainer,
      notifCont: styles.nUnselected
    }
  }

  selectOngoing(fn) {
    this.setState({
      ongoing: styles.selectedText,
      ongoingCont: styles.subContainerSelected,
      planned: styles.unselectedText,
      plannedCont: styles.subContainer,
      notifCont: styles.nUnselected
    })
    fn()
  }

  selectPlanned(fn) {
    this.setState({
      ongoing: styles.unselectedText,
      ongoingCont: styles.subContainer,
      planned: styles.selectedText,
      plannedCont: styles.subContainerSelected,
      notifCont: styles.nUnselected
    })
    fn()
  }

  selectNotif(fn) {
    this.setState({
      ongoing: styles.unselectedText,
      ongoingCont: styles.subContainer,
      planned: styles.unselectedText,
      plannedCont: styles.subContainer,
      notifCont: styles.nSelected
    })
    fn()
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.selectNotif(Actions.myevents3)} style={this.state.notifCont}>
          <Text style={styles.nText}>N</Text>
        </TouchableOpacity>
        <TouchableOpacity style={this.state.ongoingCont}onPress={() => this.selectOngoing(Actions.myevents)}>
          <Text style={this.state.ongoing}>Ongoing</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectPlanned(Actions.myevents2)} style={this.state.plannedCont}>
          <Text style={this.state.planned}>Planned</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    height: verticalScale(75),
    width: scale(375),
    backgroundColor: "#EBEBEB",
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  nUnselected: {
    width: '12%',
    height: '100%',
    backgroundColor: '#B7B7B7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nSelected: {
    width: '12%',
    height: '100%',
    backgroundColor: '#535353',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nText: {
    color: 'white',
    fontFamily: 'Futura',
    fontSize: moderateScale(25)
  },
  subContainerSelected: {
    flexDirection: 'column',
    height: verticalScale(75),
    width: '44%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#646464'
  },
  subContainer: {
    flexDirection: 'column',
    height: verticalScale(75),
    width: '44%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#8D8D8D'
  },
  selectedText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(25),
    marginBottom: verticalScale(12)
  },
  unselectedText: {
    fontFamily: 'Futura',
    color: '#B7B7B7',
    fontSize: moderateScale(25),
    marginBottom: verticalScale(12)
  }
});
