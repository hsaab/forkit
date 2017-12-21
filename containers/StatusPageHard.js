import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import { LinearGradient } from 'expo';
import Navbar from '../components/Navbar.js';
import CategoryItem from '../components/CategoryItem.js';
import axios from 'axios';
import dollarIcon from '../assets/dollarsignsGrey.png';
import timeIcon from '../assets/timeMGrey.png';
import calIcon from '../assets/calendarMGray.png';
import cusIcon from '../assets/cuisineMGray.png';
import Fifty from '../assets/prof/50.png';
import Alec from '../assets/prof/alec.png';
import Andrew from '../assets/prof/andrew.png';
import Ariana from '../assets/prof/ariana.png';
import Brandon from '../assets/prof/Brandon.png';
import Hassan from '../assets/prof/Hassan.png';
import Kobe from '../assets/prof/kobe.png';
import Luda from '../assets/prof/luda.png';
import Megan from '../assets/prof/megan.png';
import Natalie from '../assets/prof/natalie.png';
import Paul from '../assets/prof/Paul.png';
import Pauly from '../assets/prof/pauly.png';
import Queen from '../assets/prof/queen.png';
import Shakira from '../assets/prof/shakira.png';
import Vasish from '../assets/prof/Vasish.png';
import CategoryItemHard from '../components/CategoryItemHard.js';
import moment from 'moment';

class StatusPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'Closed!',
      result: {
        title: 'I believe in Santa',
        dates: 'Dec 24 at 11:59PM',
        day: 'Sunday',
        meal_type: 'Midnight Snack',
        guests: [Pauly, Alec]
      },
      host: {name: 'Hassan', pic: Hassan},
      homies: [Brandon, Vasish, Paul]
    };
  }

  componentDidMount() {
    // axios.get(`http://localhost:3000/db/search?password=$BIG_SHAQ103$&tableName=participants&fields=id,group_id,participant_id,pending,accepted,host_id,restaurant_chosen,played&conditions=participant_id='${this.props.user.id}' and group_id='${this.props.status.id}'`)
    // .then((response) => {
    //   console.log(response.data)
    //     if (response.data.result[0].restaurant_chosen === true) {
    //       this.setState({
    //         text: 'Result'
    //       });
    //     } else if (response.data.result[0].played === false && !response.data.result[0].restaurant_chosen) {
    //       this.setState({
    //         text: 'Play'
    //       });
    //     } else {
    //       this.setState({
    //         text: 'Pending'
    //       });
    //     }
    //     axios.get(`http://localhost:3000/db/search?password=$BIG_SHAQ103$&tableName=users&fields=firstname&conditions=id='${this.props.status.host_id}'`)
    //     .then((resp) => {
    //       this.setState({
    //         host: resp.data.result[0].firstname
    //       })
    //     })
    // })
    // .catch((err) => {
    //   console.log('Event Notification error is ', err);
    // })
  }

  handleButton() {
    // if (this.state.text === 'Play') {
    //   Actions.playMulti();
    // } else if (this.state.text === 'Result') {
    //   Actions.multiresult();
    // } else {
    //   Alert.alert('Game is ongoing', 'We\'ll let you know once the restaurant is chosen', {text: 'Ok'})
    // }
    Actions.eats1multi();
  }

  render() {
    let statusVal = this.props.multi.price.length > 0 ? "Pending" : "Open";
    let dateVal = moment(this.props.multi.date).toString().length > 0 ? moment(this.props.multi.date).format('ddd') : "Date TBD";
    let dateVal2 = moment(this.props.multi.date).toString().length > 0 ? moment(this.props.multi.date).format('ddd') : "";
    let profVal = moment(this.props.multi.date).toString().length > 0 ? Hassan : null;
    let buttonText = moment(this.props.multi.date).toString().length > 0 ? 'Pending' : 'Play';
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundColor} source={require("../assets/MultiFormL.png")}/>
        <View style={styles.background}>
          <View style={styles.currentContainer}>
            <Text style={styles.statusText}>{statusVal}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.detailsLeft}>
              <Text style={styles.title}>{this.props.form.title}</Text>
              <Text style={styles.lightFont}>{this.props.form.meal}</Text>
              <Text style={styles.lightFont}>{dateVal}</Text>
            </View>
            <View style={styles.detailsRight}>
              <View style={styles.hostContainer}>
                <Text style={styles.lightFont}>H</Text>
                <View style={styles.hostCircle}>
                  <Image style={styles.headShot} source={this.state.host.pic}/>
                </View>
                <Text style={styles.hostName}>{this.state.host.name}</Text>
              </View>
              <View style={styles.inviteContainer}>
                <Text style={styles.hostName}>invited {this.props.friend.length} ppl</Text>
                <Image style={styles.addIcon} source={require("../assets/add2Grey.png")}/>
              </View>
            </View>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.guestsContainer}>
              <Text style={styles.guestTitle}>Guests</Text>
              <View style={styles.guestsBar}>
                {this.state.homies.map((guest)=>
                  <View style={styles.guestCircle}>
                    <Image style={styles.headShot} source={guest}/>
                  </View>
                )}
              </View>
            </View>
            <TouchableOpacity style={styles.resultContainer} onPress={() => this.handleButton()}>
              <LinearGradient colors={['#F63535', 'rgba(246, 53, 53, 0.75)', 'rgba(255, 27, 0, 0.75)', '#FF7F00']}
                style={styles.resultButton} location={[0.8, 0.66, 0.4, 0.2]}>
                <Text style={{fontFamily: 'Futura', color: 'white', fontSize: moderateScale(20), backgroundColor: 'transparent'}}>{buttonText}</Text>
              </LinearGradient>
              {/* <LinearGradient colors={['#303F4C', '#3B4955', '#AFAFAF']}
                style={styles.resultButton} location={[0.3, 0.4, 1]}>
                <Text style={{fontFamily: 'Futura', color: 'white', fontSize: moderateScale(20)}}>Go to Result</Text>
              </LinearGradient> */}
            </TouchableOpacity>
          </View>
          <View style={styles.responsesContainer}>
            <View style={styles.categoryHeader}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={styles.headerText}>Categories</Text></View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={styles.headerText}>Winning</Text></View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={styles.headerText}>Responded</Text></View>
            </View>
            <View style={{flex: 8}}>
              <CategoryItemHard type={'Price'} img={dollarIcon} winning={this.props.multi.price} responded={[profVal]}/>
              <CategoryItemHard type={'Cuisine'} img={cusIcon} winning={this.props.multi.ethnic} responded={[profVal]}/>
              <CategoryItemHard type={'Date'} img={calIcon} winning={dateVal2} responded={[profVal]}/>
              <CategoryItemHard type={'Time'} img={timeIcon} winning={this.props.multi.time} responded={[profVal]}/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

