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

class StatusPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'See Result!',
      status: 'Closed!',
      result: {
        title: 'I believe in Santa',
        dates: 'Dec 24 at 11:59PM',
        day: 'Sunday',
        meal_type: 'Midnight Snack',
        guests: [Pauly, Alec]
      },
      host: {name: 'Fifty', pic: Fifty}
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
              // console.log(priceObj);
              for (const key in priceObj) {
                if (priceObj[key] > priceNumber) {
                  priceNumber = priceObj[key];
                  chosenPriceObj = key;
                }
              }

              // console.log('Date Obj ', chosenDateObj);
              // console.log('Meal OBJ', chosenMealObj);
              // console.log('Price OBJ ', chosenPriceObj);

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
    console.log('IN STATUS', this.props.status)
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundColor} source={require("../assets/MultiFormL.png")}/>
        <View style={styles.background}>
          <View style={styles.currentContainer}>
            <Text style={styles.statusText}>PLACE</Text>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.detailsLeft}>
              <Text style={styles.title}>{this.props.status.title}</Text>
              <Text style={styles.lightFont}>{this.props.status.meal}</Text>
              <Text style={styles.lightFont}>{this.props.status.dates}</Text>
            </View>
            <View style={styles.detailsRight}>
              <View style={styles.hostContainer}>
                <Text style={styles.lightFont}>H</Text>
                <View style={styles.hostCircle}>
                  <Image style={styles.headShot} source={this.state.host.pic}/>
                </View>
                <Text style={styles.hostName}>PLACE</Text>
              </View>
              <View style={styles.inviteContainer}>
                <Text style={styles.hostName}>invited {this.props.status.participants}</Text>
                <Image style={styles.addIcon} source={require("../assets/add2Grey.png")}/>
              </View>
            </View>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.guestsContainer}>
              <Text style={styles.guestTitle}>Guests</Text>
              <View style={styles.guestsBar}>
                {this.props.status.participants.map((guest)=>
                  <View style={styles.guestCircle}>
                    <Image style={styles.headShot} source={guest}/>
                  </View>
                )}
              </View>
            </View>
            <TouchableOpacity style={styles.resultContainer} onPress={() => this.handleButton()}>
              <LinearGradient colors={['#F63535', 'rgba(246, 53, 53, 0.75)', 'rgba(255, 27, 0, 0.75)', '#FF7F00']}
                style={styles.resultButton} location={[0.8, 0.66, 0.4, 0.2]}>
                <Text style={{fontFamily: 'Futura', color: 'white', fontSize: moderateScale(20), backgroundColor: 'transparent'}}>{this.state.text}</Text>
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
              <CategoryItem type={'Price'} img={dollarIcon} winning={'$$'} responded={[Pauly, Alec]}/>
              <CategoryItem type={'Cuisine'} img={cusIcon} winning={'Mexican'} responded={[Pauly, Alec]}/>
              <CategoryItem type={'Date'} img={calIcon} winning={'Sunday'} responded={[Pauly, Alec]}/>
              <CategoryItem type={'Time'} img={timeIcon} winning={'11:59PM'} responded={[Pauly, Alec]}/>
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
