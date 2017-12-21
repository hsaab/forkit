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
      text: '',
    };
  }

  handleButton() {
    if (this.props.status.type === 'Play') {
      Actions.eats1multi();
    } else if (this.props.status.type === 'Result') {
      axios.get(`http://localhost:3000/db/search?password=$BIG_SHAQ103$&tableName=group_event&fields=yelp_id&conditions=id='${this.props.status.group_id}'`)
      .then((res) => {
        console.log(res.data.result);
        if (res.data.result[0].yelp_id.length > 0) {
          axios.get(`http://localhost:3000/yelp/findrestaurant?yelp_id=${res.data.result[0].yelp_id}`)
          .then((final) => {
            console.log(final.data.result);
            if (final.data.success) {
              this.props.finalDecision(final.data.result);
              Actions.singleresult();
            }
          })
        } else {
          axios.get(`http://localhost:3000/db/search?password=$BIG_SHAQ103$&tableName=responses&fields=group_event_id,host_id,participant_id,is_host,date_chosen,meal_chosen,radius_chosen,price&conditions=group_event_id='${this.props.status.group_id}'`)
          .then((resp) => {
              // console.log(resp.data.result)
              var chosenObj = {group_event_id: this.props.status.group_id, host_id: resp.data.result[0].host_id, radius_chosen: resp.data.result[0].radius_chosen};
              var dateObj = {};
              var mealObj = {};
              var priceObj = {};

              for(let i = 0; i < resp.data.result.length; i++) {
                if (dateObj.hasOwnProperty(resp.data.result[i].date)) {
                  dateObj[resp.data.result[i].date_chosen] += 1;
                } else {
                  dateObj[resp.data.result[i].date_chosen] = 1;
                }
              }

              for(let i = 0; i < resp.data.result.length; i++) {
                if (mealObj.hasOwnProperty(resp.data.result[i].meal_chosen)) {
                  mealObj[resp.data.result[i].meal_chosen] += 1;
                } else {
                  mealObj[resp.data.result[i].meal_chosen] = 1;
                }
              }

              for(let i = 0; i < resp.data.result.length; i++) {
                if (priceObj.hasOwnProperty(resp.data.result[i].price)) {
                  console.log(resp.data.result[i].price);
                  priceObj[resp.data.result[i].price] += 1;
                } else {
                  console.log(resp.data.result[i].price);
                  priceObj[resp.data.result[i].price] = 1;
                }
              }


              var date = '';
              var number = 0;
              var chosenDateObj = '';
              for (const key in dateObj) {
                if (dateObj[key] > number) {
                  number = dateObj[key];
                  chosenDateObj = key;
                }
              }

              var mealNumber = 0;
              var chosenMealObj = '';
              for (const key in mealObj) {
                if (mealObj[key] > mealNumber) {
                  mealNumber = dateObj[key];
                  chosenMealObj = key;
                }
              }

              var priceNumber = 0;
              var chosenPriceObj = '';
              console.log(priceObj);
              for (const key in priceObj) {
                if (priceObj[key] > priceNumber) {
                  priceNumber = priceObj[key];
                  chosenPriceObj = key;
                }
              }

              console.log('Date Obj ', chosenDateObj);
              console.log('Meal OBJ', chosenMealObj);
              console.log('Price OBJ ', chosenPriceObj);

              var finalObj = {group_id: chosenObj.group_event_id, host_id: chosenObj.host_id, date: chosenDateObj, meal: chosenMealObj, radius: chosenObj.radius_chosen, price: chosenPriceObj};
              this.props.finalDecider(finalObj);
              Actions.multiresult();
          })
        }
      })
      .catch((err) => {
        console.log('Result Error ', err);
      });
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
              <TouchableOpacity style={styles.resultButton} onPress={() => this.handleButton()}><Text style={{fontFamily: 'Futura', color: 'white'}}>{this.props.status.type}</Text></TouchableOpacity>
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
      finalDecider: (final) => dispatch({type: 'FINAL_MULTI', final: final}),
      finalDecision: (result) => dispatch({type: 'SINGLE_RESULT', result: result})
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