StatusPage.propTypes = {
};

const mapStateToProps = (state) => {
    return {
      user: state.user,
      status: state.status,
      form: state.form,
      friend: state.friend.friends,
      multi: state.yelpMulti
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
    height: verticalScale(667-50),
    width: scale(375),
  },
  backgroundColor: {
    position: 'absolute',
    top: 0,
    height: verticalScale(667),
    width: scale(375)
  },
  detailsContainer: {
    width: scale(375),
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  currentContainer: {
    width: scale(375),
    height: verticalScale(60),
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "#EBEBEB",
    paddingBottom: verticalScale(10)
  },
  actionContainer: {
    width: '95%',
    flex: 2,
    marginBottom: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  responsesContainer: {
    borderColor: 'white',
    borderBottomWidth: 1,
    width: scale(375),
    flex: 7,
    marginTop: verticalScale(15)
  },
  hostCircle: {
    height: verticalScale(50),
    width: scale(50),
    borderRadius: scale(25),
    // borderColor: 'black',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headShot: {
    height: verticalScale(40),
    width: scale(40)
  },
  guestCircle: {
    height: verticalScale(40),
    width: scale(40),
    borderRadius: scale(20),
    // borderColor: 'black',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: scale(5)
  },
  guestTitle: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(20),
    left: scale(5)
  },
  statusText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(20)
  },
  detailsLeft: {
    width: scale(200),
    justifyContent: 'center',
    paddingLeft: scale(5)
  },
  title: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(20),
    marginBottom: verticalScale(5)
  },
  lightFont: {
    fontFamily: 'Futura',
    color: '#8D8D8D',
    fontSize: moderateScale(20)
  },
  detailsRight: {
    width: scale(125),
    justifyContent: 'center',
  },
  hostContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  hostName: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(16),
  },
  inviteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: scale(120)
  },
  addIcon: {
    width: scale(35),
    height: verticalScale(35),
    overflow: 'visible'
  },
  guestsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 3.5
  },
  guestsBar: {
    width: scale(220),
    height: verticalScale(55),
    backgroundColor: 'rgba(255,255,255,.5)',
    borderRadius: scale(55),
    flexDirection: 'row',
    alignItems: 'center'
  },
  resultContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  resultButton: {
    width: scale(120),
    height: verticalScale(55),
    borderRadius: scale(30),
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryHeader: {
    flex: 1,
    borderColor: '#646464',
    borderBottomWidth: scale(2),
    width: scale(375),
    flexDirection: 'row',
  },
  headerText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(18),
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatusPage);
