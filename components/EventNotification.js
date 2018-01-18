import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import X from '../assets/xIcon.png';
import Check from '../assets/checkMDGrey.png';
import axios from 'axios';

class EventNotification extends Component{
    constructor(props){
        super(props);
        this.state = {
          show: true
        };
    }

    componentWillMount() {
      axios.get(`http://localhost:3000/db/search?password=$BIG_SHAQ103$&tableName=users&fields=firstname,lastname&conditions=id='${this.props.data.host_id}'`)
      .then((resp) => {
        console.log(resp.data);
        let firstInitial = resp.data.result[0].firstname.slice(0,1);
        let lastInitial = resp.data.result[0].lastname.slice(0,1);
        let initials = firstInitial + lastInitial;
      })
      .catch((err) => {
        console.log('Event Notification error is ', err);
      })
    }

    handleCheck() {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/db/101_super_duper_secret_101',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          password: '$BIG_SHAQ101$',
          type: 'search',
          query: `update participants set pending = false, accepted = true, played = false, restaurant_chosen = false where participant_id = '${this.props.user}' and group_id = '${this.props.data.id}'`
        }
      })
      .then(response => {
        if (response.data.success) {
          this.setState({
            show: false
          })
          console.log('Success')
        }
      })
      .catch(e => {
        console.log(e);
      })
    }

    showNotification() {
      return (
          <View style={styles.container}>
            <View style={styles.background}>
              <View style={styles.mealContainer}>
                <Text style={styles.subtitleText}>{this.props.data.meal_type}</Text>
                <View style={styles.rowContainer}>
                  <View style={styles.colContainer}>
                    <Text style={styles.detailText}>{this.props.data.dates}</Text>
                    <Text style={styles.detailText}>{this.props.data.day}</Text>
                  </View>
                  <View style={styles.rowPicContainer}>
                    <View style={styles.hostContainer}>
                      <Text style={styles.hostText}>H</Text>
                      <View style={styles.circle}>
                        <Image style={styles.headShot} source={this.props.host}/>
                      </View>
                    </View>
                    <View style={styles.guestContainer}>
                      <Text style={styles.guestText}>G</Text>
                      {this.props.data.guests.map((result) =>
                        <View style={styles.circle}>
                          <Image style={styles.headShot} source={result}/>
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{this.props.data.title}</Text>
                <View style={styles.rowIconContainer}>
                  <TouchableOpacity onPress={() => this.handleCheck()}>
                    <Image style={styles.rightButton} source={Check}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.handleClose()}>
                    <Image style={styles.rightButton} source={X}/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
      );
    }

    notShow() {
      return (
        null
      );
    }


    render(){
      return(
      <View>
        {this.state.show ? this.showNotification() : this.notShow()}
      </View>
    )
    }
}
export default EventNotification;
var styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: 'transparent',
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(4),
    marginBottom: verticalScale(4)
  },
  background: {
    backgroundColor: 'rgba(255,255,255,.31)',
    width: scale(358),
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowColor: 'grey',
    shadowOffset: { height: verticalScale(4), width: 0 },
  },
  mealContainer: {
    flex: 1,
    top: verticalScale(8),
    left: scale(8)
  },
  subtitleText: {
    color: '#646464',
    fontSize: moderateScale(18),
    fontFamily: 'Futura',
  },
  titleText: {
    color: '#646464',
    fontSize: moderateScale(20),
    fontFamily: 'Futura'
  },
  detailText: {
    color: '#8D8D8D',
    fontSize: moderateScale(15),
    fontFamily: 'Futura',
  },
  titleContainer: {
    flex: 1,
    top: verticalScale(8),
    left: scale(8),
    marginBottom: moderateScale(20),
    marginTop: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  colContainer: {
    flexDirection: 'column'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rowIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: scale(75)
  },
  rowPicContainer: {
    flexDirection: 'row',
    width: scale(375/2)
  },
  hostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: scale(45)
  },
  circle: {
    height: verticalScale(30),
    width: scale(30),
    borderRadius: scale(30/2),
    alignItems: 'center',
    justifyContent: 'center'
  },
  headShot: {
    height: verticalScale(30),
    width: scale(30),
    overflow: 'visible'
  },
  guestContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: scale(150-45),
    left: scale(5)
  },
  guestText: {
    color: '#8D8D8D',
    fontSize: moderateScale(13),
    right: scale(5)
  },
  hostText: {
    color: '#8D8D8D',
    fontSize: moderateScale(13),
    right: scale(5)
  },
  rightButton: {
    width: scale(30),
    height: verticalScale(30),
    right: scale(20),
    overflow: 'visible'
  }
});
