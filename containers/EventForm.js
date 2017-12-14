import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import MyEventBar from '../components/MyEventBar.js';
import ExpandableTitle from '../components/ExpandableTitle.js';
import ExpandableDate from '../components/ExpandableDate.js';
import ExpandableMeal from '../components/ExpandableMeal.js';
import ExpandableLocation from '../components/ExpandableLocation.js';
import ExpandableCuisine from '../components/ExpandableCuisine.js';

const EventForm = ({}) => {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <MyEventBar title={"Facts"} aLink={() => Actions.eventform()} bLink={() => Actions.invitefriends()}/>
          <View style={styles.optionsContainer}>
            <ScrollView>
              <ExpandableTitle/>
              <ExpandableDate/>
              <ExpandableMeal/>
              <ExpandableLocation/>
              <ExpandableCuisine/>
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.nextContainer}>
            <TouchableOpacity onPress={Actions.invitefriends}><Text style={styles.nextText}>NEXT</Text></TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    );
}

EventForm.propTypes = {
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
    backgroundColor: 'transparent',
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: verticalScale(667-70-50),
    width: scale(375),
  },
  headerContainer: {
    flex: 1,
    borderColor: '#fff',
    borderBottomWidth: scale(1),
    width: scale(375),
    flexDirection: 'row'
  },
  optionsContainer: {
    flex: 6
  },
  nextContainer: {
    flex: 1,
    borderColor: '#fff',
    borderTopWidth: scale(1),
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'silver',
    opacity: 0.9,
    paddingLeft: scale(30)
  },
  nextText: {
    color: 'white',
    fontFamily: 'Futura',
    fontSize: moderateScale(30)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventForm);
