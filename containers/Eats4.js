import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import Dash from 'react-native-dash';
import CalendarTrivia from '../components/CalendarTrivia.js';
import SelectorTime from '../components/SelectorTime.js';
import axios from 'axios';

class Eats4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  handleSubmit() {
    if (this.props.last.isLast) {
      // console.log(this.props.last.isLast);
      axios({
        method: 'POST',
        url: 'http://localhost:3000/db/101_super_duper_secret_101',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          password: '$BIG_SHAQ101$',
          type: 'search',
          query: `update participants set played = true, restaurant_chosen = true where group_id = '${this.props.status.group_id}'`
        }
      })
      .then((response) => {
        // console.log(response);
        if (response.data.success) {
          console.log('UPDATED PARTICIPANTS TABLE');
          axios({
            method: 'POST',
            url: 'http://localhost:3000/db/101_super_duper_secret_101',
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
              password: '$BIG_SHAQ101$',
              type: 'search',
              query: `insert into responses (group_event_id, host_id, participant_id, is_host, date_chosen, meal_chosen, radius_chosen, price) values ('${this.props.status.group_id}', '${this.props.status.host_id}', '${this.props.user.id}',${this.props.user.id === this.props.status.host_id}, '${this.props.data.date.date}', '${this.props.data.ethnic}', '${this.props.status.radius}', '${this.props.data.price}')`
            }
          })
          .then((result) => {
            if (result.data.success) {
              console.log('UPDATED RESPONSES TABLE');
              axios({
                method: 'POST',
                url: 'http://localhost:3000/db/101_super_duper_secret_101',
                headers: {
                  'Content-Type': 'application/json'
                },
                data: {
                  password: '$BIG_SHAQ101$',
                  type: 'search',
                  query: `update group_event set restaurant_chosen = true where id = '${this.props.status.group_id}'`
                }
              })
              .then((final) => {
                if (final.data.success) {
                  console.log('UPDATED GROUP_EVENT TABLE');;
                  Actions.myevents();
                }
              })
              .catch((err) => {
                console.log('Eats 4 ', err);
              });
            }
          })
        }
      })
    } else {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/db/101_super_duper_secret_101',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          password: '$BIG_SHAQ101$',
          type: 'search',
          query: `update participants set played = true where participant_id = '${this.props.user.id}' and group_id = '${this.props.status.group_id}'`
        }
      })
      .then((resp) => {
        console.log(resp);
        if (resp.data.success) {
          axios({
            method: 'POST',
            url: 'http://localhost:3000/db/101_super_duper_secret_101',
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
              password: '$BIG_SHAQ101$',
              type: 'search',
              query: `insert into responses (group_event_id, host_id, participant_id, is_host, date_chosen, meal_chosen, radius_chosen, price) values ('${this.props.status.group_id}', '${this.props.status.host_id}', '${this.props.user.id}',${this.props.user.id === this.props.status.host_id}, '${this.props.data.date.date}', '${this.props.data.ethnic}', '${this.props.status.radius}', '${this.props.data.price}')`
            }
          })
          .then((response) => {
            console.log(response.data);
            Actions.statuspage();
          })
          .catch((err) => {
            console.log('Eats 4 ', err);
          });
        }
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/DiscoverEat-3.png")}/>
          <View style={styles.tiles}>
            <View style={styles.tileContent}>
              <Text style={styles.topText}>What day?</Text>
              <CalendarTrivia dates={this.props.status.dates} fn={this.props.setDate}/>
            </View>
            <View style={styles.tileContent}>
              <Text style={styles.topText}>What time?</Text>
              <SelectorTime meal={this.props.status.meal} fn={this.props.setTime}/>
            </View>
          </View>
          <TouchableOpacity style={styles.next} onPress={() => this.handleSubmit()}>
            <Text style={styles.nextText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      status: state.status,
      user: state.user,
      data: state.yelpMulti,
      last: state.lastPerson
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      setDate: (date) => dispatch({type: 'DATE_CHOICE_MULTI', date: date}),
      setTime: (time) => dispatch({type: 'TIME_CHOICE_MULTI', time: time}),
    };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: 'transparent',
    height: verticalScale(667),
    width: scale(375),
    justifyContent: 'space-between'
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667),
    width: scale(375)
  },
  tiles: {
    marginTop: verticalScale(50)
  },
  tileContent: {
    height: verticalScale(150),
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: verticalScale(50)
  },
  topText: {
    fontSize: scale(45),
    fontFamily: 'Futura',
    color: 'white',
    textAlign: 'center'
  },
  rowSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  colSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(375),
    height: verticalScale(200)
  },
  timer: {
    fontSize: moderateScale(45),
    color: 'white',
    fontFamily: 'Futura'
  },
  hiker: {
    height: verticalScale(40),
    width: scale(20)
  },
  car: {
    height: verticalScale(40),
    width: scale(60)
  },
  timer: {
    fontSize: moderateScale(45),
    color: 'white',
    fontFamily: 'Futura'
  },
  gambleText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(30)
  },
  dice: {
    height: verticalScale(35),
    width: scale(35)
  },
  next: {
    width: '100%',
    height: verticalScale(70),
    backgroundColor: '#BFBFBF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  nextText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(35),
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Eats4);
