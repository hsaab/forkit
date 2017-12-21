import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput, SectionList, Header } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import EventNotification from '../components/EventNotification.js';
import MyEventBar from '../components/MyEventBar.js';
import Calendar from '../components/Calendar.js';
import ProfPic from '../assets/profile.png';
import axios from 'axios';
import Fifty from '../assets/prof/50.png';
import Alec from '../assets/prof/alec.png';
import Andrew from '../assets/prof/andrew.png';
import Ariana from '../assets/prof/ariana.png';
import Brandon from '../assets/prof/Brandon.png';
import Hassan from '../assets/prof/Hassan.png';
import Kobe from '../assets/prof/kobe.png';
import Luda from '../assets/prof/lunda.png';
import Megan from '../assets/prof/megan.png';
import Natalie from '../assets/prof/natalie.png';
import Paul from '../assets/prof/Paul.png';
import Pauly from '../assets/prof/pauly.png';
import Queen from '../assets/prof/queen.png';
import Shakira from '../assets/prof/shakira.png';
import Vasish from '../assets/prof/Vasish.png';

class MyEvents3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [
        {title:"The morning after", day:'Tuesday', dates: 'Dec 26 at 10:00AM', meal_type: 'Brunch', guests:[Luda, Shakira], host: Hassan}
      ]
    }
  }
  componentWillMount() {
    axios.get(`http://localhost:3000/db/search?password=$BIG_SHAQ103$&tableName=participants&fields=id,group_id,participant_id,pending,accepted,host_id&conditions=participant_id='${this.props.user.id}'`)
    .then(response => {
      if (response.data.result.length > 1) {
        var params = '';
        for (var i = 0; i < response.data.result.length; i++) {
          if (response.data.result[i].pending) {
              params += `id='${response.data.result[i].group_id}' or `;
          }
        }
        params = params.slice(0, params.length - 4);
        if (params.length >= 1) {
          var url = `http://localhost:3000/db/search?password=$BIG_SHAQ103$&tableName=group_event&fields=id,title,dates,meal_type,location,radius,cuisines,host_id,participants_id,restaurant_chosen,yelp_id&conditions=${params}`;

          axios.get(url)
          .then(resp => {
            console.log(resp.data.result)
            this.setState({
              results: resp.data.result
            });
            console.log(this.state.results);
          })
        }

      }
    })
    .catch(e => {
      console.log(e);
    })
  }

  render() {
    return (
      <View>
        <MyEventBar title={"Notif"} aLink={() => Actions.myevents()} bLink={() => Actions.myevents2()} cLink={() => Actions.myevents3()}/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/MultiForm.png")}/>
          <ScrollView style={{top: verticalScale(20)}}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>New Events</Text>
            </View>
            <View style={styles.listContainer}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionText}>This Week</Text>
              </View>
              {this.state.results.map((result, index) => <EventNotification key={index} data={result} host={result.host} user={this.props.user.id}/>)}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      user: state.user
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
    height: verticalScale(667-50-75),
    width: scale(375)
  },
  backgroundColor: {
    position: 'absolute',
    top: 0,
    height: verticalScale(667),
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
)(MyEvents3);
