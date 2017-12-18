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
      <View style={styles.background}>
        <MyEventBar title={'Ongoing'} aLink={Actions.myevents} bLink={Actions.myevents2}/>
        <Image style={styles.backgroundColor} source={require("../assets/MultiForm.png")}/>
        <Calendar/>
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Upcoming</Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionText}>This Week</Text>
            </View>
            <EventItem host={ProfPic}/>
            <EventItem />
            <EventItem />
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionText}>Next Week</Text>
            </View>
            <EventItem />
            <EventItem />
          </View>
        </ScrollView>
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
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: verticalScale(667-50),
    width: scale(375)
  },
  backgroundColor: {
    top: verticalScale(75),
    position: 'absolute',
    height: verticalScale(667-50-75),
    width: scale(375)
  },
  titleContainer: {
    width: scale(375),
    height: verticalScale(25),
    justifyContent: 'center',
    left: scale(10),
  },
  titleText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(28)
  },
  sectionContainer: {
    width: scale(310),
    marginTop: verticalScale(15),
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#95989A',
    left: scale(13),
  },
  sectionText: {
    fontFamily: 'Futura',
    color: '#8D8D8D',
    fontSize: moderateScale(18)
  },
  listContainer: {
    flex: 5,
    width: scale(375)
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyEvents);
