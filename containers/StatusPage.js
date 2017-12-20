import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import CategoryItem from '../components/CategoryItem.js';
import axios from 'axios';

class StatusPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      host: '',
      text: ''
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/db/search?password=$BIG_SHAQ103$&tableName=participants&fields=id,group_id,participant_id,pending,accepted,host_id,restaurant_chosen,played&conditions=participant_id='${this.props.user.id}' and group_id='${this.props.status.id}'`)
    .then((response) => {
      console.log(response.data)
        if (response.data.result[0].restaurant_chosen === true) {
          this.setState({
            text: 'Result'
          });
        } else if (response.data.result[0].played === false && !response.data.result[0].restaurant_chosen) {
          this.setState({
            text: 'Play'
          });
        } else {
          this.setState({
            text: 'Pending'
          });
        }
        axios.get(`http://localhost:3000/db/search?password=$BIG_SHAQ103$&tableName=users&fields=firstname&conditions=id='${this.props.status.host_id}'`)
        .then((resp) => {
          this.setState({
            host: resp.data.result[0].firstname
          })
        })
    })
    .catch((err) => {
      console.log('Event Notification error is ', err);
    })
  }

  handleButton() {
    if (this.state.text === 'Play') {
      Actions.playMulti();
    } else if (this.state.text === 'Result') {
      Actions.multiresult();
    } else {
      Alert.alert('Game is ongoing', 'We\'ll let you know once the restaurant is chosen', {text: 'Ok'})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundColor} source={require("../assets/MultiForm.png")}/>
        <View style={styles.background}>
          <View style={styles.currentContainer}>
            <Text style={styles.statusText}>Game Closed!</Text>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.detailsLeft}>
              <Text style={styles.title}>{this.props.status.title}</Text>
              <Text style={styles.lightFont}>{this.props.status.dates}</Text>
            </View>
            <View style={styles.detailsRight}>
              <View style={styles.hostContainer}>
                <Text style={styles.lightFont}>H</Text>
                <View style={styles.hostCircle}>
                  <Image style={styles.headShot} source={require('../assets/profile.png')}/>
                </View>
                <Text style={styles.hostName}>{this.state.host}</Text>
              </View>
              <View style={styles.inviteContainer}>
                <Text>Invite Text</Text>
                <Text>icon</Text>
              </View>
            </View>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.guestsContainer}>
              <Text style={styles.lightFont}>Guests</Text>
              <View style={styles.guestsBar}>
                <View style={styles.guestCircle}>
                  <Image style={styles.headShot} source={require('../assets/profile.png')}/>
                </View>
                <View style={styles.guestCircle}>
                  <Image style={styles.headShot} source={require('../assets/profile.png')}/>
                </View>
              </View>
            </View>
            <View style={styles.resultContainer}>
              <TouchableOpacity style={styles.resultButton} onPress={() => this.handleButton()}><Text style={{fontFamily: 'Futura', color: 'white'}}>{this.state.text}</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.responsesContainer}>
            <View style={styles.categoryHeader}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={styles.headerText}>Categories</Text></View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={styles.headerText}>Winning</Text></View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={styles.headerText}>Responded</Text></View>
            </View>
            <View style={{flex: 8}}>
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
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
      status: state.status
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
    // backgroundColor: 'transparent',
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
    flex: 2.5,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  currentContainer: {
    width: scale(375),
    height: verticalScale(75),
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "#EBEBEB",
    paddingBottom: verticalScale(10)
  },
  actionContainer: {
    width: scale(375),
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  responsesContainer: {
    borderColor: 'white',
    borderBottomWidth: 1,
    width: scale(375),
    flex: 9
  },
  hostCircle: {
    height: verticalScale(50),
    width: scale(50),
    borderRadius: scale(25),
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headShot: {
    height: verticalScale(20),
    width: scale(20)
  },
  guestCircle: {
    height: verticalScale(40),
    width: scale(40),
    borderRadius: scale(20),
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: scale(5)
  },
  statusText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(20)
  },
  detailsLeft: {
    width: scale(200),
    justifyContent: 'center',
    paddingLeft: scale(20)
  },
  title: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(18),
  },
  lightFont: {
    fontFamily: 'Futura',
    color: '#8D8D8D',
    fontSize: moderateScale(16)
  },
  detailsRight: {
    width: scale(150),
    justifyContent: 'space-around'
  },
  hostContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  hostName: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(14),
  },
  inviteContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  guestsContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
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
    backgroundColor: 'red',
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
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatusPage);
