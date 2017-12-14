import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import CategoryItem from '../components/CategoryItem.js';

const StatusPage = ({}) => {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
          <View style={styles.detailsContainer}>
            <View style={{flex: 2}}>
              <Text>U MY ENTOURAGE</Text>
              <Text>Dinner at Mr. Gs</Text>
              <Text>Friday  at 8pm</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>HOST PIC</Text>
              <Text>Invite Button</Text>
            </View>
          </View>
          <View style={styles.currentContainer}>
            <Text>Current score suggests a Mexican dinner $-$$ at 8pm this Friday, Adam's treat!</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={{flex: 2}}>
              <Text>GUEST LIST HERE</Text>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={Actions.testquestion}><Text>PLAY</Text></TouchableOpacity>
              <TouchableOpacity onPress={Actions.multiresult}><Text>SEE RESULT</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.responsesContainer}>
            <View style={{
              flex: 1,
              borderColor: 'white',
              borderBottomWidth: 1,
              width: scale(375),
              flexDirection: 'row'
            }}>
              <View style={{flex: 1}}><Text>Categories</Text></View>
              <View style={{flex: 1}}><Text>Winning</Text></View>
              <View style={{flex: 1}}><Text>Responded</Text></View>
            </View>
            <View style={{flex: 7}}>
              <ScrollView>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    );
}

StatusPage.propTypes = {
};

const mapStateToProps = (state) => {
    console.log(state);
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
    backgroundColor: 'transparent',
    height: verticalScale(667-70-50),
    width: scale(375),
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-70-50),
    width: scale(375)
  },
  detailsContainer: {
    borderColor: 'white',
    borderBottomWidth: 1,
    width: scale(375),
    flex: 3,
    flexDirection: 'row'
  },
  currentContainer: {
    borderColor: 'white',
    borderBottomWidth: 1,
    width: scale(375),
    flex: 2
  },
  actionContainer: {
    borderColor: 'white',
    borderBottomWidth: 1,
    width: scale(375),
    flex: 2,
    flexDirection: 'row'
  },
  responsesContainer: {
    borderColor: 'white',
    borderBottomWidth: 1,
    width: scale(375),
    flex: 8
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatusPage);
