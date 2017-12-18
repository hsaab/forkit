import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navbar from '../components/Navbar.js';
import FormBar from '../components/FormBar.js';
import ExpandableTitle from '../components/ExpandableTitle.js';
import ExpandableDate from '../components/ExpandableDate.js';
import ExpandableMeal from '../components/ExpandableMeal.js';
import ExpandableLocation from '../components/ExpandableLocation.js';
import ExpandableCuisine from '../components/ExpandableCuisine.js';

const EventForm = ({}) => {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/MultiForm.png")}/>
          <FormBar title={"Facts"} aLink={() => Actions.eventform()} bLink={() => Actions.invitefriends()}/>
          <View style={styles.scroll}>
            <ScrollView>
              <ExpandableTitle/>
              <ExpandableDate/>
              <ExpandableMeal/>
              <ExpandableLocation/>
              <ExpandableCuisine/>
            </ScrollView>
          </View>
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

const styles = EStyleSheet.create({
  background: {
    backgroundColor: 'transparent',
    height: verticalScale(667-75-50),
    width: '100%',
  },
  backgroundColor: {
    position: 'absolute',
    top: 0,
    height: verticalScale(667),
    width: scale(375)
  },
  scroll: {
    height: verticalScale(667-75-50),
    width: scale(375)
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventForm);
