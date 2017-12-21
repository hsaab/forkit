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
import Tabbar from '../components/Tabbar.js';
import axios from 'axios';
import Post from '../components/Post.js';
import EStyleSheet from 'react-native-extended-stylesheet';
import Vasish from '../assets/prof/Vasish.png';
import Brandon from '../assets/prof/Brandon.png';
import Paul from '../assets/prof/Paul.png';
import Queen from '../assets/prof/queen.png';
import Megan from '../assets/prof/megan.png';
import Shakira from '../assets/prof/shakira.png';
import Natalie from '../assets/prof/natalie.png';
import Kobe from '../assets/prof/kobe.png';
import Pauly from '../assets/prof/pauly.png';
import Cent from '../assets/prof/50.png';
import Ariana from '../assets/prof/ariana.png';
import Alec from '../assets/prof/alec.png';

class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.background}>
        <Navbar/>
        <ScrollView>
          <View style={styles.scroll}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionText}>This Week</Text>
            </View>
            <Post title={`Let's Turn Up Folks`} meal={'dinner'} hostFirst={'Vasish'} hostPic={Vasish} guest1={'Queen'}
              guest2={'Megan'} guest3={'Shakira'} guestPic1={Queen} guestPic2={Megan} guestPic3={Shakira}
              desc={'at La Taqueria in S.F. on Sat'}/>
            <Post title={`Alright alright alright`} meal={'brunch'} hostFirst={'Paul'} hostPic={Paul} guest1={'Natalie'}
              guest2={'Kobe'} guest3={'Pauly'} guestPic1={Natalie} guestPic2={Kobe} guestPic3={Pauly}
              desc={'at Refined Brunch in S.F. on Sun'}/>
            <Post title={`Happy meal`} meal={'lunch'} hostFirst={'Bran'} hostPic={Brandon} guest1={'Fifty'}
              guest2={'Ariana'} guest3={'Alec'} guestPic1={Cent} guestPic2={Ariana} guestPic3={Alec}
              desc={'at La Taqueria in S.F. on Sat'}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      user : state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const styles = EStyleSheet.create({
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D6D6D6',
    height: verticalScale(667),
    width: scale(375)
  },
  sectionContainer: {
    width: scale(95),
    marginTop: verticalScale(15),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#95989A',
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
    fontSize: moderateScale(28),
    textAlign: 'center'
  },
  sectionText: {
    fontFamily: 'Futura',
    color: '#8D8D8D',
    textAlign: 'center',
    fontSize: moderateScale(18),
  },
  listContainer: {
    flex: 5,
    width: scale(375)
  },
  scroll: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Newsfeed);
