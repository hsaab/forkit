import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput, SectionList, Header } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import EventItem from '../components/EventItem';
import MyEventBar from '../components/MyEventBar.js';
import Calendar from '../components/Calendar.js';
import ProfPic from '../assets/profile.png';

class MyEvents extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <MyEventBar title={'Planned'} aLink={Actions.myevents} bLink={Actions.myevents2}/>
          <Calendar/>
          <View style={styles.masterBar}>
            <Text style={styles.masterBarText}>All Upcoming</Text>
          </View>
          <View style={styles.listContainer}>
            <ScrollView>
              <View style={styles.otherBar}>
                <Text style={styles.otherBarText}>This Week</Text>
              </View>
              <EventItem host={ProfPic}/>
              <EventItem />
              <EventItem />
              <View style={styles.otherBar}>
                <Text style={styles.otherBarText}>Next Week</Text>
              </View>
              <EventItem />
              <EventItem />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

MyEvents.propTypes = {
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: verticalScale(667-70-50),
    width: scale(375),
  },
  masterBar: {
    backgroundColor: '#646464',
    width: scale(375),
    flex: 0.4,
    justifyContent: 'center'
  },
  masterBarText: {
    fontFamily: 'Futura',
    color: 'white',
    left: scale(10),
    fontSize: moderateScale(13)
  },
  otherBar: {
    backgroundColor: '#BFBFBF',
    width: scale(375),
    flex: 0.4,
    justifyContent: 'center'
  },
  otherBarText: {
    fontFamily: 'Futura',
    color: 'white',
    left: scale(10),
    fontSize: moderateScale(13)
  },
  listContainer: {
    flex: 5,
    borderColor: 'white',
    borderBottomWidth: 1,
    width: scale(375)
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyEvents);
